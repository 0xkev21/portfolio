import Link from 'next/link';

const Button = ({
  type,
  children,
  isLinkBtn,
  href,
  ...delegated
}: {
  type: 'primary' | 'secondary';
  isLinkBtn: boolean;
  href: string;
  children: any;
}) => {
  const Tag = isLinkBtn ? Link : 'button';
  let className = 'bg-(--color-primary) text-(--background)';
  if (type === 'secondary') {
    className = 'text-(--foreground) border-3 border-(--color-border)';
  }
  return (
    <Tag
      href={href}
      className={`text-sm md:text-md flex gap-2 items-center justify-center px-4 sm:px-6 py-2 rounded-lg ${className}`}
      {...delegated}
    >
      {children}
    </Tag>
  );
};

export default Button;
