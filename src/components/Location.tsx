import Image from "next/image";
import React from "react";
import Section from "./ui/section";
import { MapPin } from "lucide-react";
import Link from "next/link";

type Props = {};

const Location = (props: Props) => {
  return (
    <Section>
      <div className="flex flex-col gap-[100px] pb-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <Image src="/map.png" alt="map" width={1300} height={800} />
            <h1 className="xl:text-[55px] lg:text-[45px] md:text-[32px] sm:text-[27px] text-[20px] font-semibold text-theme-green ">
              Visit an Oak Street Health location near you.
            </h1>
          </div>
          <div className="flex gap-1">
            <div className="">
              <Image src="/mapIcon.png" alt="map" width={84} height={64} />
            </div>
            <div>
              <p className="lg:text-[37px] md:text-[29px] text-[24px] font-bold">Soundview</p>
              <p className="lg:text-[35px] md:text-[28px] text-[24px] font-medium">
                1555 Westchester Ave
                <br /> Bronx, NY 10472-2910
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between  gap-5">
            <div>
              <p className="md:text-[34px] text-[24px] font-medium">
                Find other locations in your area <br />
                at {""}
                <Link className="text-theme-green font-semibold" href={"#"}>
                  oakstreethealth.com
                </Link>
              </p>
            </div>
            <div className="flex items-end gap-5">
              <Image src="/OakGreen.png" alt="map" width={220} height={200} />
              <Image src="/AARPLogo.png" alt="map" width={130} height={200} />
            </div>
          </div>
          <div>
            <p className="lg:w-[1000px] xl:text-[16px] text-[12px] font-bold">
              *This location is coming soon. **Primary care services are
              provided by Oak Street Health. AARP and its affiliates do not
              employ Oak Street Health physicians and staff, and are not
              responsible for the services provided by them. Oak Street Health
              pays a royalty fee to AARP for the use of its intellectual
              property. These fees are used for the general purposes of AARP.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Location;
