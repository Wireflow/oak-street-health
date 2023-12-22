import Image from "next/image";
import React from "react";
import Section from "./ui/section";

type Props = {};

const Location = (props: Props) => {
  return (
    <Section>
      <div>
        <Image src="/map.png" alt="map" width={900} height={800} />
        <h1 className="text-4xl font-medium text-theme-green">
          Visit an Oak Street Health location near you.
        </h1>
      </div>
    </Section>
  );
};

export default Location;
