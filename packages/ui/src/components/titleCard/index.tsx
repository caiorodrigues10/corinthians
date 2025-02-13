"use client";
import React from "react";
import clsx from "clsx";

export interface TitleProps {
  totalTitles: number;
  title: string;
  imageTitle: string;
  className?: string;
}

export const TitleCard = ({
  imageTitle,
  title,
  totalTitles,
  className,
}: TitleProps) => {
  return (
    <li
      className={clsx(
        "bg-black p-6 flex flex-col gap-4 rounded-2xl relative overflow-hidden btn justify-center",
        className
      )}
    >
      <div className="flex gap-4 items-center z-10">
        <div className="bg-white p-1 rounded-lg">
          <img
            src={imageTitle}
            className="w-[100px] h-[100px] object-contain"
            alt={`${title} image`}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 nunito">{totalTitles} Títulos</p>
        </div>
      </div>
    </li>
  );
};
