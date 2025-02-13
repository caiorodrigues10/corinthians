import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="p-4 rounded-lg bg-black text-white cursor-pointer hover:shadow-md hover:bg-neutral-900 duration-300"
      {...rest}
    >
      {children}
    </button>
  );
};
