
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

const Index = () => {
  const photographyCollections = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      title: "Wildlife Photography Collection",
      price: "$25.00",
      originalPrice: "$35.00"
    },
    {
      id: "2", 
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      title: "Portrait Photography - Canvas Print",
      price: "$45.00"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=400&fit=crop", 
      title: "Nature & Landscape Collection",
      price: "$30.00"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop",
      title: "Travel Photography Bundle", 
      price: "$55.00"
    }
  ];

  const culinaryServices = [
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      title: "Custom Luo Dishes",
      price: "$35.00"
    },
    {
      id: "6", 
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      title: "Kenyan Feast Catering",
      price: "$85.00"
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=400&fit=crop",
      title: "Swahili Fusion Menu",
      price: "$65.00"
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
      title: "International Cuisine", 
      price: "$45.00"
    }
  ];

  const featuredItems = [
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      title: "Food Photography Course",
      price: "$125.00",
      isNew: true
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=400&h=400&fit=crop", 
      title: "Photography Workshop - Nature",
      price: "$95.00"
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      title: "Cookbook Pre-Order (Coming Soon)",
      price: "$29.99"
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=400&fit=crop",
      title: "Premium Canvas Prints",
      price: "$75.00"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <BrandStatement />
      
      <ProductGrid 
        title="Photography Collections" 
        products={photographyCollections}
        background="gray"
      />
      
      <ProductGrid 
        title="Culinary Services & Custom Orders" 
        products={culinaryServices}
        variant="secondary"
        showViewAll={false}
        background="white"
      />
      
      <ProductShowcase />
      
      <ProductGrid 
        title="Featured Offerings" 
        products={featuredItems}
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
