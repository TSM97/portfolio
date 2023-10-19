"use client";

import { Image } from "@nextui-org/react";

import { AvatarMaker } from "../svgs";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-3">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white font-extrabold text-4xl lg:text-6xl pt-4">
            Hello, I'm John,
          </h1>
          <h2 className="text-white font-bold text-2xl lg:text-3xl py-3">
            You can call me Giannis.
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl py-4">HeroSection</p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative">
            <div className="absolute transform -translate-x-1/2 -translate-y-[45%] top-1/3 left-1/2">
              <AvatarMaker
                style={{
                  minWidth: 150,
                  minHeight: 150,
                  maxWidth: 300,
                  maxHeight: 300,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
