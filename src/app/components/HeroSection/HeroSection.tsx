"use client";

import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";

import { AvatarMaker } from "../svgs";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section className="container self-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-3 justify-between">
        <div className="col-span-7 place-self-center">
          <h1 className="font-extrabold text-4xl lg:text-6xl pt-4">
            <span>Hello, I'm </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "John",
                3000,
                "Front-End Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg lg:text-xl py-4">
            Bla bla bla, Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla
            bla, Bla bla bla Bla bla bla Bla bla bla !
          </p>
          <div className="flex gap-unit-sm">
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              className="font-semibold"
            >
              Hire me
            </Button>
            <Button
              color="primary"
              variant="bordered"
              size="lg"
              className="font-semibold border-4"
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] relative">
            <div className="absolute transform -translate-x-1/2 -translate-y-[45%] top-1/3 left-1/2">
              <AvatarMaker
                style={{
                  minWidth: 150,
                  minHeight: 150,
                  maxWidth: 300,
                  maxHeight: 300,
                }}
                className="brightness-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
