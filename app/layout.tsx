import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { MotionConfig } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';

const IBMPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hellokev.me'),
  icons: '/favicon.ico',
  title: { default: "Kev's Portfolio", template: '%s | Kev' },
  description:
    'Portfolio of Kev, a Full-Stack Web Developer based in Mandalay, Myanmar. Specializing in Next.js, React, PHP, and building dynamic web applications.',
  keywords: [
    'Kev',
    'Web Developer',
    'Full-Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'Mandalay',
    'Myanmar',
    'Portfolio',
  ],
  authors: [{ name: 'Kev' }],
  creator: 'Kev',
  openGraph: {
    title: 'Kev | Web Developer',
    description:
      'Explore my projects, skills, and experience in building robust web applications.',
    url: 'https://hellokev.me',
    siteName: "Kev's Portfolio",
    images: [
      {
        url: 'https://hellokev.me/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Kev | Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kev | Web Developer',
    description:
      'Portfolio of Kev, a Full-Stack Web Developer specializing in Next.js and React.',
    images: ['https://hellokev.me/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${IBMPlexSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <Header />
          <div className="mt-12">{children}</div>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
