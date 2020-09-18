import React from 'react';
import Header from "./Header";
import DrinkControl from "./DrinkControl"

import Container from "react-bootstrap/Container";

function App() {

  const center = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: 10,
  }

  return (
    <React.Fragment>
      <Header />
      <DrinkControl />
    </React.Fragment>
  );
}

export default App;
