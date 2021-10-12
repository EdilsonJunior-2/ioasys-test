import React from "react";
import { Modal, Fade } from "@mui/material";
import Quotes from "../assets/quotes";
import X from "../assets/x.png";
import "../styles/components/infoModal.scss";

function InfoModal(props) {
  return (
    <Modal open={props.open}>
      <Fade in={props.open}>
        <div id="modal-container">
          {" "}
          <button
            id="close-button"
            type="button"
            onClick={() => props.handleClose()}
          >
            <img src={X} alt="x" />
          </button>
          <div id="modal-book">
            <div id="modal-book-image">
              <img src={props.book?.imageUrl} alt="capa" />
            </div>
            <div id="modal-book-texts">
              <div id="modal-book-title">{props.book?.title}</div>
              <div id="modal-book-authors">
                {props.book?.authors.join(", ")}
              </div>
              <div id="modal-book-infos">
                INFORMAÇÕES
                <div className="modal-book-info">
                  <div className="left">Páginas</div>
                  <div className="right">{props.book?.pageCount}</div>
                </div>
                <div className="modal-book-info">
                  <div className="left">Editora</div>
                  <div className="right">{props.book?.publisher}</div>
                </div>
                <div className="modal-book-info">
                  <div className="left">Publicação</div>
                  <div className="right">{props.book?.published}</div>
                </div>
                <div className="modal-book-info">
                  <div className="left">Idioma</div>
                  <div className="right">{props.book?.language}</div>
                </div>
                <div className="modal-book-info">
                  <div className="left">Título Original</div>
                  <div className="right">{props.book?.title}</div>
                </div>
                <div className="modal-book-info">
                  <div className="left">ISBN-10</div>
                  <div className="right">{props.book?.isbn10}</div>
                </div>
                <div className="modal-book-info">
                  <div className="left">ISBN-13</div>
                  <div className="right">{props.book?.isbn13}</div>
                </div>
              </div>
              <div id="modal-book-description-title">RESENHA DA EDITORA</div>
              <div id="modal-book-description">
                <Quotes />
                {props.book?.description}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default InfoModal;
