import clsx from "clsx";
const logo = require("../../../../images/timao.png").default;
import React from "react";

export interface NavBarPropsLogo {
  logoImg?: string;
  className?: {
    content?: string;
    img?: string;
  };
  altText?: string;
}

export function NavBarLogo({
  logoImg,
  className,
  altText = "Logo do site",
}: NavBarPropsLogo) {
  return (
    <div className={clsx("flex items-center gap-2", className?.content)}>
      <img
        src={logoImg || logo}
        alt={altText}
        width={50}
        height={50}
        className={clsx("w-[50px] h-[50px]", className?.img)}
      />
    </div>
  );
}
