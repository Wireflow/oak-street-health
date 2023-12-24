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
      className="flex  flex-col   md:justify-start justify-end md:pt-0 pt-40   "
      size={"lg"}
    >


      <div className="flex flex-col items-start z-20  gap-2">

        <div>
          <Title size={"md"} className="" variant={"default"}>
            Meet me at
            <br /> Oak Street Health
          </Title>
          <Image
            className="sm:w-[350px] w-[250px] my-10"
            src={"/svg-illustration-1.svg"}
            alt="illustration"
            width={350}
            height={400}
          />
        </div>


        <div>
          <h4 className="md:text-2xl text-xl font-medium text-theme-typography-gray">
            Schedule a visit today!
          </h4>
          <Link href={"tel:7189739005"}>
            <h3 className="text-2xl md:text-5xl text-theme-typography-green font-bold mt-2">
              (718) 973-9005
            </h3>
          </Link>
          <Link
            href={"https://oakstreethealth.com"}
            className="flex items-center md:justify-start  hover:underline underline-offset-4 mt-1 hover:text-theme-typography-green"
          >
            <h4 className="md:text-2xl text-xl font-medium text-theme-typography-gray hover:text-theme-typography-green">
              oakstreethealth.com
            </h4>
            <MoveRight className="text-theme-green w-6 h-6 mt-1 ml-1" />
          </Link>
        </div>


      </div>


      <div>
        <Image
          className="absolute  right-0 top-[0px]  xl:w-[1000px] lg:w-[700px] md:w-[500px] sm:w-[400px] w-[300px]"
          src={"/hero-illustration.png"}
          alt="illustration"
          width={800}
          height={800}
        />
      </div>
    </Section>
  );
};

export default CallToAction;
