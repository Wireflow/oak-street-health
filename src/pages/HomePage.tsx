import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
