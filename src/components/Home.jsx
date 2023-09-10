import { useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";
const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
  return (
    <div className="m-0 p-0  font-serif box-border bg-slate-200">
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
            <p className="text-sm mb-6 font-semibold text-gray-100">
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
        <div className=" w-full flex">
          <div className=" w-9/12 ">
            <div className="flex py-3 px-5 rounded-sm  max-w-full bg-slate-50 justify-between ">
              <div className="heading">
                <h2 className="text-base text-slate-950">Trending Product</h2>
              </div>
              <div className="flex">
                <h3 className="me-3 text-slate-950 text-sm font-semibold cursor-pointer  hover:text-red-500 transition-all duration-300 ease-in-out">
                  New
                </h3>
                <h3 className="me-3 text-slate-950 text-sm font-semibold cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                  Featured
                </h3>
                <h3 className="me-3 text-slate-950 text-sm font-semibold cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                  Top Selling
                </h3>
              </div>
            </div>

            <div className="  max-w-full my-5">
              <div className=" w-full flex flex-wrap justify-center gap-5">
                {trendingProduct.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className="group box overflow-hidden  h-72 w-56 p-3 rounded-md border border-x-2 border-y-2 me-2 shadow-md bg-slate-50 border-gray-200 ">
                        <div className="img_box flex p-3 transition duration-1000 ease-in-out">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-[80%] h-40 rounded-md me-2"
                          />
                          <div className="icon flex flex-col  ms-14 group-hover:ms-0  mt-3">
                            <div className=" p-3 mt-3 rounded-sm cursor-pointer bg-red-500 shadow-md z-10 ">
                              <AiFillEye className="text-gray-100 " />
                            </div>
                            <div className="  p-3 mt-3 rounded-sm cursor-pointer  bg-red-500 shadow-md z-10">
                              <AiFillHeart className="text-gray-100   " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
