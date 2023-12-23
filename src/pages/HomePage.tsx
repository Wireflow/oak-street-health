import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import React from "react";
import MainBanner from "@/components/main-banner";
import Quality from "@/components/Quality";
import Together from "@/components/Together";
import CallToAction from "@/components/call-to-action";
import AdvertisementVideo from "@/components/ad-video";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <CallToAction />
      <AdvertisementVideo />
      <Together />
      <Quality />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
