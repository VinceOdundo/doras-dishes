-- Create user roles enum and table
CREATE TYPE public.app_role AS ENUM ('user', 'admin', 'superadmin');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Only superadmins can manage roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'superadmin'));

-- Add admin policies to existing tables
CREATE POLICY "Admins can view all products"
ON public.products
FOR SELECT
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can manage products"
ON public.products
FOR ALL
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can view all orders"
ON public.orders
FOR SELECT
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can update orders"
ON public.orders
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can view all bookings"
ON public.bookings
FOR SELECT
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can manage bookings"
ON public.bookings
FOR ALL
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

-- Create site_settings table for dynamic content
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for site_settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for site_settings
CREATE POLICY "Everyone can read site settings"
ON public.site_settings
FOR SELECT
USING (true);

CREATE POLICY "Only superadmins can manage site settings"
ON public.site_settings
FOR ALL
USING (public.has_role(auth.uid(), 'superadmin'));

-- Insert default site settings
INSERT INTO public.site_settings (key, value, description) VALUES
('hero_title', 'From Siaya to Missouri', 'Main hero title'),
('hero_subtitle', 'Discover authentic African cuisine and stunning photography by Dora Abong''o. Where culinary tradition meets artistic vision.', 'Hero subtitle text'),
('hero_photos_count', '300000', 'Number of photos captured'),
('brand_experience_years', '15', 'Years of experience'),
('brand_description', 'Dora Abong''o brings together her rich heritage from Siaya, Kenya, and her life in Missouri through two extraordinary passions: capturing life''s most precious moments and creating culinary experiences that tell stories across cultures.', 'Brand description text'),
('stats_clients_count', '500', 'Number of happy clients'),
('stats_events_count', '25', 'Number of events catered'),
('contact_email', 'hello@dorasdishes.com', 'Contact email address'),
('contact_phone', '+1 (573) 555-0123', 'Contact phone number'),
('business_address', 'Columbia, Missouri, USA', 'Business address');

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  location TEXT NOT NULL,
  image_url TEXT,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  service TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for testimonials
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for testimonials
CREATE POLICY "Everyone can read active testimonials"
ON public.testimonials
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage testimonials"
ON public.testimonials
FOR ALL
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, location, image_url, text, rating, service, is_featured) VALUES
('Sarah Johnson', 'Wedding Client', 'Columbia, MO', 'https://images.unsplash.com/photo-1494790108755-2616c57c93e4?w=100&h=100&fit=crop', 'Dora''s photography captured our wedding day perfectly! Her ability to blend cultural traditions with modern aesthetics is incredible. The food for our reception was absolutely divine - our guests are still talking about it!', 5, 'Wedding Photography & Catering', true),
('Michael Chen', 'Corporate Client', 'Kansas City, MO', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', 'We hired Dora for our company''s annual event. Her professional photography skills and the authentic African cuisine she provided made our event unforgettable. Highly recommend her services!', 5, 'Event Photography & Catering', true),
('Lisa Thompson', 'Family Portrait Client', 'St. Louis, MO', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', 'Dora has such a warm personality that made our family photo session so comfortable. She captured beautiful moments of our children and the prints we ordered are gallery-quality!', 5, 'Family Photography', true);

-- Create gallery table for dynamic hero images
CREATE TABLE public.gallery (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  is_hero BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for gallery
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Create policies for gallery
CREATE POLICY "Everyone can read active gallery items"
ON public.gallery
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage gallery"
ON public.gallery
FOR ALL
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

-- Insert hero gallery items
INSERT INTO public.gallery (title, description, image_url, category, is_hero, sort_order) VALUES
('Traditional Luo Cuisine', 'Authentic flavors from Siaya', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop', 'cuisine', true, 1),
('Portrait Sessions', 'Capturing life''s moments', 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop', 'photography', true, 2),
('Wildlife Collection', 'Kenya''s natural beauty', 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', 'wildlife', true, 3),
('Catering Services', 'Events & celebrations', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=500&fit=crop', 'catering', true, 4);

-- Create trigger for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for timestamp updates
CREATE TRIGGER update_user_roles_updated_at
  BEFORE UPDATE ON public.user_roles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_updated_at
  BEFORE UPDATE ON public.gallery
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();