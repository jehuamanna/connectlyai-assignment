import React from "react";
import {} from "react-dom";
import { createUseStyles } from "react-jss";
import CallToActionSocialMediaWidget from "./cta-social-media-widget/CallToActionSocialMediaWidget";

const useStyles = createUseStyles({
  header: {
    textAlign: "center",
    backgroundColor: "#282c34",
    minHeight: "200vh",
    position: "relative",
    color: "white",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <CallToActionSocialMediaWidget />
    </div>
  );
}

export default App;
