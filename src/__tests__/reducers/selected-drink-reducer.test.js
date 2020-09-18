import selectedDrinkReducer from '../../reducers/selected-drink-reducer';

describe('selectedDrinkReducer', () => {

  test("Should return default state if no action is recognized", () => {
    expect(selectedDrinkReducer(null, { type: null })).toEqual(null);
  });
});