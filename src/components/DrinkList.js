import React from "react";
import Drink from "./Drink";

import Container from "react-bootstrap/Container";

function DrinkList(props) {
  return (
    <React.Fragment>
      <Container fluid>
        <Drink
          name="Prismatic"
          brewer="Ninkasi"
          type="Juicy IPA" 
          alcoholContent= "5.9%"/>
        <Drink
          name= "Tricerahops"
          brewer= "Ninkasi"
          type= "Double IPA"
          alcoholContent="8.0%"/>
      </Container>
    </React.Fragment>
  );
}

export default DrinkList;