import { Meta, StoryFn } from "@storybook/react";
import { TitleCard, TitleProps } from "../../../";
import React from "react";

export default {
  title: "Components/TitleCard",
  component: TitleCard,
} as Meta<typeof TitleCard>;

const Template: StoryFn<TitleProps> = (args) => <TitleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Copa do Brasil",
  totalTitles: 4,
  imageTitle: require("../../images/logoblackwhite.png"),
  className: "w-[400px]",
};

export const WithManyTitles = Template.bind({});
WithManyTitles.args = {
  title: "Campeonato Brasileiro",
  totalTitles: 10,
  imageTitle: require("../../images/logoblackwhite.png"),
  className: "w-[400px]",
};

export const WithNoTitles = Template.bind({});
WithNoTitles.args = {
  title: "Troféu Desconhecido",
  totalTitles: 0,
  imageTitle: require("../../images/logoblackwhite.png"),
  className: "w-[400px]",
};
