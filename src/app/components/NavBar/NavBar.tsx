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

type Props = {};

export default function NavBar({}: Props) {
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <div>My Logo</div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
  );
}
