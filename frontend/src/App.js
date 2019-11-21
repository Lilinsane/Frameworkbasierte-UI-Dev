import React from "react";
import './App.css';
import { Box, Heading, Grommet } from "grommet";
import Home from "./components/Home";

function App() {
  return (
    <Grommet className="App">
      <Box
        direction="column"
        border={{ color: "brand", size: "large" }}
        pad="medium"
        align="center"
        alignContent="center"
      >
      <Heading textAlign="center">Brainwriter</Heading>
      <Home />
      </Box>
    </Grommet>
  );
}

export default App;