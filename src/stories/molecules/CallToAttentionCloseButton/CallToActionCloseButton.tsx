import React, { PropsWithChildren } from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { CircleButton } from "../../atoms/CircleButton/CircleButton";
import { createUseStyles } from "react-jss";

interface CTAButtonProps extends PropsWithChildren {
  /**
   * title
   */
  title: string;
  /**
   * aria-label
   */
  ariaLabel: string;
  /**
   * onClick
   */
  onClick?: () => void;
  /**
   * id
   */
  id: string;
  /**
   * autoFocus
   */
  autoFocus?: boolean;
}

const useStyles = createUseStyles({
  callToActionCloseButtonWrapper: {
    marginRight: "60px",
  },
  iconWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

/**
 * Call To Action (CTA) Expanded Button with Icons
 */
export const CallToActionCloseButton: React.FC<CTAButtonProps> = ({
  onClick,
  title,
  autoFocus,
  id,
  ariaLabel,
}): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.callToActionCloseButtonWrapper} onClick={onClick}>
      <CircleButton
        autoFocus={autoFocus}
        id={id}
        title={title}
        ariaLabel={ariaLabel}
      >
        <div className={classes.iconWrapper}>
          <Icon iconName={"close"} />
        </div>
      </CircleButton>
    </div>
  );
};
