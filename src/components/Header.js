import React from "react";

import Container from "react-bootstrap/Container";

function Header(){
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: "lightgray",
    padding: 10,
  }
  return (
      <Container fluid style={header}>
        <h1>Virtual Taproom</h1>
      </Container>
  );
}

export default Header;