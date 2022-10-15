import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Expanded = Template.bind({});
Expanded.args = {
  type: "normal-bold",
  text: "Message us",
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  type: "normal",
  text: "Instagram",
};
