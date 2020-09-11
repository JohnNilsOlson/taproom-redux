import React from "react";
import Drink from "./Drink";

function DrinkList(props) {
  return (
    <React.Fragment>
      <Drink
        name="Prismatic"
        brewer="Ninkasi"
        type="Juicy IPA"
        description= "Notice the sweet, golden hue of this IPA? It’s the color of a summer sunset here in the Northwest. There are hints of citrus in the air, the smell of something deep and earthy rising. Prismatic is a kind of magic. The colors of its six hops swirl into a halo of warmth, like a really good day."
        alcoholContent= "5.9%"
        quantity= "124"/>
      <Drink
        name= "Tricerahops"
        brewer= "Ninkasi"
        type= "Double IPA"
        description= "Tricerahops is an ancient field of floral hops with a deep, earthy taste and a balanced finish you never want to end."
        alcoholContent= "5.9%"
        quantity= "124"/>
    </React.Fragment>
  );
}

export default DrinkList;