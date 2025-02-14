"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { NavBar, PlayerCard, TitleCard } from "@repo/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navBarLinks, players } from "../src/constants/players";

export default function CorinthiansPage() {
  const images = ["/primeirotime.png", "/time.jpg", "/time2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextPlayer = () => {
    setDirection(1);
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 4) % players.length);
  };

  const prevPlayer = () => {
    setDirection(-1);
    setCurrentPlayerIndex(
      (prevIndex) => (prevIndex - 4 + players.length) % players.length
    );
  };

  const visiblePlayers = players.slice(
    currentPlayerIndex,
    currentPlayerIndex + 4
  );

  const handleMouseMove = (event: any) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <NavBar.Root>
        <NavBar.Logo logoImg="/timao.png" />
        <NavBar.Content>
          {navBarLinks.map((link) => (
            <NavBar.Link key={link.toId} toId={link.toId}>
              {link.text}
            </NavBar.Link>
          ))}
        </NavBar.Content>
      </NavBar.Root>

      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center bg-cover bg-center px-10"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Corinthians, uma nação, uma família
          </h1>
          <p className="text-lg md:text-2xl">Um time, um amor eterno</p>
        </motion.div>
      </section>

      <section id="sobre" className={`container mx-auto py-16 px-6`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Sobre o Corinthians
          </h2>
          <div className="">
            <h2 className="text-2xl font-bold mt-16">
              Fundação e Primeiros Passos (1910-1913)
            </h2>
            <div className="flex gap-4 justify-between items-center relative">
              <p className="text-lg leading-relaxed max-w-xl">
                O Corinthians nasceu do sonho de um grupo de operários do bairro
                do Bom Retiro, em São Paulo. Inspirados pelo time inglês
                Corinthian-Casuals, que excursionava pelo Brasil, os cinco
                fundadores – Antônio Pereira, Carlos Silva, Joaquim Ambrosio,
                Rafael Perrone e Anselmo Correa – decidiram criar um time de
                futebol popular, acessível à classe trabalhadora. Nos primeiros
                anos, o clube enfrentou dificuldades financeiras e estruturais,
                jogando em campos improvisados. Em 1913, ingressou na Liga
                Paulista de Futebol e começou a disputar competições oficiais.
              </p>
              <div className="relative w-96 h-96 flex justify-center items-center">
                {images.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ y: -100, opacity: 0, rotate: index * 5 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    className={`absolute ${index === currentIndex ? "z-10" : "z-0"}`}
                  >
                    <Image
                      src={src}
                      alt="Imagem do Corinthians"
                      width={400}
                      height={400}
                      className="border-8 border-white rounded-lg shadow-lg"
                    />
                  </motion.div>
                ))}
                <button
                  onClick={prevImage}
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 btn-skip z-10"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 btn-skip z-10"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-end">
              Primeiros Títulos e Consolidação (1914-1930)
            </h2>
            <div className="flex gap-4 justify-between items-center relative">
              <div className="relative flex justify-center items-center">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <Image
                    src="/primeirotitulo.png"
                    alt="Imagem do Corinthians"
                    width={300}
                    height={300}
                  />
                </motion.div>
              </div>
              <p className="text-lg leading-relaxed max-w-xl text-end">
                O Corinthians conquistou seu primeiro Campeonato Paulista em
                1914, iniciando uma era de domínio local. Durante os anos 1920,
                o clube se tornou um dos mais fortes do estado, vencendo vários
                Paulistas, com destaque para o tricampeonato 1922, 1923 e 1924.
                Neco, um dos primeiros ídolos do clube, foi peça-chave nesse
                período. O time já atraía uma torcida fanática, que crescia
                exponencialmente.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="titulos" className={`bg-white py-16`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-16 text-center text-black">
              Títulos do Timão
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TitleCard
                imageTitle="/fifaworldcup.png"
                title="Mundial de Clubes da FIFA"
                totalTitles={2}
              />
              <TitleCard
                imageTitle="/libertadores.png"
                title="Copa Libertadores da América"
                totalTitles={1}
              />
              <TitleCard
                imageTitle="/brasileirao.png"
                title="Campeonato Brasileiro"
                totalTitles={7}
              />
              <TitleCard
                imageTitle="/copadobrasil.png"
                title="Copa do Brasil"
                totalTitles={3}
              />
              <TitleCard
                imageTitle="/supercopa.png"
                title="Super Copa"
                totalTitles={1}
              />
              <TitleCard
                imageTitle="/paulistao.png"
                title="Paulistão"
                totalTitles={30}
              />
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="jogadores" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Jogadores Icônicos
        </h2>
        <div className="relative grid grid-cols-4 justify-center p-6 gap-6 overflow-hidden">
          {visiblePlayers.map((player) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <PlayerCard
                games={player.games}
                goals={player.goals}
                image={player.image}
                name={player.name}
                titles={player.titles}
                logoImg="/logoblackwhite.png"
              />
            </motion.div>
          ))}
          <button
            onClick={prevPlayer}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 btn-skip"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextPlayer}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 btn-skip"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      <footer className="bg-black py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 Sport Club Corinthians Paulista. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
