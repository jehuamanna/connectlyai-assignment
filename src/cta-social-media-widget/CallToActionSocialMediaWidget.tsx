import React from "react";
import { createUseStyles } from "react-jss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CallToActionOnClickExpanded } from "../stories/molecules/CallToActionOnClickExpanded/CallToActionOnClickExpanded";
import { CallToActionCloseButton } from "../stories/molecules/CallToAttentionCloseButton/CallToActionCloseButton";
import { CallToAttentionCollapsed } from "../stories/molecules/CallToAttentionCollapsed/CallToActionButtonCollapsed";
import { CallToActionButtonExpanded } from "../stories/molecules/CallToAttentionExpanded/CallToActionButtonExpanded";
import ClickAwayListener from "../utils/ReactClickAwayListener";
import { useInit } from "./CallToActionSocialMediaWidget.hooks";
import {
  IDispalyToastResponse,
  IMessage,
} from "./CallToActionSocialMediaWidget.models";

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
  const { state, actions } = useInit();
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

  const displayToast = (response: IDispalyToastResponse<string>) => {
    if (response.status === "success") {
      toast(response.data, { type: toast.TYPE.SUCCESS });
    } else {
      toast(response.error || "Unknown error happened", {
        type: toast.TYPE.ERROR,
      });
    }
  };

  const onClickHandler = (selectedSocialMedia: string) => {
    switch (selectedSocialMedia) {
      case "SMS":
        actions.fetchSMS(displayToast);
        break;
      case "Messenger":
        actions.fetchMessenger(displayToast);
        break;
      case "Instagram":
        actions.fetchInstagram(displayToast);
        break;
      default:
        break;
    }
    setPopupOpened(false);
  };

  return (
    <div className={classes.ctawrapper}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
              <CallToActionOnClickExpanded onClick={onClickHandler} />
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
