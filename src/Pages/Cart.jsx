

import { useState } from "react";

function Cart() {

  const [cart, setCart] = useState([]);

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

    </div>
  );

}

export default Cart;
