import React from "react";
import banner from "../../images/banner.png";
import { SearchBar } from "../features/searchBar/SearchBar";

export const Banner = (props) => {
  const { bookLists, search, dispatch } = props;
  return (
    <div className="banner">
      <div className="bannerText">
        <h1 className="display">Buy your book for the best price</h1>
        <SearchBar bookLists={bookLists} search={search} dispatch={dispatch} />
      </div>
    </div>
  );
};
