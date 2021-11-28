/**
 * custom hook to fetch data
 * @param {*} url
 * @returns {isLoading:boolean,books:{}[],isError:boolean}
 */

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(
    () =>
      fetch(url)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
          }
        })
        .then((data) => {
          const books = [];
          const { items } = data;

          items.map((book) => {
            const { volumeInfo, saleInfo } = book;
            const title = volumeInfo.title;
            const author = volumeInfo.authors[0];
            const imageLink = volumeInfo.imageLinks.smallThumbnail;

            const price = 20;
            // const price = saleInfo.listPrice.amount || 20;
            books.push({
              [title]: { author: author, image: imageLink, price: price },
            });
          });

          setBooks(books);
          setIsLoading(false);
        })
        .catch((error) => console.log(error)),
    [url]
  );
  return { isLoading, books, isError };
};
