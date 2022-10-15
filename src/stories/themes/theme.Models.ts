export interface ITheme {
  font: IFont;
  color: IColor;
}

export interface IFont {
  fontFamily: { poppins: string };
  fontSize: { medium: string; large: string; };
  fontWeight: { regular: string; bold: string };
  fontStyle: { normal: string };
}

export interface IColor {
  backgroundColor: IBackgroundColor;
  foregroundColor: IForegroundColor;
}

export interface IBackgroundColor {
  primary: string;
}

export interface IForegroundColor {
  primary: string;
}
