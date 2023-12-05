"use client";
import React from "react";
import { Switch } from "./ui/switch";
import { Toggle } from "./ui/toggle";
import { useTheme } from "next-themes";
import { HomeIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type Props = {
  isMounted: boolean;
  children: React.ReactNode;
};

const Nav = ({ isMounted, children }: Props) => {
  const { resolvedTheme, setTheme } = useTheme();

  if (!isMounted) {
    return null; // Return null if not mounted
  }

  return (
    <>
      <nav className='fixed w-full border border-black h-14'>
        <div className='flex items-center justify-end h-full'>
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
      <div className='grid h-screen grid-cols-12 overflow-x-hidden overflow-y-hidden'>
        <div className='h-full col-span-2 border border-black'>
          <Button variant={"ghost"} className='w-full space-x-0'>
            <HomeIcon className='w-6 h-6 mr-5' />
            Project
          </Button>
        </div>
        <div className='h-full col-span-8 overflow-y-auto'>{children}</div>
        <div className='h-full col-span-2 border border-black'>
          <Button variant={"ghost"} className='w-full space-x-0'>
            <HomeIcon className='w-6 h-6 mr-5' />
            Project
          </Button>
        </div>
      </div>
    </>
  );
};

export default Nav;
