import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";

function DrinkDetail(props) {
  const { drink } = props;
  return (
    <React.Fragment>
      <Container fluid>
        <h1>{drink.name}</h1>
        <h3>{drink.type}</h3>
        <h3>{drink.brewer}</h3>
        <h3>{drink.alcoholContent}</h3>
        <p>{drink.description}</p>
        <p>{drink.quantity}</p>
      </Container>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object
}

export default DrinkDetail;