import { createTheme } from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/oswald";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#353839",
      dark: "#353839",
    },
    // orange
    secondary: {
      main: "#ff7400",
    },
    orange: {
      main: "#ff7400",
    },
    background: {
      default: "#0e1111",
      paper: "#0e1111",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Oswald",
    subtitle1: {
      fontFamily: "Montserrat",
    },
    h1: {
      fontFamily: "Oswald",
    },
    h2: {
      fontFamily: "Oswald",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#232b2b",
        color: "#fff",
      },
    },
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});
