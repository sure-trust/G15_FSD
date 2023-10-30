// reducers/bookReducer.js
const initialState = {
    books: [],
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  