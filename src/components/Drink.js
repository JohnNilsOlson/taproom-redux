import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

function Drink(props){

  const drink={
    marginTop: 10,
    borderColor: "lightgray"
  }
  return (
    <React.Fragment>
      <Button variant="outline-dark" style={drink} onClick = {() => props.whenDrinkClicked(props.id)} block>
        <h3>{props.name} - {props.alcoholContent}%</h3>
        <h5>{props.type}</h5>
        <h5>{props.brewer}</h5>
      </Button>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  alcoholContent: PropTypes.number,
  type: PropTypes.string,
  brewer: PropTypes.string
}

export default Drink;