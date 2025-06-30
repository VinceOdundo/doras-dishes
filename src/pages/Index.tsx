
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

const Index = () => {
  const fewPiecesLeft = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      title: "Out Of Homegrown Hoodie - Choc",
      price: "$85.00",
      originalPrice: "$120.00"
    },
    {
      id: "2", 
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Story Graphic Hoodie - Grey - Youth Sizing",
      price: "$75.00"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop", 
      title: "Own Your Vibe Crewneck - Navy - All Sizes",
      price: "$73.00"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Story Graphic Hoodie - Grey - Youth Sizing", 
      price: "$75.00"
    }
  ];

  const extendedTees = [
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      title: "Extended Tees",
      price: "$35.00"
    },
    {
      id: "6", 
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Basic Crew",
      price: "$55.00"
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Basic Hood",
      price: "$85.00"
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Quick Sunrise", 
      price: "$73.00"
    }
  ];

  const bestSellers = [
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      title: "Story Sunrise - Beige",
      price: "$75.00",
      isNew: true
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop", 
      title: "Cosmic Ball - Spring",
      price: "$85.00"
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Protect x Letter Oversized Crewneck",
      price: "$85.00"
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      title: "Millennial - Spring",
      price: "$85.00"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <ProductGrid 
        title="Only a Few Pieces Left" 
        products={fewPiecesLeft}
      />
      
      <ProductGrid 
        title="Extended Tees Collection" 
        products={extendedTees}
        showViewAll={false}
      />
      
      <ProductGrid 
        title="Best Sellers" 
        products={bestSellers}
      />
      
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
