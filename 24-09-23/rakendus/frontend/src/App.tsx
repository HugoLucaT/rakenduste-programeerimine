//import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/ToDo";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Cats />
      </ThemeProvider>
      <hr />
      <Todo />
    </>
  );
}

export default App;
