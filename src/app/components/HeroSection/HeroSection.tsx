"use client";

import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { AvatarMaker } from "../svgs";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section className="container">
      <ThemeSwitcher />
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-3">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white font-extrabold text-4xl lg:text-6xl pt-4">
            Hello, I'm John,
          </h1>
          <h2 className="text-white font-bold text-2xl lg:text-3xl py-3">
            You can call me Giannis.
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl py-4">Bla bla bla!</p>
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
              className="font-semibold"
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
