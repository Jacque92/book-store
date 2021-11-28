export const showSearchResults = (results) => {
  return { type: "searchBar/showSearchResults", payload: results };
};

export const finalSearchResults = (results) => {
  return { type: "searchBar/finalSearchResults", payload: results };
};

export const setSearchTerm = (term) => {
  return { type: "searchBar/setSearchTerm", payload: term };
};

const initialResult = { searchTerm: "", preSearch: [], searchResults: [] };
export const searchBarReducer = (result = initialResult, action) => {
  switch (action.type) {
    case "searchBar/setSearchTerm": {
      return { ...result, searchTerm: action.payload };
    }
    case "searchBar/showSearchResults": {
      return { ...result, preSearch: action.payload };
    }
    case "searchBar/finalSearchResults": {
      return { searchTerm: "", preSearch: [], searchResults: action.payload };
    }
    default:
      return initialResult;
  }
};
