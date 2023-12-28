import React from "react";
import Section from "./ui/section";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Switch = (props: Props) => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row p-5  items-center xl:gap-20 gap-10 bg-theme-bright-white">
        <div>
          <Image
            className="lg:max-w-[500px] md:max-w-[350px] sm:max-w-[700px] w-[580px] "
            src={"/Doctor-handshake.png"}
            alt="doctor-shaking-hand"
            width={570}
            height={700}
          />
        </div>
        <div className="flex flex-col items-start gap-5 md:pr-20">
          <div className=" xl:leading-[55px]">
            <h2 className="xl:text-[50px] lg:text-[38px] text-[28px] font-semibold">
              Ready to switch?
            </h2>
            <h2 className="xl:text-[50px] lg:text-[38px] text-[28px] font-semibold md:whitespace-nowrap ">
              We make that easy, too.
            </h2>
          </div>
          <p className="xl:w-[500px] xl:text-[20px] lg:text-[18px]">
            Changing doctors doesn’t have to be a pain. We’ll take care of
            everything – from reaching out to your previous provider for copies
            of your medical records, to notifying your insurance company so they
            can update their files.
          </p>
          <Link
            href={"https://oakstreethealth.com"}
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <Button className="text-[16px]">Get Started</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Switch;
