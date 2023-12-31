import React from "react";
import VideoFrame from "./VideoFrame";
import Section from "./ui/section";
import Title from "./ui/title";

type Props = {};

const TourVideo = (props: Props) => {
  return (
    <Section size={"lg"}>
      <Title
        variant={"green"}
        size={"sm"}
        className="md:text-start text-center"
      >
        Oak Street Health Drone Tour
      </Title>
      <div className="mt-5 border-8 rounded-xl overflow-hidden border-theme-green shadow-xl">
        <VideoFrame link="https://www.youtube.com/embed/V5PeFE47InQ?si=DrsTv2AFgkGh_EZo" />
      </div>
    </Section>
  );
};

export default TourVideo;
