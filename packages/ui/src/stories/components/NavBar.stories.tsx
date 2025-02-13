import React from "react";
import { NavBar } from "../../../";

export default {
  title: "Components/NavBar",
  component: NavBar,
};

interface NavBarLink {
  toId: string;
  text: string;
}

interface NavBarProps {
  links: NavBarLink[];
}

const navBarLinks: NavBarLink[] = [
  { toId: "section1", text: "Section 1" },
  { toId: "section2", text: "Section 2" },
  { toId: "section3", text: "Section 3" },
];

const Template = ({ links = navBarLinks }: NavBarProps) => (
  <NavBar.Root>
    <NavBar.Logo
      altText="Logo do site"
      logoImg={require("../../images/timao.png")}
    />
    <NavBar.Content>
      {links.map((link) => (
        <NavBar.Link key={link.toId} toId={link.toId}>
          {link.text}
        </NavBar.Link>
      ))}
    </NavBar.Content>
  </NavBar.Root>
);

// Exemplo adicional com links diferentes
export const NavBarStories = Template.bind({});
