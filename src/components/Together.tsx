import Image from "next/image";
import React from "react";
import Section from "./ui/section";

type Props = {};

const Together = (props: Props) => {
  return (
    <Section background={'blue'} >
        <div className="flex">
          <div>
            <h2>Working together to enrich the lives of older adults.</h2>
            <Image
              src="/TogetherIllustration.png"
              alt="together"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h3>
              Bringing activities and enjoyment to seniors has never been easier.
            </h3>
            <p>
              As a leader in primary care for adults 65+, we help organizations like
              yours by offering programs and events tailored to the needs of older
              adults, including:
            </p>
            <div>
              <p>• Games and crafts</p>
              <p>• Health and special interest education</p>
              <p>• Community events and more</p>
            </div>
          </div>
        </div>
    </Section>
  );
};

export default Together;
