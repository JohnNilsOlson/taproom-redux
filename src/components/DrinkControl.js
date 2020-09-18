import React from "react";
import DrinkList from "./DrinkList";
import NewDrinkForm from "./NewDrinkForm";
import DrinkDetail from "./DrinkDetail";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedDrink: null,
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
    const selectedDrink = this.props.masterDrinkList.filter(drink => drink.id === id)[0];
    this.setState(
      {
        selectedDrink: selectedDrink
      }
    );
  }

  handleNewDrink = (newDrink) => {
    const { dispatch } = this.props;
    const { id, name, drinkType, brewery, alcoholContent, description, quantity } = newDrink;
    const action = {
      type: 'ADD_DRINK',
      id: id,
      name: name,
      drinkType: drinkType,
      brewery: brewery,
      alcoholContent: alcoholContent,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState(
      {
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
    
    if (this.state.selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail drink={this.state.selectedDrink} onClickingPint={this.handlePint} onClickingPitcher={this.handlePitcher} />
      buttonText = "Return to Tap List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleNewDrink} />
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <DrinkList drinkList={this.props.masterDrinkList} onDrinkSelection={this.handleSelect} />
      buttonText = "Add New Tap";
    }

    const center = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      margin: 0
    }

    const button={
      borderRadius: 0,
      borderColor: "lightgray"
    }
    
    return (
      <React.Fragment>
        <Container>
          <Button variant="outline-dark" style={button} onClick={this.handleClick} block>{buttonText}</Button>
        </Container>
        <Container fluid style={center}>
          {currentlyVisibleState}
        </Container>
      </React.Fragment>
    );
  }
}

DrinkControl.propTypes = {
  masterDrinkList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterDrinkList: state
  }
}

DrinkControl = connect(mapStateToProps)(DrinkControl);

export default DrinkControl;