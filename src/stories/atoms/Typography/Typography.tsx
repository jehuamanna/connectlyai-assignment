import React, { PropsWithChildren } from "react";
import { createTheming, createUseStyles } from "react-jss";
import { ThemeContext } from "../../../contexts/themes/themecontext";
import { mergeClassNames } from "../../../utils/mergeClasses";
import { theme } from "../../themes/theme";
import { ITheme } from "../../themes/theme.Models";

const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

interface CTATypographyProps extends PropsWithChildren {
  /**
   * Is this the type of the button
   */
  type: "normal" | "normal-bold";
  /**
   * Is this the text to be displayed
   */
  text: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Style Sheets based on themes
 */
const useStyles = createUseStyles(
  {
    typographyBase: {
      boxSizing: "border-box",
      background: ({ theme }: { theme: ITheme }) =>
        theme.color.backgroundColor.primary,
      color: ({ theme }) => theme.color.foregroundColor.primary,
      fontFamily: ({ theme }) => theme.font.fontFamily.poppins,
      fontStyle: ({ theme }) => theme.font.fontStyle.normal,
      flex: "none",
      order: "3",
      flexGrow: "0",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    },
    typographyNormalText: {
      height: "27px",
      fontSize: ({ theme }) => theme.font.fontSize.medium,
      fontWeight: ({ theme }) => theme.font.fontWeight.regular,
      lineHeight: "27px",
    },
    typographyNomalBoldText: {
      height: "24px",
      lineHeight: "24px",
      fontSize: ({ theme }) => theme.font.fontSize.large,
      fontWeight: ({ theme }) => theme.font.fontWeight.bold,
    },
  },
  { theming }
);

/**
 * Call To Action (CTA) Texts
 */
export const Typography: React.FC<CTATypographyProps> = ({
  text,
  type,
  ...props
}): React.ReactElement => {
  const theme_ = useTheme<ITheme>();
  const classes = useStyles({ ...props, theme: theme_ });
  return (
    <ThemeProvider theme={theme}>
      <div
        className={mergeClassNames([
          classes.typographyBase,
          type === "normal"
            ? classes.typographyNormalText
            : type === "normal-bold"
            ? classes.typographyNomalBoldText
            : "",
        ])}
      >
        {text}
      </div>
    </ThemeProvider>
  );
};
