import "../styles/components/pagination.scss";
import Arrow from "../assets/arrow";
import PropTypes from "prop-types";

function Pagination(props) {
  return (
    <div id="pagination-container">
      <div id="page-count">
        Página <strong>{props.page}</strong> de{" "}
        <strong>{props.totalPages}</strong>
      </div>
      <div id="pagination-buttons">
        <button
          id="reverse"
          disabled={props.page === 1}
          onClick={() => {
            props.handlePage(props.page - 1);
            window.localStorage.setItem("@ioasys/page", props.page - 1);
          }}
        >
          <Arrow />
        </button>
        <button
          disabled={props.page === props.totalPages}
          onClick={() => {
            props.handlePage(props.page + 1);
            window.localStorage.setItem("@ioasys/page", props.page + 1);
          }}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  handlePage: PropTypes.func,
};

export default Pagination;
