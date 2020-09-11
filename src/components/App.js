import React from 'react';
import Header from "./Header";
import DrinkControl from "./DrinkControl"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {

  const divCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    marginTop: "5%"
  }

  return (
    <React.Fragment>
      <div style={divCenter}>
        <Container fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <DrinkControl />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
