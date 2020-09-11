import React from "react";
import PropTypes from "prop-types";

import Row from "react-bootstrap/Row"

function Drink(props){

  const drink={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginTop: 10
  }
  return (
    <React.Fragment>
      <Row style={drink}>
        <h3>{props.name} - {props.alcoholContent}%</h3>
        <h5>{props.type}</h5>
        <h5>{props.brewer}</h5>
      </Row>
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