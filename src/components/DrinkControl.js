import React from "react";
import DrinkList from "./DrinkList";
import NewDrinkForm from "./NewDrinkForm";
import DrinkDetail from "./DrinkDetail";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedDrink: null,
      masterDrinkList: [
        {
          name: "Prismatic",
          type: "Juicy IPA",
          brewer: "Ninkasi",
          alcoholContent: 5.9,
          description: "Notice the sweet, golden hue of this IPA? It’s the color of a summer sunset here in the Northwest. There are hints of citrus in the air, the smell of something deep and earthy rising. Prismatic is a kind of magic. The colors of its six hops swirl into a halo of warmth, like a really good day.",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 1
        },
        {
          name: "Tricerahops",
          type: "Double IPA",
          brewer: "Ninkasi",
          alcoholContent: 8.0,
          description: "A few thousand years before we opened Ninkasi, Columbian mammoths roamed this area by the thousands. They stood 13 feet high with tusks 16 feet long. This is our monument to all the big and beautiful beasts that came before us. Tricerahops is an ancient field of floral hops with a deep, earthy taste and a balanced finish you never want to end.",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 2
        },
        {
          name: "RPM",
          type: "IPA",
          brewer: "Boneyard",
          alcoholContent: 6.5,
          description: "Brewed using 6 different NW varieties of hops at over 2.5 pounds per barrel, RPM IPA focuses on extreme hoppiness rather than bitterness. It’s golden to copper in color with a complex malt profile that will not overshadow the hops. Our flagship, RPM IPA, will satisfy any opinionated hop forward IPA consumer.",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 3
        },
        {
          name: "Diablo Rojo",
          type: "Amber Ale",
          brewer: "Boneyard",
          alcoholContent: 5.5,
          description: "This deep amber ale is extremely well balanced and very drinkable. It appeals both to the hop lover and non hop lover. This beer is duel-hopped with Cascade and Delta hops. Cheers to the Red Devil!",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 4
        },
        {
          name: "Apocalypse",
          type: "IPA",
          brewer: "10 Barrel",
          alcoholContent: 6.8,
          description: "Apocalypse is made for those of us that go big and then celebrate with a cold beer. You know who you are; pushing your limits every day and living life to the fullest. Our Brewer's did the same thing when creating this beer using 4.8 lbs of hops per barrel... Go big or go home!",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 5
        },
        {
          name: "Pub Beer",
          type: "Lager",
          brewer: "10 Barrel",
          alcoholContent: 5.0,
          description: "This craft lager in a can proves that ideas you come up with at 1:00am in the morning can happen. Served in a 12oz can... requests for a glass will be denied.",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 6
        },
        {
          name: "Let's Play",
          type: "Pilsner",
          brewer: "Level",
          alcoholContent: 5.0,
          description: "Dry Hopped Pilsner - Light, dry, easy drinking with a mild hoppy aroma.",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 7
        },
        {
          name: "Ready Player One",
          type: "Saison",
          brewer: "Level",
          alcoholContent: 4.8,
          description: "Dry Hopped Saison - Brewer’s lawnmower beer. Light, flavorful and crisp.",
          pintPrice: 5.00,
          pitcherPrice: 18.00,
          quantity: 124,
          id: 8
        }      
      ]
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

export default DrinkControl;