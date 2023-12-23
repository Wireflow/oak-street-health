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
      className="flex md:flex-row flex-col gap-8 justify-between items-center"
      size={"lg"}
      shape={{ color: "white", right: -200, bottom: -100, rotate: -40 }}
    >
      <div className="z-20 text-center md:text-start">
        <Title className="mb-4" variant={"default"}>
          Meet me at
          <br /> Oak Street Health
        </Title>
        <div>
          <h4 className="text-2xl font-bold text-theme-typography-gray">
            Schedule a visit today!
          </h4>
          <Link href={"tel:7189739005"}>
            <h3 className="text-3xl md:text-5xl text-theme-typography-green font-bold mt-2">
              (718) 973-9005
            </h3>
          </Link>
          <Link
            href={"https://oakstreethealth.com"}
            className="flex items-center md:justify-start  hover:underline underline-offset-4 mt-1 hover:text-theme-typography-green"
          >
            <h4 className="text-2xl font-bold text-theme-typography-gray hover:text-theme-typography-green">
              oakstreethealth.com
            </h4>
            <MoveRight className="text-theme-green w-6 h-6 mt-1 ml-1" />
          </Link>
        </div>
      </div>
      <div className="z-20">
        <Image
          src={"/svg-illustration-1.svg"}
          alt="illustration"
          width={500}
          height={400}
        />
      </div>
    </Section>
  );
};

export default CallToAction;
