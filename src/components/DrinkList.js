import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";

function DrinkList(props) {
  return (
    <React.Fragment>
        {Object.values(props.drinkList).map((drink) =>
          <Drink
            whenDrinkClicked = {props.onDrinkSelection}
            name={drink.name}
            brewer={drink.brewer}
            type={drink.type}
            alcoholContent={drink.alcoholContent}
            id={drink.id}
            key={drink.id}/>
        )}
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.object,
  onDrinkSelection: PropTypes.func
}

export default DrinkList;