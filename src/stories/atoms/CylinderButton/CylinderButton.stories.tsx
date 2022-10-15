import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CylinderButton } from "./CylinderButton";

export default {
  title: "Atoms/CylinderButton",
  component: CylinderButton,
} as ComponentMeta<typeof CylinderButton>;

const Template: ComponentStory<typeof CylinderButton> = (args) => (
  <CylinderButton {...args} />
);

export const Expanded = Template.bind({});
Expanded.args = {
  id: "expanded-button",
  title: "expanded-button",
  type: "expanded-button",
};

export const PopUp = Template.bind({});
PopUp.args = {
  id: "popup-button",
  title: "popup-button",
  type: "popup-button",
};
