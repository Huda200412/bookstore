import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Books from "../Data/Books";
import Card from "../Components/Card";
import "./Home.css";
function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [books, setBooks] = useState(() => {
    if (location.state && location.state.books) {
      return location.state.books;
    } else {
      return Books;
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
      <div className="row g-4">
        {books.map((item, index) => {
          return (
           <div className="col-12 col-sm-6 col-lg-4 mb-2" key={index}>
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                author={item.author}
                item={item}
                books={books}
                cart={cart}
              />
            </div>
          );
        })}
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() =>
          navigate("/addbook", {
            state: { books, cart },
          })
        }
      >
        Add New Book
      </button>
    </div>
  );
}

export default Home;
