import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Logo() {
  return (
    <div className={`${roboto.className} shrink-0 p-1.5 px-2 bg-(--color-primary-subtle) border border-(--color-primary) text-(--color-primary) rounded-xl flex items-center justify-center`}>
      {'|<_'}
    </div>
  )
}

export default Logo