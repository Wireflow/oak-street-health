import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Section>
      <Button variant={"outline"}>More Info</Button>
    </Section>
  );
};

export default HomePage;
