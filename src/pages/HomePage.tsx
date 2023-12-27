import AdvertisementVideo from "@/components/AdVideo";
import Benefits from "@/components/Benefits";
import BetterCare from "@/components/BetterCare";
import CallToAction from "@/components/CallToAction";
import Difference from "@/components/Difference";
import Footer from "@/components/Footer";
import Healthcare from "@/components/Healthcare";
import Location from "@/components/Location";
import MainBanner from "@/components/MainBanner";
import Navbar from "@/components/Navbar";
import Quality from "@/components/Quality";
import Switch from "@/components/Switch";
import Together from "@/components/Together";
import TourVideo from "@/components/TourVideo";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <CallToAction />
      <AdvertisementVideo />
      <Healthcare />
      <Benefits />
      <TourVideo />
      <BetterCare />
      <Switch />
      <Difference />
      <Together />
      <Quality />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
