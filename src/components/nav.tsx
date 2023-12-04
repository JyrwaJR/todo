"use client";
import React from "react";
import { Switch } from "./ui/switch";
import { Toggle } from "./ui/toggle";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
type Props = {
  isMounted: boolean;
};
const Nav = ({ isMounted }: Props) => {
  const { resolvedTheme, setTheme } = useTheme();
  if (!isMounted) {
    return;
  }
  return (
    <nav className='fixed z-50 w-full border-white'>
      <div className='flex justify-end'>
        <Toggle
          onClick={() => {
            if (resolvedTheme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
          aria-label='Toggle italic'
        >
          {resolvedTheme === "dark" ? (
            <MoonIcon className='w-6 h-6' />
          ) : (
            <SunIcon className='w-6 h-6' />
          )}
        </Toggle>
      </div>
    </nav>
  );
};

export default Nav;
