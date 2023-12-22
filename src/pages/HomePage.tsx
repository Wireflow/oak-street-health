import Footer from "@/components/Footer";
import Location from "@/components/Location";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
   <>
   <Location/>
   <Footer/>
   </>
  );
};

export default HomePage;
