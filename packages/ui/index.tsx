import "./styles.css";

import { Button } from "./src/components/button";
import { TitleCard, TitleProps } from "./src/components/titleCard";
import { PlayerCard, PlayerCardProps } from "./src/components/playerCard";
import {
  NavBar,
  NavBarPropsContent,
  NavBarPropsLink,
  NavBarPropsLogo,
  NavBarRootProps,
} from "./src/components/navBar";

export type {
  TitleProps,
  PlayerCardProps,
  NavBarPropsContent,
  NavBarPropsLink,
  NavBarPropsLogo,
  NavBarRootProps,
};

export { Button, TitleCard, PlayerCard, NavBar };
