import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

function DrinkDetail(props) {
  const { drink, onClickingPint, onClickingPitcher } = props;
  
  const quantity = {
    height: 10,
    width: `${(drink.quantity/124) * 100}%`,
    backgroundColor: "lightgray",
    marginBottom: 10
  }

  const quantityMax = {
    height: 11,
    width: "100%",
    border: "solid",
    borderWidth: 1,
    borderColor: "lightgray"
  }

  const details = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }

  const button={
    borderRadius: 0,
    borderColor: "lightgray"
  }

  let quantityDisplay = null;

  if (drink.quantity <= 0) {
    quantityDisplay = <p>Keg's Tapped!</p>
  } else {
    quantityDisplay = <div style={quantityMax}><div style={quantity}></div></div>
  }

  return (
    <React.Fragment>
      <div style={details}>
        <h1>{drink.name}</h1>
        <h3>{drink.type}</h3>
        <h3>{drink.brewer}</h3>
        <h3>{drink.alcoholContent}</h3>
        <p>{drink.description}</p>
        <p>Estimated Quanitity Remaining</p>
      </div>
      {quantityDisplay}
      <br></br>
      <div style={details}>
        <h3>Order Up!</h3>
      </div>
      <Button variant="outline-dark" style={button} onClick={() => onClickingPint(drink.id)} block>Pint ${parseInt(drink.pintPrice).toFixed(2)}</Button>
      <Button variant="outline-dark" style={button} onClick={() => onClickingPitcher(drink.id)} block>Pitcher ${parseInt(drink.pitcherPrice).toFixed(2)}</Button>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingPint: PropTypes.func,
  onClickingPitcher: PropTypes.func
}

export default DrinkDetail;