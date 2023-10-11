import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
// import { useState, useEffect } from "react";
// import { ButtonProps } from "./models/button";
// import Button from "./components/Button";
// import axios from "axios";

// interface Foo {
//   bar: string;
// }

// Material UI Theme
const theme = createTheme({
  typography: {
    fontSize: 8,
  },
});

function App() {
  // const [foo, setFoo] = useState<Foo>({});

  // const getFoo = () => {
  //   axios
  //     .get("http://localhost:3001/servers")
  //     .then((response) => {
  //       setFoo(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getFoo();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
    </ThemeProvider>
  );
}

export default App;
