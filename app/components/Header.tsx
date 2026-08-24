'use client';
import Link from 'next/link';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Menu, Moon, X } from 'react-feather';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from './Navbar';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const headerRef = React.useRef(null);

  return (
    <div
      id="main-nav-header"
      ref={headerRef}
      className={`${JetBrainsMono.className} z-1 border-b border-(--color-border) py-2 text-sm fixed w-full bg-(--background)`}
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
            headerRef={headerRef}
            isOpen={isOpen}
            handleClose={() => {
              setIsOpen(false);
            }}
          />
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
          <div className="md:hidden block">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="border-(--color-border) border p-2 rounded-lg"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.15 }}
                    className="dev"
                  >
                    <X className="w-5 stroke-(--foreground)" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.15 }}
                    className="div"
                  >
                    <Menu className="w-5 stroke-(--foreground)" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Header;
