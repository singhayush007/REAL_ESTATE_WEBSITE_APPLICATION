import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Category from '../components/Category';
import RecentProperties from '../components/RecentProperties';
import ToolsAndResources from '../components/ToolsAndResources';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Category />
      <RecentProperties />
      <ToolsAndResources />
    </>
  );
};

export default Homepage;

