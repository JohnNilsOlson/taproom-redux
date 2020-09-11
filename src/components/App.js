import React from 'react';
import Header from "./Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"

function App() {

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <React.Fragment>
      <Container style={containerStyles}>
        <Header />
      </Container>
    </React.Fragment>
  );
}

export default App;
