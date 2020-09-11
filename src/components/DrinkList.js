import React from "react";
import Drink from "./Drink";

import Container from "react-bootstrap/Container";

function DrinkList(props) {
  const masterDrinkList = [
    {
      name: "Prismatic",
      brewer: "Ninkasi",
      type: "Juicy IPA",
      alcoholContent: "5.9%"
    },
    {
      name: "Tricerahops",
      brewer: "Ninkasi",
      type: "Double IPA",
      alcoholContent: "8.0%"
    }
  ]
  return (
    <React.Fragment>
      <Container fluid>
        {masterDrinkList.map((drink, index) =>
          <Drink
            name={drink.name}
            brewer={drink.brewer}
            type={drink.type}
            alcoholContent={drink.alcoholContent} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default DrinkList;