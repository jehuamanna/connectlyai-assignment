import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CallToAttentionCollapsed } from "./CallToActionButtonCollapsed";

export default {
  title: "Molecules/CallToAttentionCollapsed",
  component: CallToAttentionCollapsed,
} as ComponentMeta<typeof CallToAttentionCollapsed>;

const Template: ComponentStory<typeof CallToAttentionCollapsed> = (args) => (
  <CallToAttentionCollapsed {...args} />
);

export const Expanded = Template.bind({});
Expanded.args = {
  onClick: () => {
    console.log("clicked the collapsed CTA");
  },
};
