import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TitleCard } from ".";

describe("Title Card Component", () => {
  const mockTitle = {
    totalTitles: 4,
    title: "Copa do Brasil",
    imageTitle: require("../../images/logoblackwhite.png"),
  };

  it("renders the title's name", () => {
    render(<TitleCard {...mockTitle} />);
    expect(screen.getByText(mockTitle.title)).toBeInTheDocument();
  });

  it("renders the title's totalTitles", () => {
    render(<TitleCard {...mockTitle} />);
    expect(
      screen.getByText(mockTitle.totalTitles.toString() + " Títulos")
    ).toBeInTheDocument();
  });

  it("renders the title's imageTitle", () => {
    render(<TitleCard {...mockTitle} />);
    const logoImages = screen.getAllByAltText("Copa do Brasil image"); // Certifique-se que este alt está correto

    expect(logoImages.length).toBeGreaterThan(0); // Verifica se ao menos uma imagem foi encontrada
    expect(logoImages[0]).toBeInTheDocument(); // Verifica a primeira imagem
    expect(logoImages[0]).toHaveAttribute("src", mockTitle.imageTitle); // Verifica a src da imagem
  });
});
