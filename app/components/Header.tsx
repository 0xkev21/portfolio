'use client';
import Link from 'next/link';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Menu, Moon } from 'react-feather';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from './Navbar';
import React from 'react';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`${JetBrainsMono.className} z-10 border-b border-(--color-border) py-2 text-sm fixed w-full bg-(--background)`}
    >
      <MaxWidthWrapper>
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex-1">
            <Link href="/" className="flex flex-row align-center">
              <Logo />
              <div className="ml-2 self-center font-semibold">
                <span className="text-(--color-primary)">hellokev</span>.me
              </div>
            </Link>
          </div>
          <Navbar
            isOpen={isOpen}
            handleClose={() => {
              setIsOpen(false);
            }}
          />
          <div className="flex-1 flex justify-end">
            <button className="border-(--color-border) border p-2 rounded-lg">
              <Moon className="w-5 stroke-(--foreground)" />
            </button>
          </div>
          <div className="sm:hidden block">
            <button
              onClick={() => setIsOpen(true)}
              className="border-(--color-border) border p-2 rounded-lg"
            >
              <Menu className="w-5 stroke-(--foreground)" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Header;
