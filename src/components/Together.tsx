import Image from "next/image";
import React from "react";
import Section from "./ui/section";
import Title from "./ui/title";

type Props = {};

const Together = (props: Props) => {
  return (
    <Section
      className="xl:pt-[140px] pt-[90px] pb-10"
      isShapeSmall={false}
      shape={{
        color: "green",
        left: -80,
        top: -50,
      }}
      background={"blue"}
    >
      <div className="flex justify-between flex-col sm:flex-row gap-10">
        <div className=" flex flex-col gap-20 z-10">
          <Title
            variant={"white"}
            size={"lg"}
            className="leading-[1] 2xl:w-[460px] max-w-[250px]  md:max-w-[380px] 2xl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[28px]   font-bold text-white "
          >
            Working together to enrich the lives of older adults.
          </Title>
          <Image
            className="z-10"
            src={"/TogetherIllustration.svg"}
            alt="together"
            width={600}
            height={600}
          />
        </div>
        <div className="z-10 gap-5 flex flex-col justify-end lg:justify-normal ">
          <h3 className="text-theme-green lg:text-[42px] text-[28px] lg:w-[500px]  font-semibold">
            Bringing activities and enjoyment to seniors has never been easier.
          </h3>
          <div className="flex flex-col gap-5">
            <p className="text-theme-green font-medium xl:text-[28px] md:text-[20px] xl:w-[600px] ">
              As a leader in primary care for adults 65+, we help organizations
              like yours by offering programs and events tailored to the needs
              of older adults, including:
            </p>
            <div>
              <p className="text-theme-green font-medium xl:text-[26px] md:text-[18px]">
                • Games and crafts
              </p>
              <p className="text-theme-green font-medium xl:text-[26px] md:text-[18px]">
                • Health and special interest education
              </p>
              <p className="text-theme-green font-medium xl:text-[26px] md:text-[18px]">
                • Community events and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Together;
