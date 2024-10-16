import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route,Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;