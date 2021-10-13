import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import { getBooks, logout } from "../services/api";
import Logo from "../assets/logo";
import Logout from "../assets/log-out.png";
import "../styles/pages/home.scss";
import Pagination from "../components/pagination";
import InfoModal from "../components/infoModal";

function Home() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(
    Number(window.localStorage.getItem("@ioasys/page")) || 1
  );
  const [totalPages, setTotalPages] = useState();
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const promise = [];
    setLoading(true);
    promise.push(getBooks({ page: page, amount: 12 }));
    Promise.all(promise).then((res) => {
      console.log(res[0].data.data);
      setBooks(res[0].data.data);
      setTotalPages(Math.ceil(res[0].data.totalPages));
      setLoading(false);
    });
  }, [page]);

  function handlePage(value) {
    setPage(value);
  }

  return (
    <div id="home-container" className={`blur-${open}`}>
      <div id="home-header">
        <div id="home-header-title">
          <Logo /> Books
        </div>
        <div id="home-header-logout">
          <div id="welcome">
            Bem vindo, {window.localStorage.getItem("@ioasys/userName")}!
          </div>
          <button type="button" onClick={logout}>
            <img src={Logout} alt="logout" />
          </button>
        </div>
      </div>
      <Fade in={!loading}>
        <div id="books-grid">
          {books?.map((book) => (
            <div
              key={book.id}
              className="book-box"
              onClick={() => {
                setSelectedBook(book);
                setOpen(true);
              }}
            >
              <img src={book.imageUrl} alt="livro" />
              <div className="book-info">
                <div className="book-info-top">
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join(", ")}</div>
                </div>
                <div className="book-info-bottom">
                  <div>{book.pageCount} páginas</div>
                  <div>Editora {book.publisher}</div>
                  <div>Publicado em {book.published}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <Pagination page={page} totalPages={totalPages} handlePage={handlePage} />
      <InfoModal open={open} handleClose={handleClose} book={selectedBook} />
    </div>
  );
}

export default Home;
