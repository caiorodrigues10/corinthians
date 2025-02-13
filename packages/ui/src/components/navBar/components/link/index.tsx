import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";
import React from "react";

export interface NavBarPropsLink
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  toId: string;
  children: ReactNode;
}

export function NavBarLink({
  className,
  href,
  onClick,
  toId,
  children,
  ...rest
}: NavBarPropsLink) {
  return (
    <li>
      <a
        href={href}
        className={clsx(
          "hover:text-gray-400 cursor-pointer navbar-link",
          className
        )}
        onClick={(e) => {
          onClick?.(e);
          e.preventDefault();
          document.getElementById(toId)?.scrollIntoView({ behavior: "smooth" });
        }}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
}
