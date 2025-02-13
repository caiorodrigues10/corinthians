import { FlagPennant, SoccerBall, Trophy } from "@phosphor-icons/react";
import clsx from "clsx";
const logo = require("../../images/logoblackwhite.png").default;
import React from "react";

export interface PlayerCardProps {
  name: string;
  image: string;
  titles: number;
  goals: number;
  games: number;
  className?: string;
  logoImg?: string;
}

export const PlayerCard = ({
  games,
  goals,
  image,
  name,
  titles,
  className,
  logoImg,
}: PlayerCardProps) => {
  return (
    <div
      className={clsx(
        "bg-gradient-to-tl from-neutral-950 to-neutral-900 p-4 rounded-2xl flex flex-col justify-between col-span-1 card h-[420px]",
        className
      )}
    >
      <div className="flex justify-center relative">
        <h3 className="text-2xl font-bold text-center text-white z-10">
          {name}
        </h3>
        <img
          src={logoImg || logo}
          alt={"Corinthians"}
          className="absolute mr-16"
          width={280}
          height={420}
        />
        <img
          src={image}
          alt={name}
          className="z-10 ml-auto object-cover h-[310px] object-top"
          width={220}
          height={300}
        />
      </div>

      <div className="-mt-4 text-lg text-gray-300 number-font gap-4 justify-center w-full grid grid-cols-3">
        <div className="flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-md rounded-md col-span-1 shadow-md z-10">
          <p className="text-sm">Títulos</p>
          <p className="flex items-center gap-4">
            <Trophy size={24} />
            <span className="font-semibold">{titles}</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-xs rounded-md col-span-1 shadow-md z-10">
          <p className="text-sm">Jogos</p>
          <p className="flex items-center gap-4">
            <FlagPennant size={24} />
            <span className="font-semibold">{games}</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-xs rounded-md col-span-1 shadow-md z-10">
          <p className="text-sm">Gols</p>
          <p className="flex items-center gap-4">
            <SoccerBall size={24} />
            <span className="font-semibold">{goals}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
