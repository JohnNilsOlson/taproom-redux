import React from "react";
import DrinkList from "./DrinkList";
import NewDrinkForm from "./NewDrinkForm";
import DrinkDetail from "./DrinkDetail";

import Button from "react-bootstrap/Button";

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedDrink: null,
      masterDrinkList: []
    };
  }

  handlePint = (id) => {
    const drink = this.state.masterDrinkList.filter(drink => drink.id === id)[0];
    const newDrink = {...drink, quantity: drink.quantity -1}
    const newMasterDrinkList = this.state.masterDrinkList.map(function(drink) { return drink.id === id ? newDrink : drink; });
    console.log(newMasterDrinkList);
    this.setState(
      {
        masterDrinkList: newMasterDrinkList,
        selectedDrink: drink
      }
    )
  }

  handlePitcher = (id) => {
    const drink = this.state.masterDrinkList.filter(drink => drink.id === id)[0];
    const newDrink = {...drink, quantity: drink.quantity -4}
    const newMasterDrinkList = this.state.masterDrinkList.map(function(drink) { return drink.id === id ? newDrink : drink; });
    console.log(newMasterDrinkList);
    this.setState(
      {
        masterDrinkList: newMasterDrinkList,
        selectedDrink: drink
      }
    )
  }

  handleSelect = (id) => {
    const selectedDrink = this.state.masterDrinkList.filter(drink => drink.id === id)[0];
    this.setState(
      {
        selectedDrink: selectedDrink
      }
    );
  }

  handleNewDrink = (newDrink) => {
    const newMasterDrinkList = this.state.masterDrinkList.concat(newDrink);
    this.setState(
      {
        masterDrinkList: newMasterDrinkList, 
        formVisible: false
      }
    );
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisible: false,
        selectedDrink: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    const button={
      borderRadius: 0,
      borderColor: "lightgray"
    }
    
    if (this.state.selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail drink={this.state.selectedDrink} onClickingPint={this.handlePint} onClickingPitcher={this.handlePitcher} />
      buttonText = "Return to Tap List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleNewDrink} />
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <DrinkList drinkList={this.state.masterDrinkList} onDrinkSelection={this.handleSelect} />
      buttonText = "Add New Tap";
    }
    
    return (
      <React.Fragment>
        <Button variant="outline-dark" style={button} onClick={this.handleClick} block>{buttonText}</Button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default DrinkControl;