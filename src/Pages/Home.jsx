
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import booksData from "../data/Data";
import Card from "../Components/Card";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [books, setBooks] = useState(() => {
    if (location.state && location.state.books) {
      return location.state.books;
    } else {
      return booksData;
    }
  });

  const [cart, setCart] = useState(() => {
    if (location.state && location.state.cart) {
      return location.state.cart;
    } else {
      return [];
    }
  });

  return (
    <div className="container">

      <div className="row">

        {books.map((item, index) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={index}
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                cart={cart}
                setCart={setCart}
                books={books}
              />
            </div>
          );
        })}

      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/addbook", {
          state: { books, cart }
        })}
      >
        Add New Book
      </button>

    </div>
  );
}

export default Home;
