import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type LinkBtn = {
  type?: 'primary' | 'secondary';
  children: ReactNode;
  isLinkBtn: true;
  href: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, 'type' | 'href'>;

type Btn = {
  type?: 'primary' | 'secondary';
  children: ReactNode;
  isLinkBtn?: false;
  href?: never;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'type'>;

type ButtonProps = LinkBtn | Btn;

const Button = (props: ButtonProps) => {
  const { type = 'primary', children, className = '' } = props;

  let classNameBtn = 'bg-(--color-primary) text-(--background)';
  if (type === 'secondary') {
    classNameBtn = 'text-(--foreground) border-3 border-(--color-border)';
  }

  const innerContent = (
    <div
      className={`h-full w-full text-xs md:text-sm font-semibold flex gap-2 items-center justify-center px-4 sm:px-6 py-3 rounded-lg ${classNameBtn}`}
    >
      {children}
    </div>
  );

  if (props.isLinkBtn) {
    const { isLinkBtn, type, className, ...rest } = props;
    return (
      <Link className={`${className} block`} {...rest}>
        {innerContent}
      </Link>
    );
  }

  const { isLinkBtn, type: _t, href, className: _c, ...rest } = props;
  return (
    <button className={`${className} block`} {...rest}>
      {innerContent}
    </button>
  );
};

export default Button;
