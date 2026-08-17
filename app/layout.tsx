import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Sans,
  JetBrains_Mono,
  Space_Grotesk,
} from 'next/font/google';
import './globals.css';
import { MotionConfig } from 'motion/react';

const IBMPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
});

const SpaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Kev's Portfolio",
  description: "I'm Kev, a web developer.",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${IBMPlexSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
