//thunk

export const loadData = async (dispatch) => {
  const fetchUrl1 =
    "https://api.nytimes.com/svc/books/v3/lists/2020-01-20/hardcover-fiction.json?api-key=4mJmXqbjumhYvFdfJKf7MFik03AfhnbG";
  let response = await fetch(fetchUrl1);
  let data = await response.json();
  let fictionItems = data.results.books;

  fictionItems.map((book) => {});

  const fetchUrl2 =
    "https://api.nytimes.com/svc/books/v3/lists/2020-01-20/hardcover-nonfiction.json?api-key=4mJmXqbjumhYvFdfJKf7MFik03AfhnbG";
  response = await fetch(fetchUrl2);
  data = await response.json();
  let nonFictionItems = data.results.books;

  fictionItems.map((book) => {
    let newPrice = (Math.floor(Math.random() * 3000) + 2000) / 100;
    return (book.price = newPrice), (book.category = "Fiction");
  });

  nonFictionItems.map((book) => {
    let newPrice = (Math.floor(Math.random() * 3000) + 2000) / 100;
    return (book.price = newPrice), (book.category = "Non-fiction");
  });
  const books = [...fictionItems, ...nonFictionItems];
  return dispatch({ type: "categoryLists/loadData", payload: books });
};

const allBooks = [];
export const categoryListsReducer = (categoryLists = allBooks, action) => {
  switch (action.type) {
    case "categoryLists/loadData": {
      return action.payload;
    }

    default:
      return categoryLists;
  }
};
