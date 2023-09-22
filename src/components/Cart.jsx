import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  //increment quantity of cart product
  const incrementQuantity = (product) => {
    const exist = cart.find((cartProduct) => {
      return cartProduct.id === product.id;
    });
    setCart(
      cart.map((cProduct) => {
        return cProduct.id === product.id
          ? { ...exist, quantity: exist.quantity + 1 }
          : cProduct;
      })
    );
  };
  //decrement quantity of cart product
  const decrementQuantity = (product) => {
    const exist = cart.find((cartProduct) => {
      return cartProduct.id === product.id;
    });
    setCart(
      cart.map((cProduct) => {
        return cProduct.id === product.id
          ? { ...exist, quantity: exist.quantity - 1 }
          : cProduct;
      })
    );
  };
  //remove cart product
  const removeProduct = (product) => {
    const exist = cart.find((rProduct) => {
      return rProduct.id === product.id;
    });
    if (exist.quantity > 0) {
      setCart(
        cart.filter((filterProduct) => {
          return filterProduct.id !== product.id;
        })
      );
    }
  };

  //Total Price
  const total = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="m-0 p-0 box-border font-sans">
      <div className="cart w-full p-5">
        <h3 className="text-3xl uppercase text-gray-900 font-medium">#Cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty-cart w-full mt-7 text-center">
              <h2 className="mb-3 text-base text-slate-900 uppercase tracking-wide">
                Your Shopping cart is empty
              </h2>
              <Link to={"/shop"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded ">
                  Shop Now
                </button>
              </Link>
            </div>
          </>
        )}
        <div className="container max-w-full p-4">
          {cart.map((product) => {
            return (
              <>
                <div className="box h-72 flex w-full border-2 rounded border-solid mt-6 border-gray-200">
                  <div className="img_box">
                    <img
                      className="w-20 h-20    rounded border-4 border-solid border-gray-300 mt-20 sm:mt-10 ms-3  sm:w-[200px] sm:h-[200px]"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="detail flex w-full mt-8 ms-3  justify-around">
                    <div className="info mt-6 ms-4">
                      <h4 className="uppercase text-sm sm:text-base text-slate-600 font-medium">
                        {product.category.toUpperCase()}
                      </h4>
                      <h3 className="mt-2 text-xs sm:text-lg text-slate-900 uppercase font-semibold ">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-lg font-medium text-slate-900  ">
                        Price: ${product.price}
                      </p>
                      <p className="text-xs sm:text-lg font-medium">
                        Total: ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="quantity mt-16 ms-4 sm:ms-7">
                      <button
                        onClick={() => incrementQuantity(product)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 sm:px-2 rounded"
                      >
                        +
                      </button>
                      <input
                        type="number"
                        className="w-7 sm:w-14 text-center border-2 border-solid mx-2 rounded border-gray-200 outline-none "
                        value={product.quantity}
                      />
                      <button
                        onClick={() => decrementQuantity(product)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 sm:px-2 rounded"
                      >
                        -
                      </button>
                    </div>
                    <div className="icon mt-[65px] ms-4 sm:ms-8">
                      <div
                        onClick={() => removeProduct(product)}
                        className="bg-red-500  hover:bg-red-700 p-1 me-2 sm:py-2 cursor-pointer sm:px-2 rounded"
                      >
                        <AiOutlineClose className=" text-white " />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom  text-center">
          {cart.length > 0 && (
            <>
              <div
                className={`Total  mx-auto ${
                  cart.length > 0 && "bg-red-500"
                }  text-center p-3 text-gray-100 font-semibold text-lg rounded  w-56`}
              >
                <h4>Total: ${total.toFixed(2)}</h4>
              </div>

              <button className="bg-orange-500 my-3 hover:bg-orange-700 text-white font-semibold py-1 px-4 rounded">
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
export default Cart;
