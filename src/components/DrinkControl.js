import React from "react";
import DrinkList from "./DrinkList";
import NewDrinkForm from "./NewDrinkForm";

import Button from "react-bootstrap/Button";

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <NewDrinkForm />
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <DrinkList />
      buttonText = "Add new Tap";
    }
    return (
      <React.Fragment>
        <Button variant="outline-dark" onClick={this.handleClick} block>{buttonText}</Button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default DrinkControl;