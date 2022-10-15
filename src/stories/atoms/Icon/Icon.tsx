import React, { PropsWithChildren } from "react";
import SMSIcon from "../../assets/sms icon.svg";
import MessengerIcon from "../../assets/messenger icon.svg";
import CTACollapsedIcon from "../../assets/cta collapsed.svg";
import InstagramIcon from "../../assets/instagram icon.svg";
import CloseIcon from "../../assets/close icon.svg";

interface IIcon extends PropsWithChildren {
  /**
   * Is this the principal call to action on the page?
   */
  iconName: "messenger" | "close" | "cta-collapsed" | "instagram" | "sms";
}

const iconMap = {
  messenger: MessengerIcon,
  close: CloseIcon,
  "cta-collapsed": CTACollapsedIcon,
  instagram: InstagramIcon,
  sms: SMSIcon,
};

export const Icon: React.FC<IIcon> = ({ iconName }) => {
  return <img src={iconMap[iconName]} alt={`${iconName} icon`} />;
};
