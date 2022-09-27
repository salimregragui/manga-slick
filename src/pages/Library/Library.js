import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import classes from "./Library.module.scss";

function Library() {
  const library = [
    {
      id: "A15784e",
      title: "One Piece",
      author: "Eiichiro Oda",
      link: "/",
      currentChapter: 147,
      totalChapters: 1061,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    },
    {
      id: "DR848R",
      title: "Fairy Tail",
      author: "Hiro Mashima",
      link: "/",
      currentChapter: 267,
      totalChapters: 467,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/FairyTail-Volume_1_Cover.jpg/220px-FairyTail-Volume_1_Cover.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "DR848R",
      title: "Fairy Tail",
      author: "Hiro Mashima",
      link: "/",
      currentChapter: 267,
      totalChapters: 467,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/FairyTail-Volume_1_Cover.jpg/220px-FairyTail-Volume_1_Cover.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "DR848R",
      title: "Fairy Tail",
      author: "Hiro Mashima",
      link: "/",
      currentChapter: 267,
      totalChapters: 467,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/FairyTail-Volume_1_Cover.jpg/220px-FairyTail-Volume_1_Cover.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "DR848R",
      title: "Fairy Tail",
      author: "Hiro Mashima",
      link: "/",
      currentChapter: 267,
      totalChapters: 467,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/FairyTail-Volume_1_Cover.jpg/220px-FairyTail-Volume_1_Cover.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "DR848R",
      title: "Fairy Tail",
      author: "Hiro Mashima",
      link: "/",
      currentChapter: 267,
      totalChapters: 467,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/FairyTail-Volume_1_Cover.jpg/220px-FairyTail-Volume_1_Cover.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
    {
      id: "fr8748",
      title: "Naruto",
      author: "Masachi Kichimoto",
      link: "/",
      currentChapter: 350,
      totalChapters: 980,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    },
  ];

  const { t } = useTranslation();

  return (
    <Layout title={t("screen-titles.library")}>
      <div className={classes.Library}>
        <div className={classes.LibraryManagementHeader}>hey</div>

        <div className={classes.LibraryBooks}>
          {library.map((book) => (
            <Link
              to={book.link}
              className={classes.LibraryBooksItem}
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
              {book.currentChapter && (
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
    </Layout>
  );
}

export default Library;
