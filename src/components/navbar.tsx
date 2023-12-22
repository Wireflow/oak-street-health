import React from "react";
import Section from "./ui/section";
import Logo from "./icons/Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Section background={"ligher-green"}>
      <Logo />
    </Section>
  );
};

export default Navbar;
