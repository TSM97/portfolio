"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import LOGO from "../svgs/LOGO";

export default function NavBar() {
  return (
    <section className="grid grid-cols-7 grid-rows-2 w-screen gap-x-unit-lg">
      <section className="flex text-red col-span-1 row-span-2 pt-5 place-self-center">
        <LOGO />
      </section>
      <Navbar maxWidth="2xl" isBordered className="col-span-6">
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem className="text-lg">Home</NavbarItem>
          <NavbarItem className="text-lg" isActive>
            About
          </NavbarItem>
          <NavbarItem className="text-lg" isActive>
            Skills
          </NavbarItem>
          <NavbarItem className="text-lg" isActive>
            Experience
          </NavbarItem>
          <NavbarItem className="text-lg">Contact</NavbarItem>
          <ThemeSwitcher />
        </NavbarContent>
      </Navbar>
    </section>
  );
}
