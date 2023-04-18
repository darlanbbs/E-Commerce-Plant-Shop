import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NavAllBar from "../components/NavBar/NavBar";
import ContactPage from "../pages/ContactPage/ContactPage";

function Router() {
  return (
    <BrowserRouter>
      <NavAllBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
