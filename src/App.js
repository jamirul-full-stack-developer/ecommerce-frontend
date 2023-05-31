import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/MainLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";
import About from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<ProductDetail />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
