import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function DrinkDetail(props) {
  const { drink, onClickingPint } = props;
  return (
    <React.Fragment>
        <h1>{drink.name}</h1>
        <h3>{drink.type}</h3>
        <h3>{drink.brewer}</h3>
        <h3>{drink.alcoholContent}</h3>
        <p>{drink.description}</p>
        <p>{drink.quantity}</p>
        <Button variant="outline-dark" onClick={() => onClickingPint(drink.id)} block>Pint</Button>
        <Button variant="outline-dark" block>Pitcher</Button>
        <Button variant="outline-dark" block>Growler</Button>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingPint: PropTypes.func
}

export default DrinkDetail;