import React from "react";
import Section from "./ui/section";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Switch = (props: Props) => {
  return (
    <Section>
      <div className="flex  items-center gap-40 bg-theme-bright-white">
        <div>
            <Image src={'/Doctor-handshake.png'} alt="doctor-shaking-hand" width={500} height={700}/>
        </div>
          <div className="flex flex-col items-start gap-5 pr-20">
            <div className=" leading-[55px]">
                <h2 className="text-[50px] font-medium">Ready to switch?</h2>
                <h2 className="text-[50px] font-medium">We make that easy, too.</h2>
            </div>
            <p className="w-[500px] text-[20px]">
              Changing doctors doesn’t have to be a pain. We’ll take care of
              everything – from reaching out to your previous provider for copies of
              your medical records, to notifying your insurance company so they can
              update their files.
            </p>
            <Button>
                Get Started
            </Button>
          </div>
      </div>
    </Section>
  );
};

export default Switch;
