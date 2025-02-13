import { Meta, StoryFn } from "@storybook/react";
import { PlayerCard, PlayerCardProps } from "../../../";
import React from "react";
const logo = require("../../images/logoblackwhite.png");

export default {
  title: "Components/PlayerCard",
  component: PlayerCard,
} as Meta<typeof PlayerCard>;

const Template: StoryFn<PlayerCardProps> = (args) => <PlayerCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Ronaldo",
  image: require("../../images/ronaldo.png"),
  titles: 35,
  goals: 400,
  games: 600,
  className: "w-[400px]",
  logoImg: logo,
};

export const PlayerWithoutTitles = Template.bind({});
PlayerWithoutTitles.args = {
  name: "Jogador Sem Títulos",
  image: require("../../images/ronaldo.png"),
  titles: 0,
  goals: 50,
  games: 100,
  className: "w-[400px]",
  logoImg: logo,
};
