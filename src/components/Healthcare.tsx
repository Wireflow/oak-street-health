import React from "react";
import Section from "./ui/section";
import Title from "./ui/title";
import Image from "next/image";

type Props = {};

const Healthcare = (props: Props) => {
  return (
    <div className=" mb-[43rem] sm:mb-[20rem] md:mb-[25rem] lg:mb-[25rem] xl:mb-60 relative">
      <Section
        background={"light-green"}
        className="py-10 flex flex-col gap-10 pb-20"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-10">
            <Title
              className="  md:w-[700px] sm:w-[400px]  md:leading-[60px] leading-[40px] font-bold "
              size={"lg"}
            >
              Healthcare shouldn&apos;t be one size fits all.
            </Title>
            <p className="xl:text-[25px] text-[18px] font-medium md:w-[600px]">
              At Oak Street Health, we specialize in primary care for older
              adults that’s designed to keep you healthy, not just treat you
              when you’re sick.
            </p>
            <p className="xl:text-[25px] text-[18px] font-medium ">
              Say goodbye to healthcare hassles and hello to a healthier you.
            </p>
          </div>
          <div className="">
            <Image
              className="hidden xl:block"
              src={"/HandShoulder.svg"}
              alt="hand-on-shoulder"
              width={500}
              height={500}
            />
            <Image
              className="block xl:hidden"
              src={"/OakGreen.png"}
              alt="hand-on-shoulder"
              width={200}
              height={200}
            />
          </div>
        </div>
      </Section>

      <div className=" mx-4 xl:mx-auto lg:max-w-[1400px] relative">
        <div className="bg-white  shadow-2xl  border-theme-light-green border-l-[20px] rounded-xl border-[7px] absolute -top-20 xl:-top-40">
          <div className="flex flex-col gap-10 rounded-xl p-5">
            <Title
              className="text-[20px]  md:leading-[60px] font-bold"
              variant={"green"}
              size={"sm"}
            >
              Giving older adults the care they deserve.
            </Title>
            <p className="md:text-[20px] font-medium ">
              Older adults have specific healthcare needs. That’s where we come
              in. Our primary care doctors and care teams focus exclusively on
              the needs of adults 65+. And unlike most primary care practices,
              our approach centers on the quality of care we provide rather than
              the volume of services. Our value-based care model puts the health
              of our patients and communities first.
            </p>
            <p className="md:text-[20px] font-medium ">
              Our innovative care model goes beyond typical primary care to
              provide patients with comprehensive preventive care, including
              personalized wellness plans, integrated health services, and
              educational and social activities to support overall health and
              well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
