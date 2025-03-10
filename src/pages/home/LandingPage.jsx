import React from "react";
import {
  ClientsCarousel,
  HeroSection,
  Navbar,
  Sidebar,
} from "../../components";

const LandingPage = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-[#f7f7f7] scroll-smooth overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <ClientsCarousel />
    </main>
  );
};

export default LandingPage;
