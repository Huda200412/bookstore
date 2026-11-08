
function Services() {

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">

        <h1>Our Services</h1>

        <p className="text-muted">
          Explore the services available in our BookStore.
        </p>

      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">

            <div className="card-body">

              <h4>Buy Books</h4>

              <p>
                Browse our collection and find your favorite books.
              </p>

            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">

            <div className="card-body">

              <h4>Sell Books</h4>

              <p>
                Add your own books and share them with other readers.
              </p>

            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center p-3">

            <div className="card-body">

              <h4>Shopping Cart</h4>

              <p>
                Add books to your cart and manage your selections.
              </p>

            </div>
          </div>
        </div>

      </div>

    </div>
  );

}

export default Services;
