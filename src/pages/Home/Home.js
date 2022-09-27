import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import BooksCategory from "../../components/UI/BooksCategory/BooksCategory";
import classes from "./Home.module.scss";

function Home() {
    const {t} = useTranslation();
  const continueReadingBooks = [
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
  ];
  return (
    <Layout>
      <div className={classes.Home}>
        <BooksCategory title={t("titles.newChapters")} books={continueReadingBooks} />
        <BooksCategory title={t("titles.continueReading")} books={continueReadingBooks} withProgressbar />
        <BooksCategory title={t("titles.re-read")} books={continueReadingBooks} />
      </div>
    </Layout>
  );
}

export default Home;
