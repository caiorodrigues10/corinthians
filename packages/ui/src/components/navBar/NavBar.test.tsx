import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from ".";

const navBarLinks = [
  { toId: "section1", text: "Section 1" },
  { toId: "section2", text: "Section 2" },
  { toId: "section3", text: "Section 3" },
];

describe("NavBar Component", () => {
  it("renders the logo", () => {
    render(
      <NavBar.Root>
        <NavBar.Logo altText="Logo do site" />
      </NavBar.Root>
    );

    expect(screen.getByAltText("Logo do site")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(
      <NavBar.Root>
        <NavBar.Content>
          {navBarLinks.map((link) => (
            <NavBar.Link key={link.toId} toId={link.toId}>
              {link.text}
            </NavBar.Link>
          ))}
        </NavBar.Content>
      </NavBar.Root>
    );

    navBarLinks.forEach((link) => {
      expect(screen.getByText(link.text)).toBeInTheDocument();
    });
  });

  it("renders the logo and links together", () => {
    render(
      <NavBar.Root>
        <NavBar.Logo altText="Logo do site" />
        <NavBar.Content>
          {navBarLinks.map((link) => (
            <NavBar.Link key={link.toId} toId={link.toId}>
              {link.text}
            </NavBar.Link>
          ))}
        </NavBar.Content>
      </NavBar.Root>
    );

    expect(screen.getByAltText("Logo do site")).toBeInTheDocument();
    navBarLinks.forEach((link) => {
      expect(screen.getByText(link.text)).toBeInTheDocument();
    });
  });
});
