import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CircleButton } from "./CircleButton";

export default {
  title: "Atoms/CircleButton",
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} />
);

export const CicleButtonExample = Template.bind({});
CicleButtonExample.args = {
  ariaLabel: "circle-button-",
  title: "circle-button",
  onClick: () => {
    console.log("Circle button clicked");
  },
};
