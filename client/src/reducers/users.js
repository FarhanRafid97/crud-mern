export default (users = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'ADD':
      return [...users, action.payload];
    default:
      return users;
  }
};
