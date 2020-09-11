import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";

import Container from "react-bootstrap/Container";

function DrinkList(props) {
  return (
    <React.Fragment>
      <Container fluid>
        {props.drinkList.map((drink, index) =>
          <Drink
            whenDrinkClicked = {props.onDrinkSelection}
            name={drink.name}
            brewer={drink.brewer}
            type={drink.type}
            alcoholContent={drink.alcoholContent}
            id={drink.id}
            key={drink.id}/>
        )}
      </Container>
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func
}

export default DrinkList;