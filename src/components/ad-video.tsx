import React from "react";
import Section from "./ui/section";
import Image from "next/image";
import VideoFrame from "./video-frame";

type Props = {};

const AdvertisementVideo = (props: Props) => {
  return (
    <Section size={"lg"}>
      <div className="flex justify-between items-center flex-col md:flex-row gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-theme-typography-green text-center">
          Helping older adults live healthier lives.
        </h2>
        <Image
          src={"/svg-aarp-logo.svg"}
          alt="aarp logo"
          width={330}
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
