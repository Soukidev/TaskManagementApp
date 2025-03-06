// import { useState } from "react";
// import { Button } from "./components/ui/button";
// import { Card, CardContent } from "./components/ui/card";
// import { motion } from "framer-motion";

import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features";
import Pricing from "./components/ui/Pricing";
import Footer from "./components/ui/Footer";
import SignUp from "./components/ui/SignUp";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black text-white">
      <Navbar />
      <Hero />
      <SignUp />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
