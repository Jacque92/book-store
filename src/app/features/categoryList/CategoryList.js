import React from "react";
import { useState, useEffect } from "react";
import { loadData } from "../categoryList/categoryListSlice";
import { DisplayBook } from "../../components/DisplayBook";
import { addItem, removeItem } from "../shoppingCart/shoppingCartSlice";

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
      <ul className="categoryUl">
        {Object.keys(isActive).map((key) => {
          return (
            <li
              style={{
                backgroundColor: isActive[key]
                  ? "rgb(207, 216, 208)"
                  : "rgb(237, 238, 238)",
                border: isActive[key]
                  ? "none"
                  : "0.5px solid rgb(207, 216, 208)",
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
          <button
            style={{ opacity: pageNum === 1 ? 0 : 1 }}
            onClick={handlePrev}
          >
            {"<< "}Prev
          </button>

          <button
            style={{ opacity: pageNum < getTotalPage() ? 1 : 0 }}
            onClick={handleNext}
          >
            Next{" >>"}
          </button>
        </div>
      </div>
    </div>
  );
};
