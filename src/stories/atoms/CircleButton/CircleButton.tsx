import React, { PropsWithChildren } from "react";
import { createTheming, createUseStyles } from "react-jss";
import { ThemeContext } from "../../../contexts/themes/themecontext";

const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

interface CircleButtonProps extends PropsWithChildren {
  /**
   * OnClick
   */
  onClick?: () => void;
  /**
   * aria-label
   */
  ariaLabel: string;
  /**
   * title
   */
  title: string;
  /**
   * id
   */
  id: string;
  /**
   * autoFocus
   */
  autoFocus?: boolean;
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
      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.06)",
      borderRadius: "50%",
      height: "64px",
      width: "64px",
      cursor: "pointer",
      "&:focus": { outline: "orange auto 5px" },
      // "&:hover": { opacity: 0, transition: "opacity .5s ease-in-out" },
      "&:hover": {
        animationName: "$bounceIn",
        animationDuration: "2s",
      },
    },
    "@keyframes bounceIn": {
      "0%": {
        transform: "scale(1)",
      },

      "50%": { transform: "scale(.8)" },

      "100%": {
        transform: "scale(1)",
      },
    },
  },
  { theming }
);

/**
 * Call To Action (CTA) Collapsed Button
 */
export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  onClick,
  ariaLabel,
  id,
  autoFocus,
  title,
  ...props
}): React.ReactElement => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return (
    <ThemeProvider theme={theme}>
      <button
        autoFocus={autoFocus}
        title={title}
        id={id}
        aria-label={ariaLabel}
        onClick={onClick}
        className={classes.button}
      >
        {children}
      </button>
    </ThemeProvider>
  );
};
