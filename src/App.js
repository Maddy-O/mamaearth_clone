import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import AllProducts from "./Pages/AllProducts";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import PaymentPage from "./Pages/PaymentPage";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Offers />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allproducts/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
