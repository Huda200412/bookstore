

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import AddBook from "./Pages/AddBook";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Cart from "./Pages/Cart";
import BookDetails from "./Pages/BookDetails";
import Footer from "./Components/Footer";

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/addbook" element={<AddBook />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/book-details" element={<BookDetails />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );

}

export default App;
