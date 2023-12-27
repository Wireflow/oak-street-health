import React from "react";
import Section from "./ui/section";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Title from "./ui/title";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <Section
      background={"bright-white"}
      className="flex  justify-between items-center flex-col md:flex-row lg:items-center "
      size={"lg"}
      shape={{
        color: "white",
        right: -200,
        bottom: -100,
        rotate: -40,
        scale: 1.2,
      }}
    >
      <div className="flex flex-col items-start z-30  gap-5">
        <div>
          <Title size={"lg"} className="xl:text-[70px] whitespace-nowrap">
            Meet me at
            <br /> Oak Street Health
          </Title>
        </div>

        <div>
          <h4 className="md:text-2xl text-xl font-bold text-theme-gray ">
            Schedule a visit today!
          </h4>
          <Link href={"tel:7189739005"}>
            <h3 className="text-3xl md:text-5xl text-theme-green font-bold mt-2">
              (718) 973-9005
            </h3>
          </Link>
          <Link
            href={"https://oakstreethealth.com"}
            className="flex items-center md:justify-start  hover:underline underline-offset-4 mt-1 hover:text-theme-typography-green"
          >
            <h4 className="md:text-2xl text-xl font-medium text-theme-gray hover:text-theme-typography-green">
              oakstreethealth.com
            </h4>
            <MoveRight className="text-theme-green w-6 h-6 mt-1 ml-1" />
          </Link>
        </div>
      </div>
      <div className="z-20 min-w-[200]">
        <Image
          className="my-10"
          src={"/svg-illustration-1.svg"}
          alt="illustration"
          width={450}
          height={300}
        />
      </div>
    </Section>
  );
};

export default CallToAction;
