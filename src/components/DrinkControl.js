import React from "react";
import DrinkList from "./DrinkList";

import Container from "react-bootstrap/Container";

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <DrinkList />
      </React.Fragment>
    );
  }
}

export default DrinkControl;