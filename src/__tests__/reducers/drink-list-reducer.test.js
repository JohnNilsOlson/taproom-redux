import drinkListReducer from '../../reducers/drink-list-reducer';

describe('drinkListReducer', () => {
  
  let action;

  const drinkData = {
    name: 'Test Drink',
    drinkType: 'Test Type',
    brewer: 'Test Brewery',
    alcoholContent: 5.0,
    description: 'Test Description',
    quantity: 124,
    id: 1
  }

  const currentState = {
    1: {
      name: 'Test Drink One',
      drinkType: 'Test Type One',
      brewer: 'Test Brewery One',
      alcoholContent: 5.0,
      description: 'Test Description',
      quantity: 124,
      id: 1
    },
    2 : {
      name: 'Test Drink Two',
      drinkType: 'Test Type Two',
      brewer: 'Test Brewery Two',
      alcoholContent: 6.0,
      description: 'Test Description',
      quantity: 124,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(drinkListReducer({}, {type: null })).toEqual({});
  });

  test('Should successfully add new drink data to masterDrinkList', () => {
    const { name, drinkType, brewer, alcoholContent, description, quantity, id } = drinkData;
    action = {
      type: 'ADD_DRINK',
      name: name,
      drinkType: drinkType,
      brewer: brewer,
      alcoholContent: alcoholContent,
      description: description,
      quantity: quantity,
      id: id
    };
    expect(drinkListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        drinkType: drinkType,
        brewer: brewer,
        alcoholContent: alcoholContent,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a drink', () => {
    action = {
      type: 'DELETE_DRINK',
      id: 1
    };
    expect(drinkListReducer(currentState, action)).toEqual({
      2 : {
        name: 'Test Drink Two',
        drinkType: 'Test Type Two',
        brewer: 'Test Brewery Two',
        alcoholContent: 6.0,
        description: 'Test Description',
        quantity: 124,
        id: 2
      } 
    });
  });
});