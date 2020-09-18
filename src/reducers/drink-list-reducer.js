export default (state = {}, action) => {
  const { name, drinkType, brewer, alcoholContent, description, quantity, pintPrice, pitcherPrice, id } = action;
  switch (action.type) {
  case 'ADD_DRINK':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        drinkType: drinkType,
        brewer: brewer,
        alcoholContent: alcoholContent,
        description: description,
        quantity: quantity,
        pintPrice: pintPrice,
        pitcherPrice: pitcherPrice,
        id: id
      }
    });
  case 'DELETE_DRINK':
    const deleteState = { ...state };
    delete deleteState[id];
    return deleteState;
  default:
    return state;
  }
};