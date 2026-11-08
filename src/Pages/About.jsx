

function About() {

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">

        <h1>About Our BookStore</h1>

        <p className="text-muted">
          Discover our story and our love for books.
        </p>

      </div>

      <div className="row align-items-center">

        <div className="col-md-6">

          <h2>Who We Are</h2>

          <p>
            Our BookStore is an online platform where readers
            can discover different books and explore new stories.
          </p>

          <p>
            We aim to make buying and selling books simple
            and enjoyable for everyone.
          </p>

        </div>

        <div className="col-md-6">

          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            className="img-fluid rounded"
            alt="BookStore Library"
          />

        </div>

      </div>

    </div>
  );

}

export default About;
