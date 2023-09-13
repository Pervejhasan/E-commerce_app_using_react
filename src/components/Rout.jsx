import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";

const Rout = ({
  shop,
  Filter,
  allCategoryFilter,
  setCart,
  addToCart,
  cart,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allCategoryFilter={allCategoryFilter}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
    </div>
  );
};
Rout.propTypes = {
  shop: PropTypes.array,
  Filter: PropTypes.func,
  allCategoryFilter: PropTypes.func,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Rout;
