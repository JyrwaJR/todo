"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Toaster } from "./ui/toaster";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useAuth } from "@src/context/auth";
import { MoonIcon, PlusIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "./ui/toggle";
import { useTaskContext } from "@src/context/task/use-task-context";
import { cn } from "@src/libs/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <>
      <div className='h-screen overflow-y-hidden'>
        <div className='grid min-h-full grid-cols-12 space-x-2'>
          <div className='col-span-1 md:col-span-2 row-span-full'></div>
          <div className='h-screen col-span-10 md:col-span-8 row-span-full'>
            <div className='flex flex-col h-full '>
              <div className='h-auto'>
                <MiddleNav />
              </div>
              <div className='h-full overflow-auto '>
                <ScrollArea className='h-full py-2 overflow-auto '>
                  {children}
                </ScrollArea>
              </div>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2 row-span-full'></div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Layout;

const MiddleNav = ({ className }: { className?: string }) => {
  const { user } = useAuth();
  const { setTheme, resolvedTheme } = useTheme();
  const style = cn(className, "px-2 py-4 w-full");
  return (
    <>
      <nav className={style}>
        <div className='flex items-center justify-between '>
          <div>
            <h1 className='text-xl font-medium md:text-3xl'>
              Welcome back, <span className='capitalize'>{user?.name}</span>!
            </h1>
          </div>
          <div className='flex space-x-2'>
            <div className='hidden md:flex'>{/* TODO */}</div>
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
      <div className='pb-2 mt-0 col-span-full'>
        <AllMenuGroupButton />
      </div>
    </>
  );
};

const AllMenuGroupButton = () => {
  const {
    allTasks,
    inPending,
    inProgress,
    isCompleted,
    setInPending,
    setInProgress,
    setAllTasks,
    setCompleted,
  } = useTaskContext();
  return (
    <div className=' md:h-12'>
      <Button
        size={"lg"}
        variant={allTasks ? "default" : "outline"}
        onClick={() => setAllTasks()}
        className='w-full rounded-b-none md:rounded-l-lg md:rounded-r-none md:h-full md:w-auto'
      >
        All Tasks
      </Button>
      <Button
        size={"lg"}
        variant={isCompleted ? "default" : "outline"}
        onClick={() => setCompleted()}
        className='w-full rounded-none md:h-full md:w-auto'
      >
        Completed
      </Button>
      <Button
        size={"lg"}
        variant={inProgress ? "default" : "outline"}
        onClick={() => setInProgress()}
        className='w-full rounded-none md:h-full md:w-auto'
      >
        In-Progress
      </Button>
      <Button
        size={"lg"}
        variant={inPending ? "default" : "outline"}
        onClick={() => setInPending()}
        className='w-full rounded-t-none rounded-b-lg md:h-full md:w-auto md:rounded-r-lg md:rounded-l-none'
      >
        Pending
      </Button>
    </div>
  );
};