import React from "react";
import Section from "./ui/section";
import { DifferenceData } from "@/data/DifferenceData";
import Image from "next/image";

type Props = {};

const Difference = (props: Props) => {
  return (
    <Section  className="py-10" background={"light-green"}>
      <div>
        <h1 className="lg:text-[62px] md:text-[40px] text-[28px]  font-semibold text-theme-green">
          Together we can make a difference.
        </h1>
        <p className="lg:text-[24px] md:text-[20px] lg:w-[950px] sm:w-[600px] font-medium pt-2">
          Our team takes the time to get to know you and your needs – just like
          we do for our patients. Together we can positively impact the health
          and lives of older adults and the community.
        </p>
      </div>
      <div className="flex sm:items-start mt-5 justify-between gap-10 flex-col sm:flex-row">
        <div className="flex flex-col gap-3">
            <h1 className="lg:text-[55px] md:text-[35px] sm:text-[28px] text-[24px] font-medium text-theme-green whitespace-nowrap">
              Getting started is easy!
            </h1>
            <div className="flex flex-col gap-3">
                {DifferenceData.map((step, i) => {
                  return (
                    <>
                      <div className="flex gap-2 items-start" key={i}>
                        <p className="text-theme-green font-bold lg:text-[24px] whitespace-nowrap">{step.title}</p>
                        <p className="w-[300px] font-medium pt-[4px] lg:text-[20px]">{step.description}</p>
                      </div>
                    </>
                  );
                })}
            </div>
        </div>
        <div className="flex flex-col gap-10  sm:items-end">
            <div >
                <Image className="lg:w-[550px] sm:block hidden md:w-[350px] w-[300px]" src={'/svg-difference-illustration.svg'} alt="illustartion-people-gathered" width={700} height={400}/>
            
            </div>
            <div className="flex  justify-end">
                 <Image className="lg:w-[200px] w-[150px]" src='/OakGreen.png' alt='logo' width={200} height={200}/>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Difference;
