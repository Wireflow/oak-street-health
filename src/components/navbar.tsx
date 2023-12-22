import React from "react";
import Section from "./ui/section";
import Logo from "./icons/Logo";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Section className="flex-col gap-4 flex justify-between items-center md:flex-row">
      <Logo />
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <Link
          href={"https://oakstreethealth.com"}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant={"primary"}>More Info</Button>
        </Link>
        <Link
          href={"https://oakstreethealth.com"}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant={"secondary"}>Request Appointment</Button>
        </Link>
      </div>
    </Section>
  );
};

export default Navbar;
