import React, { PropsWithChildren } from "react";
import { createTheming, createUseStyles } from "react-jss";
import { ThemeContext } from "../../../contexts/themes/themecontext";
import { mergeClassNames } from "../../../utils/mergeClasses";

const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

interface CylinderButtonProps extends PropsWithChildren {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "expanded-button" | "popup-button";
  /**
   * onClick
   */
  onClick?: () => void;
  /**
   * aria-label
   */
  ariaLabel: string;
  /**
   * button title attribute
   */
  title: string;
  /**
   * id
   */
  id: string;
}

/**
 * Style Sheets based on themes
 */
const useStyles = createUseStyles(
  {
    button: {
      all: "unset",
      background: ({ theme }) => theme.color.backgroundColor.primary,
      color: ({ theme }) => theme.color.foregroundColor.primary,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "13px 18px",
      gap: "10px",
      height: "64px",
      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.06)",
      borderRadius: "50px",
      width: "0px",
      "&:focus": { outline: "orange auto 5px" },
      transition: "all .5s .25s ease-in-out",
    },
    expandedButton: {
      width: "251px",
      transition: "all .5s .25s ease-in-out",
      animationName: "$fadein",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
    },
    "@keyframes fadein": {
      from: {
        transform: "translateX(30px)",
      },
      to: {
        transform: "translateX(0px)",
      },
    },

    popupButton: {
      width: "180px",
    },
  },
  { theming }
);

/**
 * Call To Action (CTA) Expanded Button
 */
export const CylinderButton: React.FC<CylinderButtonProps> = ({
  children,
  type,
  title,
  id,
  ariaLabel,
  ...props
}): React.ReactElement => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return (
    <ThemeProvider theme={theme}>
      <button
        id={id}
        aria-label={ariaLabel}
        title={title}
        className={mergeClassNames([
          classes.button,
          type === "expanded-button"
            ? classes.expandedButton
            : classes.popupButton,
        ])}
      >
        {children}
      </button>
    </ThemeProvider>
  );
};
