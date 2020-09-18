import selectDrinkReducer from '../../reducers/select-drink-reducer';

describe('selectDrinkReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(selectDrinkReducer(null, { type: null })).toEqual(null);
  });

  test('Should return a selected object', () => {
    expect(selectDrinkReducer(null, { type: 'SELECT_DRINK', id: 1 })).toEqual(1);
  });
});