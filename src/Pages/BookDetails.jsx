
import { useLocation, useNavigate } from "react-router-dom";

function BookDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state?.book;
  const books = location.state?.books || [];
  const cart = location.state?.cart || [];

  let content;

  if (book) {

    content = (
      <div className="card">

        <img
          src={book.image}
          className="card-img-top"
          alt={book.title}
          style={{ height: "300px", objectFit: "contain" }}
        />

        <div className="card-body">

          <h3>{book.title}</h3>

          <p>{book.description}</p>

          <h5>${book.price}</h5>

        </div>

      </div>
    );

  } else {

    content = <p>No Book Selected</p>;

  }

  return (
    <div className="container mt-5">

      <h2>Book Details</h2>

      {content}

      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/", {
          state: { books, cart }
        })}
      >
        Back to Home
      </button>

    </div>
  );
}

export default BookDetails;
