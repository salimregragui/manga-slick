import React from "react";
import classes from "./BooksCategory.module.scss";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

function BooksCategory({ books, title, withProgressbar }) {
  return (
    <div className={classes.BooksCategory}>
      <h1>{title}</h1>

      <div className={classes.BooksScroller}>
        {books.map((book) => (
          <Link
            to={book.link}
            className={classes.BooksScrollerBook}
            id={book.id}
          >
            <div
              className={classes.BookImage}
              style={{ backgroundImage: `url("${book.image}")` }}
            ></div>
            <div className={classes.BookInfo}>
              <h2>{book.title}</h2>
              <span>{book.author}</span>
            </div>
            {withProgressbar && (
              <ProgressBar
                percent={Math.floor(
                  (book.currentChapter / book.totalChapters) * 100
                )}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BooksCategory;
