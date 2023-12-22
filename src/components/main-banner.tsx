import React from "react";
import Section from "./ui/section";
import Image from "next/image";

type Props = {};

const MainBanner = (props: Props) => {
  return (
    <Section
      size={"md"}
      background={"green"}
      className="flex flex-row gap-4 items-center justify-center"
    >
      <Image
        src={"/svg-logo-icon.svg"}
        alt="logo-icon"
        className="hidden md:block"
        width={75}
        height={75}
      />
      <h1 className="text-3xl lg:text-5xl text-theme-bright-white font-bold text-center">
        Healthcare designed specially for
        <span className=" text-theme-orange"> you</span>.
      </h1>
    </Section>
  );
};

export default MainBanner;
