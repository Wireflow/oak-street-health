import Image from "next/image";
import React, { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {}

const Logo = (props: LogoProps) => {
  return <Image src={"/svg-logo.svg"} alt="logo" width={200} height={200} />;
};

export default Logo;
