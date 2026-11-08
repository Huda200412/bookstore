import books from "../data/Data";
import Card from "../Components/Card";

function Home() {

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
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Home;