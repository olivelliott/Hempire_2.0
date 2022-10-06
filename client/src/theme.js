import { createTheme } from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/oswald";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#0c4441",
    },
    secondary: {
      main: "#252c20",
    },
    background: {
      default: "#0b1721",
      paper: "#0b1721",
    },
    text: {
      primary: "#0c4441",
    },
  },
  typography: {
    fontFamily: "Droid Sans",
    subtitle1: {
      fontFamily: "Montserrat",
    },
    h1: {
      fontFamily: "Oswald",
    },
    h2: {
      fontFamily: "Oswald",
    },
    body2: {
      fontFamily: "Oswald",
    },
  },
});
