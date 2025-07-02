import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { session_id } = await req.json();

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    const session = await stripe.checkout.sessions.retrieve(session_id);

    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    if (session.payment_status === "paid") {
      // Update order status
      const { data: order, error: orderError } = await supabaseService
        .from("orders")
        .update({ status: "paid" })
        .eq("stripe_session_id", session_id)
        .select(`
          *,
          order_items (
            *,
            products (*)
          )
        `)
        .single();

      if (orderError) throw orderError;

      // Create download records for purchased photos
      const photoItems = order.order_items.filter((item: any) => 
        item.products?.product_type === 'photo'
      );

      if (photoItems.length > 0) {
        const downloads = photoItems.map((item: any) => ({
          user_id: order.user_id,
          product_id: item.product_id,
          order_id: order.id,
          max_downloads: 5,
          expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 1 year
        }));

        await supabaseService.from("user_downloads").insert(downloads);
      }
    }

    return new Response(JSON.stringify({ 
      payment_status: session.payment_status,
      order_updated: session.payment_status === "paid"
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});