
import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import PortfolioGallery from '../components/PortfolioGallery';
import CustomerSegments from '../components/CustomerSegments';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSlider />
        <PortfolioGallery />
        <CustomerSegments />
        <AboutSection />
        <StatsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
