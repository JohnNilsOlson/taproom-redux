import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import drinkListReducer from '../../reducers/drink-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterDrinkList: {},
      formVisible: false
    });
  });

  test('Check that intital state of drinkListReducer matches root reducer', () => {
    expect(store.getState().masterDrinkList).toEqual(drinkListReducer(undefined, { type: null }));
  });

  test('Check that intital state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of drinkListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_DRINK',
      name: 'Test Drink',
      drinkType: 'Test Type',
      brewery: 'Test Brewery',
      alcoholContent: 5.5,
      description: 'Test',
      quantity: 124,
      pintPrice: 4,
      pitcherPrice: 15,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterDrinkList).toEqual(drinkListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });
});