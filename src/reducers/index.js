import formVisibleReducer from './form-visible-reducer';
import drinkListReducer from './drink-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  masterDrinkList: drinkListReducer
});

export default rootReducer;