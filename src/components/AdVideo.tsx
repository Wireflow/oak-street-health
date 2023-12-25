import React from "react";
import Section from "./ui/section";
import Image from "next/image";
import VideoFrame from "./VideoFrame";
import Title from "./ui/title";

type Props = {};

const AdvertisementVideo = (props: Props) => {
  return (
    <Section size={"lg"}>
      <div className="flex justify-between md:items-start items-center  flex-col xl:flex-row gap-8">
        <Title variant={"green"} size={"md"} className="text-center md:text-start" >
          Helping older adults live healthier lives.
        </Title>
        <Image
          src={"/svg-aarp-logo.svg"}
          alt="aarp logo"
          width={230}
          height={70}
        />
      </div>
      <div className="mt-12 border-8 rounded-xl overflow-hidden border-theme-green shadow-xl">
        <VideoFrame link="https://www.youtube.com/embed/5kHvrBg54kc?si=fkpg18Rsuu0UMNL5" />
      </div>
    </Section>
  );
};

export default AdvertisementVideo;
