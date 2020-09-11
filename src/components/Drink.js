import React from "react";

import Row from "react-bootstrap/Row"

function Drink(props){
  const drink={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <React.Fragment>
      <Row style={drink}>
        <h3>{props.name} - {props.alcoholContent}</h3>
        <h5>{props.type}</h5>
        <h5>{props.brewer}</h5>
        <p>{props.description}</p>
        <p>{props.quantity}</p>
      </Row>
    </React.Fragment>
  );
}

export default Drink;