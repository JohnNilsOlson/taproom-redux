export default (state = {}, action) => {
  const { name, drinkType, brewer, alcoholContent, description, quantity, id } = action;
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
        id: id
      }
    });
  default:
    return state;
  }
};