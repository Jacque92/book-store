import React from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../features/shoppingCart/shoppingCartSlice";
import { useNavigate } from "react-router-dom";

export const Book = (props) => {
  const { bookLists, dispatch } = props;

  const { rank } = useParams();
  const thisBook = bookLists.find((book) => book.rank === parseInt(rank));
  const { author, description, title, book_image, price } = thisBook;
  const history = useNavigate();
  const handleAddItem = (itemToAdd) => {
    dispatch(addItem(itemToAdd));
  };
  return (
    <div className="bookPage">
      <div className="singleBook">
        <button
          style={{
            fontSize: "18px",
            marginBottom: "2rem",
            border: "none",
            borderBottom: "1px solid black",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          {"<< "}Back
        </button>
        <div className="bookBrief">
          <div className="imageBox">
            <img
              alt="Book Thumbnail"
              src={book_image}
              style={{
                width: "100%",
              }}
            ></img>
          </div>

          <div className="textBox">
            <div>
              <h1>{title}</h1>

              <p>{author}</p>
            </div>
            <h3 className="priceTagLeft">AUD$ {price}</h3>
            <button
              style={{ marginLeft: 0 }}
              className="btn"
              onClick={() => handleAddItem(thisBook)}
              value={title}
            >
              Add To Cart
            </button>
            <p>{description}</p>
          </div>
        </div>
        <div style={{ height: "30vh", marginTop: 30 }}>
          ‘Lorem Ipsum’ are the first two words of a classic piece of dummy
          text. Such filler text is used when the actual text is not available
          yet or when creating a brand new layout. Because the text is in Latin,
          people won’t be distracted by it and can focus on evaluating the
          design itself. For many years, this text was available on adhesive
          sheets in different sizes and typefaces from LetraSet. Designers would
          cut the text out with a cutter and stick it on the page. Aldus
          included the ‘Lorem ipsum’ text in PageMaker and nowadays you even see
          it showing up on hundreds of web pages (try a Google search for ‘lorem
          ipsum’).
        </div>
      </div>
    </div>
  );
};
