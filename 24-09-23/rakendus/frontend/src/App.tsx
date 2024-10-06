//import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/ToDo";
import { red, green } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const catTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const todoTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={catTheme}>
        <Cats />
      </ThemeProvider>
      <hr />
      <ThemeProvider theme={todoTheme}>
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;
