
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Card({
  image,
  title,
  description,
  price,
  cart,
  setCart,
  books
}) {

  const navigate = useNavigate();

  const book = {
    image,
    title,
    description,
    price
  };

  return (
    <div className="card h-100">

      <img
        src={image}
        className="card-img-top"
        alt={title}
      />

      <div className="card-body">

        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>

        <h6>${price}</h6>

        <Button
          text="View Details"
          className="btn-primary"
          onClick={() =>
            navigate("/book-details", {
              state: { book, books, cart }
            })
          }
        />

        <Button
          text="Add to Cart"
          className="btn-success"
          onClick={() => {
            const updatedCart = [...cart, book];

            navigate("/cart", {
              state: {
                cart: updatedCart,
                books
              }
            });
          }}
        />

      </div>

    </div>
  );
}

export default Card;
