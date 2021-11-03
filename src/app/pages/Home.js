import React from "react";
import { SearchBar } from "../features/searchBar/SearchBar";
import { BookLists } from "../features/booklists/BookLists";

export const Home = (
  // handleSubmit,
  // refContainer,
  // handleSearch,
  // searchInfo,
  // handleBlur,
  // selectHandler,
  // isSelect,
  props
) => {
  const { search, bookLists, dispatch } = props;

  return (
    <div>
      <div style={{ height: 100 }}></div>

      <SearchBar
        bookLists={bookLists}
        search={search}
        dispatch={dispatch}
        // handleSubmit={handleSubmit}
        // refContainer={refContainer}
        // handleSearch={handleSearch}
        // searchInfo={searchInfo}
        // handleBlur={handleBlur}
        // selectHandler={selectHandler}
        // isSelect={isSelect}
      />

      <BookLists bookLists={bookLists} dispatch={dispatch} />
    </div>
  );
};
