"use client";

import React from "react";

export default function About() {
  return (
    <>
      <section className="container flex items-center self-center pt-10 text-foreground bg-background flex-col min-w-screen mx-auto h-[70dvh]">
        <p>Lets start</p>
        <div className="w-[1px] bg-foreground h-[70%] mt-5" />
      </section>
      <section className="container flex self-center text-foreground bg-background w-[50dvw] mx-auto h-[50dvh]">
        <section className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          incidunt quo architecto atque et quas mollitia hic impedit, illum
          aliquid maxime dolor, distinctio itaque aliquam nemo ipsa quod
          repellat esse!
        </section>
      </section>
    </>
  );
}
