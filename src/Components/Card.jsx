
import { useNavigate } from "react-router-dom";

function Card({ image, title, description, price, author, item, books, cart }) {

  const navigate = useNavigate();

  return (

    <div className="card h-100 shadow-sm border-0">

      <div className="text-center p-3 bg-light">

        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            height: "230px",
            objectFit: "contain"
          }}
        />

      </div>

      <div className="card-body d-flex flex-column">

        <h5 className="card-title fw-bold">
          {title}
        </h5>

        <p className="text-muted small">
          By {author}
        </p>

        <p className="card-text text-secondary">
          {description}
        </p>

        <h5 className="text-primary fw-bold mt-auto">
          ${Number(price).toFixed(2)}
        </h5>

        <div className="d-flex gap-2 mt-3">

          <button
            className="btn btn-outline-primary btn-sm flex-fill"
            onClick={() => navigate("/book-details", {
              state: {
                book: item,
                books: books,
                cart: cart
              }
            })}
          >
            View Details
          </button>

          <button
            className="btn btn-primary btn-sm flex-fill"
            onClick={() => navigate("/cart", {
              state: {
                books: books,
                cart: [...cart, item]
              }
            })}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  );
}

export default Card;
