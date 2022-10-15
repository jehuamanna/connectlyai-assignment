import React from "react";
import { createUseStyles } from "react-jss";
import { CallToActionOnClickExpanded } from "../stories/molecules/CallToActionOnClickExpanded/CallToActionOnClickExpanded";
import { CallToActionCloseButton } from "../stories/molecules/CallToAttentionCloseButton/CallToActionCloseButton";
import { CallToAttentionCollapsed } from "../stories/molecules/CallToAttentionCollapsed/CallToActionButtonCollapsed";
import { CallToActionButtonExpanded } from "../stories/molecules/CallToAttentionExpanded/CallToActionButtonExpanded";
import ClickAwayListener from "../utils/ReactClickAwayListener";

const useStyles = createUseStyles({
  ctawrapper: {
    display: "flex",
    textAlign: "center",
    position: "sticky",
    inset: "85%",
    justifyContent: "end",
    marginRight: "60px",
    width: "100%",
  },
  popupWrapper: {
    position: "relative",
  },
  callToActionOnClickExpandedWrapper: {
    position: "absolute",
    bottom: "100%",
    right: "42px",
  },
  callToActionButtonExpandedWrapper: {
    marginRight: "60px",
  },
});

const CallToActionSocialMediaWidget = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = React.useState(false);
  const [popupOpened, setPopupOpened] = React.useState(false);
  let timer: NodeJS.Timeout;
  React.useEffect(() => {
    ((timer) => {
      timer = setTimeout(() => {
        setCollapsed(true);
      }, 3000);
    })(timer);
  }, []);
  return (
    <div className={classes.ctawrapper}>
      {popupOpened ? (
        <div className={classes.popupWrapper}>
          <CallToActionCloseButton
            autoFocus={true}
            id="close-social-media-popup"
            title="Close Social Media PopUp"
            ariaLabel="Close Social Media PopUp"
            onClick={() => setPopupOpened(false)}
          />
          <ClickAwayListener onClickAway={() => setPopupOpened(false)}>
            <div className={classes.callToActionOnClickExpandedWrapper}>
              <CallToActionOnClickExpanded
                onClick={(selectedSocialMedia) => {
                  console.log(selectedSocialMedia);
                  setPopupOpened(false);
                }}
              />
            </div>
          </ClickAwayListener>
        </div>
      ) : collapsed ? (
        <CallToAttentionCollapsed
          onClick={() => {
            setPopupOpened(true);
          }}
        />
      ) : (
        <div className={classes.callToActionButtonExpandedWrapper}>
          <CallToActionButtonExpanded
            onClick={() => {
              setPopupOpened(true);
            }}
            type="normal-bold"
            text="Message us"
            iconNames={["sms", "messenger", "instagram"]}
          />
        </div>
      )}
    </div>
  );
};

export default CallToActionSocialMediaWidget;
