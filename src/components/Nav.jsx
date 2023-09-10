import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
const Nav = () => {
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

  return (
    <>
      <div className="w-full m-0 p-0 font-serif box-border">
        <div className="flex items-center mx-w-[100%] p-3 bg-slate-200">
          <div className="ms-5 text-slate-400 text-2xl">
            <MdLocalShipping />
          </div>

          <div className="info">
            <p className="ms-3 text-slate-400">
              Free Shipping When Shipping upto $1000
            </p>
          </div>
        </div>

        <div className="flex  py-5 px-10 max-w-[100%] justify-between items-center ">
          <div className="me-3 ">
            <img
              className=" h-12 w-16 md:h-16 md:w-20 cursor-pointer "
              src="/public/image/logo.png"
              alt=""
            />
          </div>
          <div className="flex">
            <input
              className="md:h-10  sm:w-44 md:w-80  focus:outline-none border text-slate-400  border-gray-300 rounded-l p-2 "
              type="text"
              placeholder="Search"
            />
            <button
              className="bg-red-500 md:h-10    hover:bg-red-700  text-white text-lg font-extrabold py-[12.5px] px-5 rounded-r"
              type="button"
            >
              <AiOutlineSearch />
            </button>
          </div>

          {isAuthenticated ? (
            // if user is Login then Logout Button will shown and also user profile
            <div className="flex items-center gap-2   text-slate-950">
              <div className="ms-3 ">
                <CiLogout className=" text-slate-950 text-md " />
              </div>
              <div>
                <button
                  className="text-md"
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
                <FiLogIn className="text-slate-950 text-md" />
              </div>
              <div>
                <button className="text-md" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-full py-3 px-3 flex justify-between items-center bg-slate-900 ">
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
                        className="h-10 w-10 rounded-sm border-2 border-slate-400"
                        src={user.picture}
                        alt={user.name}
                      />
                    </div>
                    <div>
                      <h2 className="text-gray-50 text-md">
                        {user.name.slice(0, 10)}
                      </h2>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 bg-white rounded-sm">
                    <BiUser className="text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Please Login</p>
                  </div>
                </>
              )
            }
          </div>

          <div>
            <ul className="flex gap-3 ">
              <li>
                <Link
                  className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                  to="/collection"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-200 hover:text-red-500 transition-all duration-300 ease-in-out"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-slate-200 bg-red-500 p-3 rounded-sm me-5 font-semibold text-sm ">
              flat 10% over all iphone
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
