import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlayerCard } from ".";

describe("PlayerCard Component", () => {
  const mockPlayer = {
    name: "Ronaldo",
    image: require("../../images/ronaldo.png"),
    titles: 35,
    goals: 850,
    games: 1200,
  };

  it("renders the player's name", () => {
    render(<PlayerCard {...mockPlayer} />); // Renderiza o componente PlayerCard com dados simulados
    expect(screen.getByText(mockPlayer.name)).toBeInTheDocument(); // Verifica se o nome do jogador está no documento
  });

  it("renders the player's stats", () => {
    render(<PlayerCard {...mockPlayer} />); // Renderiza o componente novamente

    expect(screen.getByText("Títulos")).toBeInTheDocument(); // Verifica se o texto "Títulos" está no documento
    expect(screen.getByText(mockPlayer.titles.toString())).toBeInTheDocument(); // Verifica se o número de títulos do jogador está exibido

    expect(screen.getByText("Jogos")).toBeInTheDocument(); // Verifica se o texto "Jogos" está no documento
    expect(screen.getByText(mockPlayer.games.toString())).toBeInTheDocument(); // Verifica se o número de jogos do jogador está exibido

    expect(screen.getByText("Gols")).toBeInTheDocument(); // Verifica se o texto "Gols" está no documento
    expect(screen.getByText(mockPlayer.goals.toString())).toBeInTheDocument(); // Verifica se o número de gols do jogador está exibido
  });

  it("renders the player's image", () => {
    render(<PlayerCard {...mockPlayer} />); // Renderiza o componente novamente
    const playerImages = screen.getAllByAltText("Ronaldo"); // Captura todas as imagens com o atributo alt "Ronaldo"

    expect(playerImages.length).toBeGreaterThan(0); // Verifica se ao menos uma imagem foi encontrada
    expect(playerImages[0]).toBeInTheDocument(); // Verifica que a primeira imagem está no documento
    expect(playerImages[0]).toHaveAttribute("src", mockPlayer.image); // Verifica se a src da imagem é a correta
  });

  it("renders the background logo", () => {
    render(<PlayerCard {...mockPlayer} />); // Renderiza o componente novamente
    const logoImages = screen.getAllByAltText("Ronaldo"); // Captura todas as imagens com o atributo alt "Ronaldo"

    expect(logoImages.length).toBeGreaterThan(0); // Verifica se existe mais de uma imagem
    expect(logoImages[0]).toBeInTheDocument(); // Verifica que a segunda imagem está no documento
    expect(logoImages[0]).toHaveAttribute(
      "src",
      "../../images/logoblackwhite.png"
    ); // Verifica a src do logo esperado
  });
});
