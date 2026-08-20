import { JetBrains_Mono } from 'next/font/google';

const JetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const Input = ({ label, as = 'input', placeholder, htmlType }) => {
  const Tag = as;
  return (
    <label className="flex flex-col gap-1">
      <span
        className={`${JetBrainsMono.className} uppercase text-sm font-bold`}
      >
        {label}
      </span>
      <Tag
        className="text-sm md:text-md font-semibold bg-(--color-border)/60 rounded-lg border-(--color-border) focus:border(--color-primary) border p-2"
        type={htmlType}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
