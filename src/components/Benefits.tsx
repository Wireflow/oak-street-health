import React, { cloneElement } from "react";
import Section from "./ui/section";
import Title from "./ui/title";
import Image from "next/image";
import { Clock, Home, Plus, User2 } from "lucide-react";
import benefitsData from "@/data/benefitsData";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <Section
      background={"green"}
      size={"lg"}
      className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 lg:gap-40"
      shape={{
        color: "light-green",
        rotate: 40,
        left: -300,
        bottom: -300,
        scale: 1.4,
      }}
    >
      <div className="grid gap-12 z-10">
        <Title variant={"white"} size={"md"}>
          See how <span className="text-theme-orange">easy</span>{" "}
          <br className="hidden md:block" />
          healthcare can be.
        </Title>
        <Image
          src={"/svg-illustration-2.svg"}
          alt="illustration"
          width={380}
          height={380}
          className="z-10 hidden md:block"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-18 lg:gap-24 z-20">
        {benefitsData.map((benefit, index) => {
          return (
            <div
              key={`benefit-${index}`}
              className="flex flex-col items-start gap-2 md:max-w-[300px]"
            >
              {benefit.icon}
              <p className="text-lg font-semibold text-theme-lighter-green">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Benefits;
