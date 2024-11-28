import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="lg:px-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.5,
        }}
        className="flex justify-between py-6 text-[#484848]"
      >
        <h1 className="cursor-pointer flex font-bold text-[#1572D3] mt-2">
          <span>
            <img src={logo} className="w-[20px] mr-2" alt="" />
          </span>
          RENTCARS
        </h1>

        <div className="hidden lg:block">
          <ul className="flex mt-2">
            <li className="mr-4 cursor-pointer text-[15px]">Become a renter</li>
            <li className="mr-4 cursor-pointer text-[15px]">Rent deals</li>
            <li className="mr-4 cursor-pointer text-[15px]">How it works</li>
            <li className="mr-4 cursor-pointer text-[15px]">Why choose us</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button className="cursor-pointer mr-6 text-[15px]">Sign In</button>
          <button className="cursor-pointer w-24 bg-[#1572D3] text-[15px] text-white p-2 rounded-xl">
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
