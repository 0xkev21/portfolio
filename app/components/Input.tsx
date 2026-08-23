import { JetBrains_Mono } from 'next/font/google';
import React, { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

const JetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const Input = ({
  label,
  type = 'text',
  className = '',
  ...delegated
}: InputProps) => {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span
        className={`${JetBrainsMono.className} uppercase text-sm font-bold`}
      >
        {label}
      </span>
      <input
        className="text-sm md:text-md font-semibold bg-(--color-border)/60 rounded-lg border-(--color-border) focus:border-(--color-primary) border p-2 outline-none transition-colors"
        type={type}
        {...delegated}
      />
    </label>
  );
};

export default Input;
