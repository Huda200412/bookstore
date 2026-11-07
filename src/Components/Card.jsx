import Button from "./Button";

import Button from "./Button";

function Card({ book, onViewDetails, onAddToCart }) {

  return (

    <div className="card h-100 shadow-sm">

      <img
        src={book.image}
        className="card-img-top"
        alt={book.title}
        style={{ height: "250px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {book.title}
        </h5>

        <p className="card-text">
          {book.author}
        </p>

        <p className="text-muted">
          {book.category}
        </p>

        <h6 className="text-primary">
          ${book.price}
        </h6>

        <div className="d-flex gap-2">

          <Button
            text="View Details"
            className="btn-primary"
            onClick={() => onViewDetails(book)}
          />

          <Button
            text="Add to Cart"
            className="btn-success"
            onClick={() => onAddToCart(book)}
          />

        </div>

      </div>

    </div>

  );

}

export default Card;