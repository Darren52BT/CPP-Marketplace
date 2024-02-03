import LoginPage from "./components/Login/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ItemPage from "./components/ItemPage/ItemPage";
import ItemCard from "./components/ItemCard/ItemCard";
import Gridview from "./components/Gridview/Gridview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUp/SignUpPage";
import ItemCarousel from "./components/ItemCarousel/ItemCarousel";
let prods = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <ProductCarousel products={prods} />
              <Gridview />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
            <NavBar/>
              <LoginPage />
            </>
          }
        />

        <Route path="signup" element={<SignUpPage/>}/>
        <Route
          path="/item"
          element={
            <>
               <NavBar />
               <ItemPage/>
            </>
          }
        />
        <Route
          path="*"
          element={<h1>Error 404 page not found, please return home</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
