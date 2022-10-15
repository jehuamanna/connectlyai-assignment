import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Close = Template.bind({});
Close.args = {
  iconName: "close",
};

export const Messenger = Template.bind({});
Messenger.args = {
  iconName: "messenger",
};

export const Instagram = Template.bind({});
Instagram.args = {
  iconName: "instagram",
};

export const SMS = Template.bind({});
SMS.args = {
  iconName: "sms",
};

export const CTACollapsed = Template.bind({});
CTACollapsed.args = {
  iconName: "cta-collapsed",
};
