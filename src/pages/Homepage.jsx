import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Category from '../components/Category';
import RecentProperties from '../components/RecentProperties';
import ToolsAndResources from '../components/ToolsAndResources';
import RealEstateAgents from '../components/RealEstateAgents';
import Testimonials from '../components/Testimonials';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Category />
      <RecentProperties />
      <ToolsAndResources />
      <RealEstateAgents />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Homepage;

