import React from "react";
import Section from "./ui/section";
import Logo from "./icons/Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Section className="flex justify-between items-center">
      <Logo />
    </Section>
  );
};

export default Navbar;
