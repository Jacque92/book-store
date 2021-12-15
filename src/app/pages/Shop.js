import React from "react";
import { CategoryList } from "../features/categoryList/CategoryList";

export const Shop = (props) => {
  const { search, categoryLists, dispatch } = props;

  return (
    <div className="shop">
      <h1 className="pageTitle">All Books</h1>
      <CategoryList categoryLists={categoryLists} dispatch={dispatch} />
    </div>
  );
};
