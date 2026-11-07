import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          BookStore
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/services">
            Services
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <Link className="nav-link" to="/add-book">
            Add Book
          </Link>

          <Link className="nav-link" to="/cart">
            Cart
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;