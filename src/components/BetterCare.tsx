import React from "react";
import Section from "./ui/section";
import { BetterCareData } from "@/data/BetterCareData";
import Title from "./ui/title";

type Props = {};

const BetterCare = (props: Props) => {
  return (
    <Section className="flex flex-col gap-10 py-10" background={"green"}>
      <div>
        <Title variant={"white"}>Better care, better lives.</Title>

        <p className="text-white md:text-[28px] text-[20px] pt-5">
          Oak Street Health’s value-based care model delivers measurably better
          health outcomes for patients:
        </p>
      </div>
      <div className="grid sm:grid-cols-2  xl:gap-[50px] gap-5">
        {BetterCareData.map((stat, i) => {
          return (
            <>
              <div
                className="bg-theme-light-green xl:px-10 xl:py-5 p-5 rounded flex flex-col md:text-start text-center md:flex-row items-center gap-5"
                key={i}
              >
                <h2 className="xl:text-[88px] text-[60px] font-bold flex text-theme-green">
                  {stat.percent}{" "}
                  <span className="xl:text-[40px] text-[25px]">%</span>
                </h2>
                <p className="xl:text-[24px] text-[18px]   font-semibold ">
                  {stat.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </Section>
  );
};

export default BetterCare;
