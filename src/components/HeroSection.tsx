
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    title: "Ανακαλύψτε την Ιαπωνία",
    description: "Εξερευνήστε την αρμονία μεταξύ παράδοσης και τεχνολογίας"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    title: "Περιπλανηθείτε στην Ιταλία",
    description: "Απολαύστε γαστρονομικές εμπειρίες και την πλούσια ιστορία"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    title: "Εξωτική Ταϊλάνδη",
    description: "Μαγευτικές παραλίες και συναρπαστική κουλτούρα"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Αναζήτηση για:', searchQuery);
    // Implement search functionality
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      
      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4 animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 animate-fade-in">
          {slides[currentSlide].description}
        </p>
        
        {/* Search form */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl flex items-center gap-2 animate-zoom-in">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Αναζητήστε προορισμό, αξιοθέατα ή εμπειρίες..."
              className="pl-10 py-6 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="py-6 px-8 bg-travel-blue hover:bg-travel-blue/90">
            Αναζήτηση
          </Button>
        </form>
        
        {/* Slider indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
