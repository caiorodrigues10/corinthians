import { NavBarContent, NavBarPropsContent } from "./components/content";
import { NavBarLink, NavBarPropsLink } from "./components/link";
import { NavBarLogo, NavBarPropsLogo } from "./components/logo";
import { NavBarRoot, NavBarRootProps } from "./components/root";
import React from "react";

export type {
  NavBarRootProps,
  NavBarPropsLogo,
  NavBarPropsLink,
  NavBarPropsContent,
};

export const NavBar = {
  Root: NavBarRoot,
  Logo: NavBarLogo,
  Link: NavBarLink,
  Content: NavBarContent,
};
