export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'POPULERDATA':
      return action.payload;
    case 'FILTERHARGA':
      return action.payload;
    case 'UPDATE':
    case 'CLICK':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case 'DELETE':
      return posts.filter((post) => post._id !== action.payload);
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
};
