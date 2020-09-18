import React from "react";

import Container from "react-bootstrap/Container";

function Header(){

  const center = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  }

  return (
    <Container fluid style={center}>
      <h1>Virtual Taproom</h1>
    </Container>
  );
}

export default Header;