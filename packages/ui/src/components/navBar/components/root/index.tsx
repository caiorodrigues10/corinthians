import clsx from "clsx";
import { ReactNode } from "react";
import React from "react";

export interface NavBarRootProps {
  children: ReactNode;
  classNames?: {
    nav?: string;
    header?: string;
  };
}

export function NavBarRoot({ children, classNames }: NavBarRootProps) {
  return (
    <header
      className={clsx(
        "fixed w-full bg-gradient-to-b from-black to-transparent bg-opacity-75 backdrop-blur-xs z-50",
        classNames?.header
      )}
    >
      <nav
        className={clsx(
          "container mx-auto flex py-4 px-6 justify-between items-center",
          classNames?.nav
        )}
      >
        {children}
      </nav>
    </header>
  );
}
