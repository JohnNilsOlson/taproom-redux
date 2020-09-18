export default (state = null, action) => {
  const { id } = action
  switch (action.type) {
  case 'SELECT_DRINK':
    return id;
  default:
    return state;
  }
};