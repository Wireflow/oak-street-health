import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import React from "react";
import MainBanner from "@/components/main-banner";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
