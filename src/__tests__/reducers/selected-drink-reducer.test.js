import selectedDrinkReducer from '../../reducers/selected-drink-reducer';

describe('selectedDrinkReducer', () => {

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

  test('Should return default state if no action is recognized', () => {
    expect(selectedDrinkReducer(null, { type: null })).toEqual(null);
  });

  test('Should return selected drink', () => {
    expect(selectedDrinkReducer(null, { type: 'SELECT_DRINK' })).toEqual(drinkData);
  });
});