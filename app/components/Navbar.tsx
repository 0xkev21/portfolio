'use client'
import Link from "next/link";
import useActiveSection from "../hooks/useActiveSection";
import { X } from "react-feather";
import React from "react";
import { Dialog, Portal } from "@ark-ui/react";
import {motion} from 'motion/react';
import { JetBrains_Mono } from "next/font/google";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

const navLinks = {
  About: '#about',
  Projects: '#projects',
  Academics: '#academics',
  Learning: '#learning',
  Skills: '#skills',
  Resume: '#resume',
}

const CTA = 'Resume';

function Navbar({isOpen, handleClose}: {isOpen: boolean, handleClose: () => void}) {
  const id = React.useId();
  
  const activeSection = useActiveSection(Object.values(navLinks));
  return (
    <>
    <nav className="self-center sm:block hidden">
      <ul className="flex flex-1 flex-row gap-1 md:gap-2">
        {Object.entries(navLinks).map(([key, value]) => {
          console.log(activeSection);
          const isActive = value === activeSection;
          const isCTA = key === CTA;
          return (
            <li key={key}>
              <Link className={`hover:opacity-70 ${isCTA && 'text-(--color-primary)'} ${isActive && 'font-semibold'} p-2 rounded-lg relative`} href={value}>
                {key}
              {isActive && <motion.div transition={{type: 'spring', damping: 15, stiffness: 100}} layoutId={id} className="-z-1 absolute w-full h-full top-0 bg-(--color-primary-subtle) border border-(--color-primary) rounded-lg" />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    <Dialog.Root open={isOpen}>
    <Portal>
      <Dialog.Content className="fixed w-full h-full left-0 top-0 flex items-center justify-center bg-(--background)">
        <nav>
        <ul className="flex flex-col gap-8">
          {Object.entries(navLinks).map(([key, value]) => {
            console.log(activeSection);
            const isActive = value === activeSection;
            const isCTA = key === CTA;
            return (
              <li key={key}>
              <Link onClick={handleClose} className={`${JetBrainsMono.className} ${isActive && 'font-semibold'} ${isCTA && 'text-(--color-primary)'} p-2 rounded-lg relative`} href={value}>
                {key}
              {isActive && <motion.div layoutId={`${id}-mobile`} className="-z-1 absolute w-full h-full top-0 bg-(--color-primary-subtle) border border-(--color-primary) rounded-lg" />}
              </Link>
            </li>
            );
          })}
        </ul>
      </nav>
      <button onClick={handleClose} className="absolute top-0 p-4 right-4 text-(--foreground)"><X /></button>
      </Dialog.Content>
    </Portal>
    </Dialog.Root>
    </>
  );
}

export default Navbar;
