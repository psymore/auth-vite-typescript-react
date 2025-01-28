// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Define your custom color palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Your primary color
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d32f2f", // Your secondary color
      light: "#ff6659",
      dark: "#9a0007",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    background: {
      default: "#242424", // Default background color
      paper: "#f5f5f5", // Paper background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Customize fonts here if needed
  },
});

export default theme;
