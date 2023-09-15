import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai";
const Shop = ({ shop, Filter, allCategoryFilter, addToCart }) => {
  //toggle product details

  const [showDetails, setShowDetails] = useState(false);
  //detail page data
  const [detail, setDetail] = useState([]);

  const detailPage = (product) => {
    const detailData = [{ product }];
    const productDetail = detailData[0]["product"];
    setDetail(productDetail);
    setShowDetails(true);
  };

  //close details
  const closeDetails = () => {
    setShowDetails(false);
  };
  return (
    <div className="m-0 p-0  font-sans box-border  ">
      {/* ========================================== */}
      {showDetails ? (
        <>
          <div className="product-detail w-[95%] h-[350px]   sm:w-[900px] sm:h-[600px] z-50 fixed shadow-2xl top-12 sm:top-12 bg-gray-100 border-4 border-solid border-gray-300 rounded-lg left-[2%] sm:left-[25%]">
            <button
              onClick={closeDetails}
              className=" float-right me-5 mt-5 bg-red-500 text-white hover:bg-red-700 py-2 cursor-pointer px-2 rounded"
            >
              <AiOutlineClose />
            </button>

            <div className="containers w-full flex ">
              <div className="img-box p-2  mt-8 sm:mt-20 ms-5 ">
                <img
                  className=" h-[120px] w-[200px] rounded  border-4 border-solid border-zinc-300   sm:h-[270px] sm:w-[270px] "
                  src={detail.image}
                  alt=""
                />
              </div>
              <div className="info mt-5 sm:mt-32 ms-10 ">
                <h4 className="text-gray-500 text-base font-bold tracking-wide ">
                  {detail.category.toUpperCase()}
                </h4>
                <h2 className="mt-1 font-bold text-lg uppercase text-slate-900 ">
                  {detail.name}
                </h2>
                <p className="mt-1 text-gray-400 text-xs tracking-wider font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, pariatur!
                </p>
                <h3 className="mt-2 text-lg font-semibold mb-2 text-red-500">
                  $ {detail.price}
                </h3>
                <button
                  onClick={() => addToCart(detail)}
                  className="bg-red-500 text-white hover:bg-red-700 py-1 cursor-pointer font-semibold px-2 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* ========================================== */}
          </div>
        </>
      ) : null}

      <div className="shop w-full p-5">
        <h2 className="ms-1 uppercase tracking-wider text-2xl font-bold text-slate-950">
          # shop
        </h2>
        <p className="my-2 ms-1  text-gray-500 text-sm font-medium">
          Home . Shop
        </p>

        <div className="containers max-w-full flex   flex-col sm:flex-row">
          <div className="left-box w-full ms-[16%] sm:ms-0 sm:w-1/4">
            <div className="category w-72  border-4 rounded-sm border-slate-200 border-solid ">
              <div className="header max-w-full p-3 bg-[#f1ebeb]">
                <h2 className="uppercase tracking-wider text-1xl text-center font-bold text-slate-950">
                  All Category
                </h2>
              </div>
              <div className="box mt-2 py-4 px-3 w-full">
                <ul className="max-w-full pb-2 ms-3 uppercase ">
                  <li
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                    onClick={() => allCategoryFilter()}
                  >
                    # All
                  </li>

                  <li
                    onClick={() => Filter("tv")}
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                  >
                    # tv
                  </li>
                  <li
                    onClick={() => Filter("laptop")}
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                  >
                    # laptop
                  </li>
                  <li
                    onClick={() => Filter("watch")}
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                  >
                    # watch
                  </li>
                  <li
                    onClick={() => Filter("electronics")}
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                  >
                    # electronics
                  </li>
                  <li
                    onClick={() => Filter("headphone")}
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                  >
                    # headphone
                  </li>
                  <li
                    onClick={() => Filter("mobile")}
                    className="font-medium text-slate-500 hover:text-red-700 transition-all duration-300 ease-in-out ms-1 hover:ms-2 cursor-pointer"
                  >
                    # phone
                  </li>
                </ul>
              </div>
            </div>

            <div className="banner mt-3 w-72 z-0">
              <div className="img-box relative border-2 border-gray-300 rounded-sm ">
                <img className="" src="../../public/image/macbook.png" alt="" />
                <button className=" absolute bottom-[90px]  ms-7 bg-red-400 text-sm hover:bg-red-500 text-white  py-1 px-2 rounded">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div className="right-box w-full   sm:w-[73%]">
            <div className="banner max-w-full">
              <div className="img-box hidden sm:block">
                <img
                  className="w-full object-cover"
                  src="../../public/image/ihone.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="max-w-full my-5">
              <h2 className="uppercase text-center sm:text-left mt-3 mb-3 text-gray-950 tracking-wide font-semibold text-2xl ">
                Shop Product
              </h2>
              <div className=" w-full flex flex-wrap justify-center gap-5 ">
                {/* fetch product */}
                {shop.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className=" group box overflow-hidden   h-[340px] w-72 p-3 rounded-md border border-x-2 border-y-2 me-2 shadow-md bg-slate-50 border-gray-200 ">
                        <div className="flex p-3 ">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-[80%] h-full rounded-md me-2"
                          />

                          <div className="icon flex flex-col  ms-[65px]  group-hover:ms-0  mt-3 transition-all duration-500 ease-in-out">
                            <div
                              onClick={() => detailPage(product)}
                              className=" p-3 mt-3  cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in-out  bg-gray-400 border-2 border-solid border-gray-200 rounded  shadow-md z-10 "
                            >
                              <AiFillEye className="text-gray-200  " />
                            </div>
                            <div className="  p-3 mt-3 rounded cursor-pointer hover:bg-red-500  transition-all duration-300 ease-in-out bg-gray-400 border-2 border-solid  border-gray-200 shadow-md z-10">
                              <AiFillHeart className="text-gray-200     " />
                            </div>
                          </div>
                        </div>

                        <div className="ms-3 p-3 text-center">
                          <h3 className="uppercase text-xs  text-gray-500 font-bold">
                            {product.name}
                          </h3>
                          <p className=" mt-1 font-semibold text-sm tracking-wide text-gray-600">
                            ${product.price}
                          </p>
                          <button
                            onClick={() => addToCart(product)}
                            className="w-full  bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 mt-3 rounded transition-all duration-300"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" flex justify-center mt-5">
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 mt-3 rounded transition-all duration-300">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Shop.propTypes = {
  shop: PropTypes.array,
  Filter: PropTypes.func,
  allCategoryFilter: PropTypes.func,
  addToCart: PropTypes.func,
};

export default Shop;
