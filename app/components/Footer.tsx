import { JetBrains_Mono } from 'next/font/google';
import MaxWidthWrapper from './MaxWidthWrapper';
import Timestamp from './Timestamp';
import { Facebook, GitHub, Linkedin } from 'react-feather';
import Link from 'next/link';

const JetBrainsMono = JetBrains_Mono();

const Footer = () => {
  return (
    <div className="border-t-2 border-(--color-border) mt-[clamp(8rem,12vw,12rem)] p-12">
      <MaxWidthWrapper>
        <div
          className={`${JetBrainsMono.className} text-xs sm:flex items-center justify-between`}
        >
          <p className="mb-5 sm:mb-0">
            © <Timestamp /> Kev — built with Next.js & Tailwind.
          </p>
          <div className="flex gap-2">
            <Link
              href="https://github.com/0xkev21"
              className="hover:border-(--color-primary) hover:text-(--color-primary) transiton:all duration-750 block rounded-lg p-3 border-(--foreground)/20 text-(--foreground)/60 border"
            >
              <GitHub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/0xkev/"
              className="hover:border-(--color-primary) hover:text-(--color-primary) transiton:all duration-750 block rounded-lg p-3 border-(--foreground)/20 text-(--foreground)/60 border"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/0xkev"
              className="hover:border-(--color-primary) hover:text-(--color-primary) transiton:all duration-750 block rounded-lg p-3 border-(--foreground)/20 text-(--foreground)/60 border"
            >
              <Facebook size={18} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
