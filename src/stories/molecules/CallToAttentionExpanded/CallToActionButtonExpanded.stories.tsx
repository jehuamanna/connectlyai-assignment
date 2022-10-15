import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CallToActionButtonExpanded } from "./CallToActionButtonExpanded";

export default {
  title: "Molecules/CallToAttentionExpanded",
  component: CallToActionButtonExpanded,
} as ComponentMeta<typeof CallToActionButtonExpanded>;

const Template: ComponentStory<typeof CallToActionButtonExpanded> = (args) => (
  <CallToActionButtonExpanded {...args} />
);

export const Expanded = Template.bind({});
Expanded.args = {
  text: "Message us",
  type: "normal-bold",
  iconNames: ["sms", "messenger", "instagram"],
};
