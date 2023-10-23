"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { Moon } from "../svgs";
import { Sun } from "../svgs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  console.log(theme);

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      onChange={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      classNames={{
        wrapper: "p-1 m-0 h-4 overflow-visible",
      }}
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <Moon className="w-full h-full" />
        ) : (
          <Sun className="w-full h-full" />
        )
      }
    />
  );
}
