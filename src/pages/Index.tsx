
import Header from "../components/Header";
import Hero from "../components/Hero";
import BrandStatement from "../components/BrandStatement";
import ProductGrid from "../components/ProductGrid";
import ProductShowcase from "../components/ProductShowcase";
import PromoSection from "../components/PromoSection";
import FeaturedSection from "../components/FeaturedSection";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useProducts } from "@/hooks/useProducts";

const Index = () => {
  const { products, loading } = useProducts();
  
  const photographyProducts = products.filter(p => p.product_type === 'photo').slice(0, 4);
  const culinaryProducts = products.filter(p => p.product_type === 'service' && p.title.toLowerCase().includes('cul')).slice(0, 4);
  const featuredProducts = products.filter(p => p.is_featured).slice(0, 4);

  const formatProducts = (prods: any[]) => prods.map(p => ({
    id: p.id,
    image: p.image_url,
    title: p.title,
    price: `$${p.price}`,
    originalPrice: p.original_price ? `$${p.original_price}` : undefined
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <BrandStatement />
      
      <ProductGrid 
        title="Photography Collections" 
        products={formatProducts(photographyProducts)}
        background="gray"
      />
      
      <ProductGrid 
        title="Culinary Services & Custom Orders" 
        products={formatProducts(culinaryProducts)}
        variant="secondary"
        showViewAll={false}
        background="white"
      />
      
      <ProductShowcase />
      
      <ProductGrid 
        title="Featured Offerings" 
        products={formatProducts(featuredProducts)}
        background="gray"
      />
      
      <Testimonials />
      <PromoSection />
      <FeaturedSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
