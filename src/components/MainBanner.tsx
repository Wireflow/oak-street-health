import React from "react";
import Section from "./ui/section";
import Image from "next/image";
import Title from "./ui/title";

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
      <Title size={"sm"} variant={"white"} className="text-center text-[20px]">
        Healthcare designed specially for
        <span className=" text-theme-orange"> you</span>.
      </Title>
    </Section>
  );
};

export default MainBanner;
