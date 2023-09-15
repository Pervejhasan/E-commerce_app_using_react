import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import HomeProduct from "./components/HomeProduct.jsx";
import Nav from "./components/Nav.jsx";
import Rout from "./components/Rout.jsx";
function App() {
  //Add to cart
  const [cart, setCart] = useState([]);
  //shop page product
  const [shop, setShop] = useState(HomeProduct);
  // shop search filter
  const [search, setSearch] = useState("");
  //shop category filter
  const Filter = (category) => {
    const categoryFilter = HomeProduct.filter((product) => {
      return product.category === category;
    });
    setShop(categoryFilter);
  };

  const allCategoryFilter = () => {
    setShop(HomeProduct);
  };

  // shop search filter
  const searchLength = (search || []).length === 0;

  const searchProduct = () => {
    if (searchLength) {
      alert("Please Search Something");
      setShop(HomeProduct);
    } else {
      const searchFilter = HomeProduct.filter((product) => {
        return product.category === search;
      });
      setShop(searchFilter);
    }
    setSearch("");
  };

  // Add to cart

  const addToCart = (product) => {
    const exist = cart.find((cartProduct) => {
      return product.id === cartProduct.id;
    });
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert("Added to cart");
    }
  };
  // console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <Rout
          cart={cart}
          shop={shop}
          Filter={Filter}
          allCategoryFilter={allCategoryFilter}
          addToCart={addToCart}
          setCart={setCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
