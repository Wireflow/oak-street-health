import React from "react";
import Section from "./ui/section";
import Image from "next/image";

type Props = {};

const Quality = (props: Props) => {
  return (
    <Section className="py-10" background={"green"}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="md:text-[60px] text-[32px] font-bold text-theme-light-green">
            Never feel like a number.
          </h2>
          <h2 className="md:text-[60px] text-[32px] font-bold text-theme-light-green">
            Other than #1.
          </h2>
          <p className="text-white md:w-[700px] md:text-[24px]">
            Few things in life are more personal than your health. That’s why at
            Oak Street Health, we take the time to get to know you so we can
            provide personalized care when and where you need it.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="md:text-[40px] text-[28px] font-semibold text-white">
            Comprehensive, quality care
          </h2>
          <div className="flex justify-between lg:items-end gap-5 flex-col lg:flex-row  ">
            <div className="flex md:gap-5 gap-[5px]">
              <div className="flex flex-col gap-2">
                <p className="xl:text-[20px] font-[100] lg:w-[250px] text-white">
                  • Choice of in-person, phone, or video visits
                </p>
                <p className="xl:text-[20px] font-[100] lg:w-[250px] text-white">
                  • 24/7 support line for around-the-clock care
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="xl:text-[20px] font-[100] lg:w-[250px] text-white">
                  • Help navigating Medicare benefits
                </p>
                <p className="xl:text-[20px] font-[100] lg:w-[250px] text-white">
                  • Preventive care to maximize your health
                </p>
              </div>
            </div>
            <div className="">
              <h2 className="text-[25px] whitespace-nowrap text-theme-lighter-green font-regular">
                Call today to <span className="text-theme-orange">schedule</span> or
               learn more
              </h2>
              <p className="text-[28px] text-white font-bold">(718) 691-0944</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row md:gap-0 gap-5">
          <div>
            <p className="xl:text-[20px] text-white">
              Oak Street Health - Soundview
            </p>
            <p className="xl:text-[20px] text-white">
              1555 Westchester Ave, Bronx, NY 10472-2910
            </p>
            <p className="xl:text-[20px] text-white">
              oakstreethealth.com | Se habla español
            </p>
          </div>
          <div className="flex items-end  gap-5">
            <Image src="/whiteLogo.png" alt="map" width={220} height={200} />
            <Image src="/AARPLogo.png" alt="map" width={130} height={200} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Quality;
