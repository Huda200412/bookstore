function Card({ book }) {

  return (

    <div className="card h-100 shadow-sm">

      <img
        src={book.image}
        className="card-img-top"
        alt={book.title}
        style={{ height: "250px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {book.title}
        </h5>

        <p className="card-text">
          {book.author}
        </p>

        <p className="text-muted">
          {book.category}
        </p>

        <h6 className="text-primary">
          ${book.price}
        </h6>

      </div>

    </div>

  );

}

export default Card;