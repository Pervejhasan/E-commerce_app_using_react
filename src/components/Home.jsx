import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import "../index.css";

import HomeProduct from "./HomeProduct";
const Home = ({ addToCart }) => {
  /** Trending Product */
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
  /** Product Category */
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  /* ====== Filter of trending product ======*/
  const filterCate = (productType) => {
    const filterProduct = HomeProduct.filter((product) => {
      return product.type === productType;
    });
    setTrendingProduct(filterProduct);
  };
  /**    All Trending Product    */
  const allTrendingProduct = () => {
    setTrendingProduct(HomeProduct);
  };

  // Product Type
  useEffect(() => {
    productCategory();
  }, []);

  const productCategory = () => {
    //new product
    const newCategory = HomeProduct.filter((product) => {
      return product.type === "new";
    });
    setNewProduct(newCategory);

    //featured product

    const featuredCategory = HomeProduct.filter((product) => {
      return product.type === "featured";
    });
    setFeaturedProduct(featuredCategory);

    //top product

    const topCategory = HomeProduct.filter((product) => {
      return product.type === "top";
    });
    setTopProduct(topCategory);
  };

  return (
    <div className="m-0 p-0  font-sans box-border ">
      <div className="w-full relative h-[375px]">
        <div
          className="max-w-[100%] h-[400px]  lg:h-[376px] absolute inset-0   bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: 'url("../../public/image/banner-4.png")' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold">Silver Aluminum</h3>
            <h2 className="text-5xl font-semibold my-1 text-gray-100">
              Apple Watch
            </h2>
            <p className="text-sm mb-6 mt-3 font-semibold text-gray-100">
              30% off at your first order
            </p>
            <Link
              to="/shop"
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="py-5 px-7 w-full">
        <div className=" w-full flex justify-center  gap-5">
          <div className=" w-[70%] ">
            <div className="flex p-3  px-5 rounded-sm  max-w-full bg-slate-200  justify-between items-center ">
              <div className="heading ">
                <h2
                  onClick={allTrendingProduct}
                  className="text-base text-slate-950 font-semibold cursor-pointer  hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                  Trending Product
                </h2>
              </div>
              <div className="flex">
                <h3
                  onClick={() => filterCate("new")}
                  className="me-3 text-slate-950 text-sm font-semibold cursor-pointer  hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                  New
                </h3>
                <h3
                  onClick={() => filterCate("featured")}
                  className="me-3 text-slate-950 text-sm font-semibold cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                  Featured
                </h3>
                <h3
                  onClick={() => filterCate("top")}
                  className="me-3 text-slate-950 text-sm font-semibold cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                  Top Selling
                </h3>
              </div>
            </div>

            <div className="max-w-full my-5">
              <div className=" w-full flex flex-wrap justify-center gap-5 ">
                {/* fetch product */}
                {trendingProduct.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className=" group box overflow-hidden  h-[305px] w-56 p-3 rounded-md border border-x-2 border-y-2 me-2 shadow-md bg-slate-50 border-gray-200 ">
                        <div className="flex p-3 ">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-[80%] h-40 rounded-md me-2"
                          />
                          <div className="icon flex flex-col  ms-14 group-hover:ms-0  mt-3 transition-all duration-500 ease-in-out">
                            <div className=" p-3 mt-3 rounded-sm bg-gray-400 cursor-pointer  hover:bg-red-500 transition-all duration-300 ease-in-out shadow-md z-10 ">
                              <AiFillEye className="text-gray-200  " />
                            </div>
                            <div className="  p-3 mt-3 rounded-sm bg-gray-400  cursor-pointer  hover:bg-red-500 transition-all duration-300 ease-in-out shadow-md z-10">
                              <AiFillHeart className="text-gray-200    " />
                            </div>
                          </div>
                        </div>

                        <div className="ms-3 p-3">
                          <h3 className="uppercase text-xs  text-gray-500 font-bold">
                            {product.name}
                          </h3>
                          <p className="text-slate-500 mt-1 font-semibold text-sm tracking-wide">
                            ${product.price}
                          </p>
                          <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 mt-3 rounded transition-all duration-300"
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
          <div className="right-box  w-[25%]">
            <div className="containers max-w-full">
              <div className="testimonial w-full   border-gray-100 rounded-sm border-solid border-4">
                <div className="head p-3 w-full bg-slate-100">
                  <h3 className="text-center font-semibold text-slate-900 text-base ">
                    Our Testimonial
                  </h3>
                </div>

                <div className="detail">
                  <div className="img-box">
                    <img
                      className=""
                      src="../../public/image/testimonial.jpg"
                      alt="testimonial"
                    />
                  </div>

                  <div className="info text-center p-2">
                    <h3 className="text-sm text-slate-900 font-bold mt-3">
                      Amelia Jeffer
                    </h3>
                    <h4 className="text-xs my-1 text-red-500 font-semibold ">
                      Web Designer
                    </h4>
                    <p className="text-xs my-1">
                      Web designers create visually appealing websites using
                      design principles and technologies...
                    </p>
                  </div>
                </div>
              </div>

              <div className="newsletter bg-zinc-300 border-gray-100 rounded-sm border-solid border-4 text-center mt-3 p-4">
                <div className="head p-1 w-full ">
                  <h3 className=" font-semibold text-slate-900 text-lg text-base ">
                    NewsLetter
                  </h3>
                </div>

                <div className="form">
                  <p className="text-zinc-500 mb-2">Join Our mailing List</p>
                  <input
                    type="email"
                    placeholder="E-mail"
                    id=""
                    autoComplete="off"
                    className="border w-full border-gray-300 rounded-sm py-1 px-2 focus:outline-none focus:border-red-500"
                  />
                  <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-sm my-2">
                    Subscribe
                  </button>
                  <div className="icon-box mt-4 w-full flex justify-center gap-2">
                    <div className="group icon rounded-full cursor-pointer shadow-md bg-red-500 p-2 hover:bg-slate-100 transition-all duration-500 ease-in-out">
                      <BiLogoFacebook className="text-slate-100  group-hover:text-red-500 " />
                    </div>
                    <div className="icon group icon rounded-full cursor-pointer shadow-md bg-red-500 p-2 hover:bg-slate-100 transition-all duration-500 ease-in-out">
                      <BiLogoTwitter className="text-slate-100  group-hover:text-red-500 " />
                    </div>
                    <div className="icon group icon rounded-full cursor-pointer shadow-md bg-red-500 p-2 hover:bg-slate-100 transition-all duration-500 ease-in-out">
                      <BiLogoInstagram className="text-slate-100  group-hover:text-red-500 " />
                    </div>
                    <div className="icon group icon rounded-full cursor-pointer shadow-md bg-red-500 p-2 hover:bg-slate-100 transition-all duration-500 ease-in-out">
                      <BiLogoYoutube className="text-slate-100  group-hover:text-red-500 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banners w-full ">
          <div className="containers max-w-full flex gap-2 ">
            <div className="left-box w-[30%]">
              <div className="box">
                <img
                  className="w-full"
                  src="../../public/image/multi-banner-1.jpg"
                  alt=""
                />
              </div>
              <div className="box  mt-2">
                <img src="../../public//image/multi-banner-8.jpg" alt="" />
              </div>
            </div>

            <div className="right-box w-3/4">
              <div className="top max-w-full  flex  justify-between">
                <img
                  className="bg-cover bg-center  w-2/3"
                  src="../../public//image/multi-banner-6.jpg"
                  alt=""
                />
                <img
                  className=" w-[32%] bg-cover bg-center"
                  src="../../public/image/multi-banner-7.jpg"
                  alt=""
                />
              </div>
              <div className="bottom max-w-full mt-2">
                <img
                  className="w-full sm:h-44 lg:h-[324px] object-fit"
                  src="../../public/image/multi-banner-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="product-type w-full p-3 mt-8">
          <div className="container flex w-full justify-evenly">
            {/* new product */}
            <div className="box w-96 relative h-[500px] border-solid border-4 rounded-sm border-gray-100  scrollbar-hide   overflow-y-scroll">
              <div className="header sticky top-0 left-0  p-3 w-full h-12 bg-slate-100">
                <h3 className="text-center  text-base uppercase font-bold ">
                  New Product
                </h3>
              </div>
              {newProduct.map((product) => {
                return (
                  <div
                    className="productBox h-28  flex items-center justify-evenly w-full p-2 border-solid border-b-2 border-gray-300"
                    key={product.id}
                  >
                    <div className="imgBox ">
                      <img
                        className="w-24 h-20 rounded-sm"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="detail ms-3 ">
                      <h3 className="text-sm text-gray-600 uppercase font-semibold tracking-wide">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-red-500 font-semibold text-sm ">
                        $ {product.price}
                      </p>
                      <div className="icon mt-2 flex">
                        <button className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500  p-2 ms-2 hover:text-slate-950 hover:bg-zinc-400 transition-all duration-300 ease-in-out">
                          <AiFillEye />
                        </button>
                        <button className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500   p-2 ms-2  hover:text-slate-950 hover:bg-zinc-400  transition-all duration-300 ease-in-out">
                          <AiFillHeart />
                        </button>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500   p-2 ms-2  hover:text-slate-950 hover:bg-zinc-400  transition-all duration-300 ease-in-out"
                        >
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* featured product */}

            <div className="box w-96 relative h-[500px] border-solid border-4 rounded-sm border-gray-100  scrollbar-hide overflow-y-scroll">
              <div className="header sticky top-0 left-0  p-3 w-full h-12 bg-slate-100">
                <h3 className="text-center  text-base uppercase font-bold ">
                  Featured Product
                </h3>
              </div>
              {featuredProduct.map((product) => {
                return (
                  <div
                    className="productBox h-28  flex items-center justify-evenly w-full p-2 border-solid border-b-2 border-gray-300"
                    key={product.id}
                  >
                    <div className="imgBox ">
                      <img
                        className="w-24 h-20 rounded-sm"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="detail ms-5 ">
                      <h3 className="text-sm text-gray-600 uppercase font-semibold tracking-wide">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-red-500 font-semibold text-sm ">
                        $ {product.price}
                      </p>
                      <div className="icon mt-2 flex">
                        <button className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500  p-2 ms-2 hover:text-slate-950 hover:bg-zinc-400 transition-all duration-300 ease-in-out">
                          <AiFillEye />
                        </button>
                        <button className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500   p-2 ms-2  hover:text-slate-950 hover:bg-zinc-400  transition-all duration-300 ease-in-out">
                          <AiFillHeart />
                        </button>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500   p-2 ms-2  hover:text-slate-950 hover:bg-zinc-400  transition-all duration-300 ease-in-out"
                        >
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* top product */}
            <div className="box w-96 relative h-[500px] border-solid border-4 rounded-sm border-gray-100  scrollbar-hide  overflow-y-scroll">
              <div className="header sticky top-0 left-0  p-3 w-full h-12 bg-slate-100">
                <h3 className="text-center  text-base uppercase font-bold ">
                  Top Product
                </h3>
              </div>
              {topProduct.map((product) => {
                return (
                  <div
                    className="productBox h-28  flex items-center justify-evenly w-full p-2 border-solid border-b-2 border-gray-300"
                    key={product.id}
                  >
                    <div className="imgBox ">
                      <img
                        className="w-24 h-20 rounded-sm"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="detail ms-5 ">
                      <h3 className="text-sm text-gray-600 uppercase font-semibold tracking-wide">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-red-500 font-semibold text-sm ">
                        $ {product.price}
                      </p>
                      <div className="icon mt-2 flex">
                        <button className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500  p-2 ms-2 hover:text-slate-950 hover:bg-zinc-400 transition-all duration-300 ease-in-out">
                          <AiFillEye />
                        </button>
                        <button className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500   p-2 ms-2  hover:text-slate-950 hover:bg-zinc-400  transition-all duration-300 ease-in-out">
                          <AiFillHeart />
                        </button>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-inherit outline-none border-2 border-solid border-gray-300 rounded-full text-zinc-500   p-2 ms-2  hover:text-slate-950 hover:bg-zinc-400  transition-all duration-300 ease-in-out"
                        >
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Home.propTypes = {
  addToCart: PropTypes.func,
};
export default Home;
