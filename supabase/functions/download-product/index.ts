import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { download_id, product_id } = await req.json();

    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Get download record
    const { data: download, error: downloadError } = await supabaseService
      .from("user_downloads")
      .select(`
        *,
        products (*)
      `)
      .eq("id", download_id)
      .eq("user_id", user.id)
      .single();

    if (downloadError || !download) {
      throw new Error("Download not found or access denied");
    }

    // Check download limits
    if (download.download_count >= download.max_downloads) {
      throw new Error("Download limit exceeded");
    }

    // Check expiration
    if (download.expires_at && new Date(download.expires_at) < new Date()) {
      throw new Error("Download link has expired");
    }

    // Update download count
    await supabaseService
      .from("user_downloads")
      .update({ download_count: download.download_count + 1 })
      .eq("id", download_id);

    // Return high-resolution URL (in production, this would be a signed URL to the actual file)
    const downloadUrl = download.products.full_resolution_url || download.products.image_url;

    return new Response(JSON.stringify({ 
      download_url: downloadUrl,
      downloads_remaining: download.max_downloads - download.download_count - 1
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Download error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});