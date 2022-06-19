import { Route, Routes } from "react-router-dom";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import AllProducts from "./Pages/AllProducts";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { SlideData } from "./images/SildeData";

function App() {
  return (
    <div className="App">
      <Offers />
      <Navbar />
      <ImageSlider slides={SlideData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allproducts/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
