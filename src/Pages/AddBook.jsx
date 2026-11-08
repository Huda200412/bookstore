import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const location = useLocation();

  const books = location.state?.books || [];
  const cart = location.state?.cart || [];

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedBooks = [...books, formData];

    navigate("/", {
      state: {
        books: updatedBooks,
        cart,
      },
    });

    setFormData({
      image: "",
      title: "",
      author: "",
      description: "",
      price: "",
    });
  };

  return (
    <div className="container mt-5">
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Book Image</label>

          <input
            type="text"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Title</label>

          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Author</label>

          <input
            type="text"
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>

          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
