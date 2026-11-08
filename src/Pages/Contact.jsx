
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Your message has been submitted!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-center">Contact Us</h2>

      <div className="row justify-content-center">

        <div className="col-md-7">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label">Name</label>

              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">Message</label>

              <textarea
                className="form-control"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );

}

export default Contact;
