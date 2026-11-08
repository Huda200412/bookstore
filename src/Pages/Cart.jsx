
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {

  const location = useLocation();
  const navigate = useNavigate();

  let initialCart = [];

  if (location.state && location.state.cart) {
    initialCart = location.state.cart;
  }

  const books = location.state?.books || [];

  const [cart, setCart] = useState(initialCart);

  const handleDelete = (indexToDelete) => {

    setCart((currentCart) =>
      currentCart.filter((item, index) =>
        index !== indexToDelete
      )
    );

  };

  let total = 0;

  cart.map((item, index) => {
    total = total + Number(item.price);
  });

  let content;

  if (cart.length === 0) {

    content = <p>Your cart is empty.</p>;

  } else {

    content = (
      <div className="row">

        {cart.map((item, index) => {

          return (
            <div className="col-md-4" key={index}>

              <div className="card mb-3">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />

                <div className="card-body">

                  <h5>{item.title}</h5>

                  <p>${item.price}</p>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          );

        })}

      </div>
    );

  }

  return (
    <div className="container mt-5">

      <h2 className="mb-4">My Cart</h2>

      {content}

      <h4 className="mt-4">
        Total Price: ${total}
      </h4>

      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/", {
          state: {
            books,
            cart
          }
        })}
      >
        Back to Home
      </button>

    </div>
  );
}

export default Cart;
