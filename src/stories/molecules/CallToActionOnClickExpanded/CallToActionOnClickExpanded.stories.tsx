import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CallToActionOnClickExpanded } from "./CallToActionOnClickExpanded";

export default {
  title: "Molecules/CallToAttentionOnClickExpanded",
  component: CallToActionOnClickExpanded,
} as ComponentMeta<typeof CallToActionOnClickExpanded>;

const Template: ComponentStory<typeof CallToActionOnClickExpanded> = (args) => (
  <CallToActionOnClickExpanded {...args} />
);

export const Expanded = Template.bind({});
Expanded.args = {
  onClick: (socialMediaName) => {
    console.log(`${socialMediaName} is clicked`);
  },
};
