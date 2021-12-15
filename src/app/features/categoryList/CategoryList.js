import React from "react";
import { useState, useEffect } from "react";
import { loadData } from "../categoryList/categoryListSlice";
import { DisplayBook } from "../../components/DisplayBook";
import { addItem, removeItem } from "../shoppingCart/shoppingCartSlice";
import Button from "@mui/material/Button";

export const CategoryList = (props) => {
  const { categoryLists, dispatch } = props;
  const [pageNum, setPageNum] = useState(1);
  const [isActive, setIsActive] = useState({
    All: true,
    Fiction: false,
    "Non-fiction": false,
  });

  const getTotalPage = () => {
    const page = isActive.All ? 2 : 1;
    return page;
  };

  const totalPage = getTotalPage(categoryLists.length, 8);

  useEffect(() => loadData(dispatch), []);

  const handleCategory = (keyName) => {
    setPageNum(1);
    setIsActive({
      All: false,
      Fiction: false,
      "Non-fiction": false,
      [keyName]: true,
    });
  };

  const handlePrev = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
    }
    return;
  };

  const handleNext = () => {
    if (pageNum < getTotalPage()) {
      setPageNum((prev) => prev + 1);
    }
  };
  const handleAddItem = (itemToAdd) => {
    dispatch(addItem(itemToAdd));
  };
  const handleRemoveItem = (itemToRemove) => {
    dispatch(removeItem(itemToRemove));
  };

  return (
    <div class="category container">
      <ul
        className="categoryUl"
        style={{
          borderRight: "1px solid black",
        }}
      >
        {Object.keys(isActive).map((key) => {
          return (
            <li
              style={{
                borderRight: isActive[key] ? "5px solid black" : "none",
              }}
              onClick={() => handleCategory(key)}
            >
              <h3 className="catItem">{key}</h3>
            </li>
          );
        })}
        <li style={{ flexGrow: 1 }}></li>
      </ul>

      <div className="categoryBooks" style={{ width: "100%" }}>
        {categoryLists
          .filter((book) => {
            if (isActive.All) {
              return book;
            } else {
              return isActive[book.category];
            }
          })
          .map((book) => (
            <DisplayBook
              key={book.rank}
              bookinfo={book}
              dispatch={dispatch}
              handleAddItem={() => handleAddItem(book)}
              // handleRemoveItem={handleRemoveItem}
              handleRemoveItem={() => handleRemoveItem(Object.keys(book)[0])}
            />
          ))
          .slice((pageNum - 1) * 8, pageNum * 8)}
        <div class="turnPageBtn">
          <Button
            style={{
              color: "black",
              opacity: pageNum === 1 ? 0 : 1,
            }}
            onClick={handlePrev}
          >
            {"<< "}Prev
          </Button>

          <Button
            style={{
              color: "black",
              opacity: pageNum < getTotalPage() ? 1 : 0,
            }}
            onClick={handleNext}
          >
            Next{" >>"}
          </Button>
        </div>
      </div>
    </div>
  );
};
