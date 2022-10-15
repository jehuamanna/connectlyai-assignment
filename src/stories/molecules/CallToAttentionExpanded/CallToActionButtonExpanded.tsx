import React, { PropsWithChildren } from "react";
import { createUseStyles } from "react-jss";
import { Icon } from "../../atoms/Icon/Icon";
import { Typography } from "../../atoms/Typography/Typography";
import { CylinderButton } from "../../atoms/CylinderButton/CylinderButton";

interface CTAButtonProps extends PropsWithChildren {
  /**
   * Text to be displayed
   */
  text: string;
  /**
   * Type of the button
   */
  type: "normal" | "normal-bold";
  /**
   * List of icon names
   */
  iconNames: ("messenger" | "close" | "cta-collapsed" | "instagram" | "sms")[];
  /**
   * onClick
   */
  onClick: () => void;
}

const useStyles = createUseStyles({
  flexWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyItems: "center",
  },
  iconWrapper: {
    width: "27.97px",
    height: "27.97px",
    margin: "3px",
  },
  iconsWrapper: {
    display: "flex",
  },
  typographyWrapper: {
    marginLeft: "10px",
  },
  callToActionButtonExpandedWrapper: {},
});

/**
 * Call To Action (CTA) Expanded Button with Icons
 */
export const CallToActionButtonExpanded: React.FC<CTAButtonProps> = ({
  text,
  onClick,
  type,
  iconNames,
}): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.callToActionButtonExpandedWrapper}>
      <CylinderButton
        id="expand-to-social-media-button"
        title="Expand To Social Media Buttons"
        ariaLabel="Expand To Social Media Buttons"
        type="expanded-button"
      >
        <div onClick={onClick} className={classes.flexWrapper}>
          <div className={classes.iconsWrapper}>
            {iconNames.map((iconName) => (
              <div key={iconName} className={classes.iconWrapper}>
                <Icon iconName={iconName} />
              </div>
            ))}
          </div>
          <div className={classes.typographyWrapper}>
            <Typography type={type} text={text}></Typography>
          </div>
        </div>
      </CylinderButton>
    </div>
  );
};
