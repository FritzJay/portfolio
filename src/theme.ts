import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "rgba(23, 24, 23, 1)", white: "rgba(254, 255, 254, 1)" },
    background: {
      paper: "rgba(254, 255, 254, 1)",
      default: "rgba(250, 255, 250, 1)",
    },
    primary: {
      light: "rgba(122, 155, 160, 1)",
      main: "rgba(65, 112, 119, 1)",
      dark: "rgba(42, 90, 97, 1)",
      contrastText: "rgba(254, 255, 254, 1)",
    },
    secondary: {
      light: "rgba(255, 147, 147, 1)",
      main: "rgba(255, 107, 107, 1)",
      dark: "rgba(209, 88, 88, 1)",
      contrastText: "rgba(254, 255, 254, 1)",
    },
    error: {
      light: "rgba(255, 241, 175, 1)",
      main: "rgba(255, 234, 135, 1)",
      dark: "rgba(255, 230, 109, 1)",
      contrastText: "rgba(90, 93, 90, 1)",
    },
    text: {
      primary: "rgba(23, 24, 23, 1)",
      secondary: "rgba(90, 93, 90, 1)",
      disabled: "rgba(135, 140, 135, 1)",
      hint: "rgba(135, 140, 135, 1)",
    },
  },
});
