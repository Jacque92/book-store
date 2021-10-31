import React from "react";
import { SearchBar } from "../features/searchBar/SearchBar";
import { Ranks } from "../components/Ranks";

export const Home = ({
  addToCartHandler,
  topBooks,
  handleSubmit,
  refContainer,
  handleSearch,
  searchInfo,
  handleBlur,
  selectHandler,
  isSelect,
}) => {
  return (
    <div>
      <div style={{ height: 100 }}></div>

      <SearchBar
        handleSubmit={handleSubmit}
        refContainer={refContainer}
        handleSearch={handleSearch}
        searchInfo={searchInfo}
        handleBlur={handleBlur}
        selectHandler={selectHandler}
        isSelect={isSelect}
      />

      <Ranks topBooks={topBooks} addToCartHandler={addToCartHandler} />
    </div>
  );
};
