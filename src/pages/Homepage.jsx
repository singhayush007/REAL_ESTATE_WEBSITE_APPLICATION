import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Category from '../components/Category'; 
import RecentProperties from '../components/RecentProperties';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Category />
      <RecentProperties/>
    </>
  );
};

export default Homepage;

