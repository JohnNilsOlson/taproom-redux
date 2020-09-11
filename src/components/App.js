import React from 'react';
import Header from "./Header";
import DrinkControl from "./DrinkControl"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {

  const divCenter = {
    width: 600,
    position: "fixed",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
  return (
    <React.Fragment>
      <div style={divCenter}>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
          <Col>
              <DrinkControl />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
