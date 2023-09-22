import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu, BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
const Nav = ({ search, setSearch, searchProduct }) => {
  const [click, setClick] = useState(false);

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
    // <div className="text-center font-bold mt-96">Loading ...</div>;
  }
  const handleClick = () => {
    setClick(!click);
  };
  //navbar design
  const content = (
    <>
      <div className="lg:hidden block absolute z-50 top-[220px] w-full left-0 right-0 bg-slate-950 transition">
        <ul className="text-center text-base p-20 ">
          <li className="my-4 py-4 border-b border-slate-800 ">
            <Link
              spy="true"
              scroll="true"
              className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 ">
            <Link
              spy="true"
              scroll="true"
              className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
              to="/shop"
            >
              Shop
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 ">
            <Link
              spy="true"
              scroll="true"
              className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 ">
            <Link
              spy="true"
              scroll="true"
              className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 ">
            <Link
              spy="true"
              scroll="true"
              className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className="w-full m-0 p-0 font-serif box-border">
        <div className="flex justify-center sm:justify-start mx-w-[100%] p-3 bg-slate-200">
          <div className="ms-5 text-slate-400 text-2xl">
            <MdLocalShipping />
          </div>

          <div className="info">
            <p className="ms-3 text-slate-400">
              Free Shipping When Shipping upto $1000
            </p>
          </div>
        </div>

        <div className="flex px-7  py-5 sm:px-10 max-w-[100%] justify-between items-center ">
          <div className="me-3 ">
            <img
              className=" h-14 w-[70px]   sm:h-16 sm:w-20 cursor-pointer "
              src="/public/image/logo.png"
              alt=""
            />
          </div>
          <div className="flex">
            <input
              className="  w-40 h-9 sm:w-80 sm:h-10  focus:outline-none border text-slate-400  border-gray-300 rounded-l p-2 "
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-red-500 h-9 px-3 sm:h-10  sm:py-[12.5px] sm:px-5  hover:bg-red-700  text-white text-lg font-extrabold  rounded-r"
              type="button"
              onClick={searchProduct}
            >
              <AiOutlineSearch />
            </button>
          </div>

          {isAuthenticated ? (
            // if user is Login then Logout Button will shown and also user profile
            <div className="flex items-center gap-2   text-slate-950">
              <div className="ms-3 ">
                <CiLogout className=" text-slate-950 text-sm sm:text-md " />
              </div>
              <div>
                <button
                  className=" text-sm sm:text-md"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            //if user is Logout then Login Button will shown
            <div className="flex items-center  text-slate-950 gap-2 me-9 ">
              <div className="ms-3 ">
                <FiLogIn className="text-slate-950 text-sm sm:text-md" />
              </div>
              <div>
                <button
                  className="text-sm   sm:text-md"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-full py-3 px-2 sm:py-3 sm:px-3 flex justify-between items-center bg-slate-900 ">
          <div className="flex mt-3 items-center gap-3">
            {
              // user Profile will Shown here
              isAuthenticated ? (
                <>
                  {/* <div className="p-3 bg-white rounded-sm">
                    <BiUser className="text-lg" />
                  </div> */}
                  <div className="ms-5 flex items-center">
                    <div className="me-3">
                      <img
                        className="h-8 w-8    sm:h-10 sm:w-10 rounded-sm border-2 border-slate-400"
                        src={user.picture}
                        alt={user.name}
                      />
                    </div>
                    <div>
                      <h2 className="text-gray-50 text-xs sm:text-base   ">
                        {user.name.slice(0, 10)}
                      </h2>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 bg-white rounded-sm">
                    <BiUser className=" text-sm sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Please Login
                    </p>
                  </div>
                </>
              )
            }
          </div>

          {/*navbar part start*/}
          <nav>
            <div className="lg:flex md:flex lg:flex-1 items-center justify-center hidden">
              <div className="">
                <ul className="flex gap-3 ">
                  <li>
                    <Link
                      spy="true"
                      scroll="true"
                      className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy="true"
                      scroll="true"
                      className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                      to="/shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy="true"
                      scroll="true"
                      className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy="true"
                      scroll="true"
                      className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      spy="true"
                      scroll="true"
                      className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>{click && content}</div>

            <button
              className="block sm:hidden transition"
              onClick={handleClick}
            >
              {click ? (
                <FaTimes className="text-white  text-base" />
              ) : (
                <BiMenu className="text-white text-base" />
              )}
            </button>
          </nav>
          {/*navbar part end*/}

          <div>
            <p className="text-slate-200 bg-red-500 p-2 sm:p-3 rounded-sm me-3 sm:me-5 font-semibold text-[10px] sm:text-sm ">
              flat 10% over all iphone
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
Nav.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  searchProduct: PropTypes.func,
};

export default Nav;
