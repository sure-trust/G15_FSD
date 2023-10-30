// actions/bookActions.js
export const uploadBook = (book) => {
    return {
      type: 'UPLOAD_BOOK',
      payload: book,
    };
  };
  