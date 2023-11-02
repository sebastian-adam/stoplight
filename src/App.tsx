import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

// Material UI Theme
const theme = createTheme({
  typography: {
    fontSize: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex w-screen h-screen items-center bg-neutral-900">
        <TrafficLight />
      </div>
    </ThemeProvider>
  );
}

export default App;
