import clsx from "clsx";
import { ReactNode } from "react";
import React from "react";

export interface NavBarPropsContent {
  className?: string;
  children: ReactNode;
}

export function NavBarContent({ children, className }: NavBarPropsContent) {
  return <ul className={clsx("flex space-x-6", className)}>{children}</ul>;
}
