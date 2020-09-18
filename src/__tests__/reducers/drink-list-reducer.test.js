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
});