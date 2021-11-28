//thunk
export const loadData = async (dispatch, getstate) => {
  let url =
    "https://api.nytimes.com/svc/books/v3/lists/2021-01-20/hardcover-fiction.json?api-key=4mJmXqbjumhYvFdfJKf7MFik03AfhnbG";

  let response = await fetch(url);
  let data = await response.json();
  const { results } = data;
  const { books } = results;

  books.map((book) => {
    const newPrice = (Math.floor(Math.random() * 3000) + 2000) / 100;
    return (book.price = newPrice);
  });

  return dispatch({ type: "bookLists/loadData", payload: books });
};

const allBooks = [];
export const bookListsReducer = (bookLists = allBooks, action) => {
  switch (action.type) {
    case "bookLists/loadData": {
      return action.payload;
    }
    default:
      return bookLists;
  }
};
