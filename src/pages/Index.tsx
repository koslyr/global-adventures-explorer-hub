
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PopularDestinations from '@/components/PopularDestinations';
import TravelCategories from '@/components/TravelCategories';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import InteractiveMap from '@/components/InteractiveMap';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TravelCategories />
        <PopularDestinations />
        <InteractiveMap />
        <FeaturedBlogs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
