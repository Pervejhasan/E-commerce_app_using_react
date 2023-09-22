import { BiSolidWallet } from "react-icons/bi";
import { FaHeadphonesAlt, FaPiggyBank, FaShippingFast } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="m-0 p-0 box-border">
      <div className="footer w-full p-7 bg-slate-100">
        <div className="containers flex flex-col sm:flex-row max-w-full">
          {/* ms-20 sm:ms-0   */}
          <div className="left-box    w-full sm:w-[30%] p-5 border-r-0 sm:border-r-2 border-solid border-gray-300">
            <div className="box   flex  g p-3">
              <div className="icon-box text-red-600 text-2xl">
                <FaPiggyBank />
              </div>
              <div className="detail ms-3">
                <h3 className="font-semibold text-lg text-red-600 tracking-wide">
                  Great Saving
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box flex  g p-3">
              <div className="icon-box text-red-600 text-2xl">
                <FaShippingFast />
              </div>
              <div className="detail ms-3">
                <h3 className="font-semibold text-lg text-red-600 tracking-wide">
                  Free Delivery
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box flex  g p-3">
              <div className="icon-box text-red-600 text-2xl">
                <FaHeadphonesAlt />
              </div>
              <div className="detail ms-3">
                <h3 className="font-semibold text-lg text-red-600 tracking-wide">
                  24x7 Support
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box flex   g p-3">
              <div className="icon-box text-red-600 text-2xl">
                <BiSolidWallet />
              </div>
              <div className="detail ms-3">
                <h3 className="font-semibold text-lg text-red-600 tracking-wide">
                  Money Back
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="right-box bg-slate-950 sm:bg-slate-100 p-3 w-full sm:w-[69%]">
            <div className="header max-w-full text-center">
              <img
                className="h-20 w-20 ms-[40%]"
                src="../../public/image/logo.png"
                alt=""
              />
              <p className="mt-1 font-semibold text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                inventore suscipit quos nesciunt odit consectetur.
              </p>
            </div>
            <div className="bottom p-5 mt-7 w-full flex flex-col sm:flex-row items-center justify-around">
              <div className="box p-4 text-center sm:text-left">
                <h3 className="uppercase text-white sm:text-slate-950 font-bold text-sm tracking-wide">
                  Your Account
                </h3>
                <ul>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700  text-gray-500 font-medium capitalize tracking-wide">
                    About Us
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    Account
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    Payment
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    Sales
                  </li>
                </ul>
              </div>
              <div className="box p-4 text-center sm:text-left">
                <h3 className="uppercase text-white sm:text-slate-950 font-bold text-sm tracking-wide">
                  Products
                </h3>
                <ul>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    Delivery
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    Track Order
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    New Product
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    Old Product
                  </li>
                </ul>
              </div>
              <div className="box p-4 text-center sm:text-left">
                <h3 className="uppercase text-white sm:text-slate-950 font-bold text-sm tracking-wide">
                  Contact Us
                </h3>
                <ul>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    4534, Silver Business point
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    +(012)765675
                  </li>
                  <li className="mt-1 cursor-pointer transition-all duration-300 hover:text-red-700 text-gray-500 font-medium capitalize tracking-wide">
                    info@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
