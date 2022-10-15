import React, { PropsWithChildren } from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { CircleButton } from "../../atoms/CircleButton/CircleButton";
import { CallToActionButtonExpanded } from "../CallToAttentionExpanded/CallToActionButtonExpanded";
import { createUseStyles } from "react-jss";

interface CTAButtonProps extends PropsWithChildren {
  /**
   * onClick
   */
  onClick: () => void;
}

const useStyles = createUseStyles({
  callToAttentionCollapsedWrapper: {
    width: "400px",
    position: "relative",
    display: "flex",
    justifyContent: "end",
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
  callToActionButtonExpandedWrapper: {
    all: "unset",
    position: "absolute",
    right: "0px",
    cursor: "pointer",
    display: "flex",
    maringLeft: "60px",
    "&:focus": { outline: "orange auto 5px" },
  },
});

/**
 * Call To Action (CTA) Expanded Button with Icons
 */
export const CallToAttentionCollapsed: React.FC<CTAButtonProps> = ({
  onClick,
}): React.ReactElement => {
  const classes = useStyles();
  const [shouldExpand, setShouldExpand] = React.useState(false);
  return (
    <div
      onClick={() => {
        setShouldExpand(false);
        onClick();
      }}
      className={classes.callToAttentionCollapsedWrapper}
    >
      <div className={classes.callToActionButtonExpandedWrapper}>
        {shouldExpand && (
          <CallToActionButtonExpanded
            onClick={() => {}}
            text="Message us"
            type="normal-bold"
            iconNames={["sms", "messenger", "instagram"]}
          />
        )}
        <div
          onMouseEnter={() => {
            setShouldExpand(true);
          }}
          onMouseLeave={() => {
            setShouldExpand(false);
          }}
        >
          <CircleButton
            id="social-media-button"
            title="Social Media Button"
            ariaLabel="Social Media Buttons"
          >
            <div className={classes.iconWrapper}>
              <Icon iconName={"cta-collapsed"} />
            </div>
          </CircleButton>
        </div>
      </div>
    </div>
  );
};
