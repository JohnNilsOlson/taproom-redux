import drinkListReducer from '../../reducers/drink-list-reducer';

describe('drinkListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(drinkListReducer({}, {type: null })).toEqual({});
  });
});