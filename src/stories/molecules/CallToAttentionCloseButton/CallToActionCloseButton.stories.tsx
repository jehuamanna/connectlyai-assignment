import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CallToActionCloseButton } from "./CallToActionCloseButton";

export default {
  title: "Molecules/CallToAttentionCloseButton",
  component: CallToActionCloseButton,
} as ComponentMeta<typeof CallToActionCloseButton>;

const Template: ComponentStory<typeof CallToActionCloseButton> = (args) => (
  <CallToActionCloseButton {...args} />
);

export const Expanded = Template.bind({});
Expanded.args = {
  onClick: () => {
    console.log("close Button clicked");
  },
};
