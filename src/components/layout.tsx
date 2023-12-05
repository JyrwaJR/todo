"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Toaster } from "./ui/toaster";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useAuth } from "@src/context/auth";
import { Label } from "@radix-ui/react-label";
import { MoonIcon, PlusIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "./ui/toggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <>
      <div className='grid h-screen grid-cols-12 gap-0 overflow-x-hidden overflow-y-hidden'>
        <div className='flex h-full col-span-2'>
          <div className='flex flex-col items-center justify-between w-full h-full p-1 space-y-2'>
            <div className='h-full'>
              <ScrollArea className='flex items-center justify-end h-full '>
                <div>
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
              </ScrollArea>
            </div>
            <div className='flex flex-col w-full gap-1'>
              <div>
                <Button size={"lg"} className='w-full h-12 capitalize'>
                  <PlusIcon className='w-6 h-6 mr-5' />
                  Add New Task
                </Button>
              </div>
              <div>
                <Button
                  size={"lg"}
                  variant={"secondary"}
                  className='w-full h-16 capitalize'
                >
                  <PlusIcon className='w-6 h-6 mr-5' />
                  Account
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ScrollArea className='h-full col-span-10 px-2 overflow-y-auto border'>
          <div>
            <div className='flex flex-col'>
              <MiddleNav />
              <div className='mt-20'>{children}</div>
            </div>
          </div>
        </ScrollArea>
      </div>
      <Toaster />
    </>
  );
};

export default Layout;

const MiddleNav = () => {
  const { user } = useAuth();
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <nav className='absolute top-0 left-0 right-0 z-50 p-2 py-4 '>
      <div className='flex items-center justify-between h-full'>
        <div>
          <h1 className='text-3xl font-medium'>
            Welcome back, <span className='capitalize'>{user?.name}</span>!
          </h1>
        </div>
        <div className='flex space-x-2'>
          <div>
            <Button
              variant={"outline"}
              className='w-full space-x-0 font-medium'
            >
              <PlusIcon className='w-6 h-6 mr-5' />
              <span>New Task</span>
            </Button>
          </div>
          <div>
            <Button variant={"ghost"} className='w-full space-x-0 font-medium'>
              January 2021
            </Button>
          </div>
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
        </div>
      </div>
    </nav>
  );
};
