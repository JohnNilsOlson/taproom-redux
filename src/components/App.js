import React from 'react';
import Header from "./Header";
import DrinkControl from "./DrinkControl"

import Container from "react-bootstrap/Container";

function App() {

  const center = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    marginTop: 10,
    marginBottom: 10
  }

  return (
    <React.Fragment>
        <Container fluid style={center}>
          <Header />
          <DrinkControl />
        </Container>
    </React.Fragment>
  );
}

export default App;
