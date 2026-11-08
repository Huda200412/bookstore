import { useLocation } from "react-router-dom";

function BookDetails() {

  const location = useLocation();
  const book = location.state;

  let content;

  if (book) {
    content = (
      <div className="card">

        <img
          src={book.image}
          className="card-img-top"
          alt={book.title}
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

      <h2 className="mb-4">Book Details</h2>

      {content}

    </div>
  );
}

export default BookDetails;