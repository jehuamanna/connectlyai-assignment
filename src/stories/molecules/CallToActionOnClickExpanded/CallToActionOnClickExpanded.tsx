import React, { PropsWithChildren } from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { CylinderButton } from "../../atoms/CylinderButton/CylinderButton";
import { Typography } from "../../atoms/Typography/Typography";
import { createUseStyles } from "react-jss";

interface CTAButtonProps extends PropsWithChildren {
  /**
   * onClick
   */
  onClick?: (socialMediaName: string) => void;
}

const socialMedias: {
  iconName: "sms" | "messenger" | "instagram";
  socialMediaName: string;
}[] = [
  { iconName: "sms", socialMediaName: "SMS" },
  { iconName: "messenger", socialMediaName: "Messenger" },
  { iconName: "instagram", socialMediaName: "Instagram" },
];

const useStyles = createUseStyles({
  iconTypographyWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  popupWrapper: {
    position: "relative",
  },
  callToActionOnClickExpandedWrapper: {
    display: "flex",
    flexDirection: "column",
    margin: "8px",
  },
  cylinderButtonWrapper: {
    margin: "8px",
    cursor: "pointer",
  },
  typographyWrapper: {
    marginLeft: "6px",
  },
});

/**
 * Call To Action (CTA) Expanded Button with Icons
 */
export const CallToActionOnClickExpanded: React.FC<CTAButtonProps> = ({
  onClick,
}): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.callToActionOnClickExpandedWrapper}>
      {socialMedias.map((socialMedia) => (
        <div
          key={socialMedia.socialMediaName}
          onClick={() => onClick && onClick(socialMedia.socialMediaName)}
          className={classes.cylinderButtonWrapper}
        >
          <CylinderButton
            id={socialMedia.iconName}
            ariaLabel={socialMedia.iconName}
            title={socialMedia.iconName}
            type="popup-button"
          >
            <div className={classes.iconTypographyWrapper}>
              <Icon iconName={socialMedia.iconName} />
              <div className={classes.typographyWrapper}>
                <Typography type="normal" text={socialMedia.socialMediaName} />
              </div>
            </div>
          </CylinderButton>
        </div>
      ))}
    </div>
  );
};
