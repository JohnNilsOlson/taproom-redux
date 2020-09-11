import React from "react";

function Drink(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.alcoholContent}</h3>
      <h5>{props.type}</h5>
      <h5>{props.brewer}</h5>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  );
}

export default Drink;