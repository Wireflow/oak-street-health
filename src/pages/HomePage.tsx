import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import React from "react";
import MainBanner from "@/components/MainBanner";
import Quality from "@/components/Quality";
import Together from "@/components/Together";
import CallToAction from "@/components/CallToAction";
import AdvertisementVideo from "@/components/AdVideo";
import Benefits from "@/components/Benefits";
import Difference from "@/components/Difference";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <CallToAction />
      <AdvertisementVideo />
      <Benefits />
      <Difference/>
      <Together />
      <Quality />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
