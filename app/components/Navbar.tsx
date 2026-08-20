'use client';
import Link from 'next/link';
import useActiveSection from '../hooks/useActiveSection';
import { X } from 'react-feather';
import React from 'react';
import { Dialog, Portal } from '@ark-ui/react';
import { AnimatePresence, motion } from 'motion/react';
import { JetBrains_Mono } from 'next/font/google';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const navLinks = {
  About: '/#about',
  Projects: '/#projects',
  Academics: '/#academics',
  Learning: '/#learning',
  Skills: '/#skills',
  Resume: '/#resume',
};

const CTA = 'Resume';

function Navbar({
  isOpen,
  handleClose,
  headerRef,
}: {
  isOpen: boolean;
  handleClose: () => void;
  headerRef: any;
}) {
  const id = React.useId();

  const activeSection = useActiveSection(Object.values(navLinks));

  React.useEffect(() => {
    window.addEventListener('resize', handleClose);

    return () => {
      window.removeEventListener('resize', handleClose);
    };
  }, []);
  return (
    <>
      <nav className="self-center md:block hidden">
        <ul className="flex flex-1 flex-row gap-2">
          {Object.entries(navLinks).map(([key, value]) => {
            const isActive = value === activeSection;
            const isCTA = key === CTA;
            return (
              <li key={key}>
                <Link
                  className={`hover:opacity-70 ${isCTA && 'text-(--color-primary)'} ${isActive && 'font-semibold'} p-2 rounded-lg relative`}
                  href={value}
                >
                  {key}
                  {isActive && (
                    <motion.div
                      transition={{
                        type: 'spring',
                        damping: 15,
                        stiffness: 100,
                      }}
                      layoutId={id}
                      className="-z-1 absolute w-full h-full left-0 top-0 bg-(--color-primary-subtle) border border-(--color-primary) rounded-lg"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Dialog.Root
        open={isOpen}
        persistentElements={[() => headerRef.current]}
        present={true}
        onEscapeKeyDown={handleClose}
      >
        <Portal>
          <AnimatePresence>
            {isOpen && (
              <Dialog.Content
                asChild
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(234, 235, 236, 0.8) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(242, 242, 243, 0.8) 1px, transparent 1px),
                    radial-gradient(circle 500px at 20% 100%, rgba(177, 149, 244, 0.3), transparent),
                    radial-gradient(circle 500px at 100% 80%, rgba(156, 189, 241, 0.3), transparent)
                  `,
                  backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
                }}
                className="fixed w-full h-full left-0 top-0 flex items-center justify-center bg-(--background)"
              >
                <motion.div
                  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                  transition={{ duration: 0.5 }}
                  className="div"
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-0 p-4 right-4 text-(--foreground)"
                  >
                    <X />
                  </button>
                  <nav>
                    <ul className="flex flex-col gap-8">
                      {Object.entries(navLinks).map(([key, value]) => {
                        const isActive = value === activeSection;
                        const isCTA = key === CTA;
                        return (
                          <li key={key}>
                            <Link
                              onClick={handleClose}
                              className={`${JetBrainsMono.className} ${isActive && 'font-semibold'} ${isCTA && 'text-(--color-primary)'} p-2 rounded-lg relative`}
                              href={value}
                            >
                              {key}
                              {isActive && (
                                <motion.div
                                  layoutId={`${id}-mobile`}
                                  className="-z-1 absolute w-full h-full top-0 bg-(--color-primary-subtle) border border-(--color-primary) rounded-lg"
                                />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </motion.div>
              </Dialog.Content>
            )}
          </AnimatePresence>
        </Portal>
      </Dialog.Root>
    </>
  );
}

export default Navbar;
