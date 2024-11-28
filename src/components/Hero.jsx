// import line from "../assets/images/Vector 1.png";
import car from "../assets/images/carImg.png";
import google from "../assets/images/google.png";
import appstore from "../assets/images/appstore.png";
import location from "../assets/images/location.png";
import calendar from "../assets/images/calendarImg.png";
import { motion } from "framer-motion";

const Hero = ({ containerVariants }) => {
  return (
    <div>
      <div className="flex justify-between pl-20">
        {/* header text */}
        <div className="w-[35%] h-fit flex items-cente">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.9,
            }}
            className="py-20"
          >
            <h2 className="text-4xl overflow-hidden text-[#242424] font-bold">
              Find, book and rent a <br /> car{" "}
              <span className="text-[#1572D3] flex-col">
                Easily
                {/* <img src={line} className="w-[100px]  h-[20px]" alt="/" /> */}
              </span>
            </h2>
            <p className="text-[#272727] my-4">
              Get a car wherever and whenever you need it with <br /> your IOS
              and Android device.
            </p>
            <div className="flex">
              <img src={google} className="m-2 ml-0 w-[100px]" alt="" />
              <img src={appstore} className="m-2 ml-0 w-[100px]" alt="" />
            </div>
          </motion.div>
        </div>

        {/* car image */}
        <div className="w-[70%] pt-10 z-10">
          <motion.img
            src={car}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.5,
            }}
            className="z-1 w-[100%]"
            alt=""
          />
        </div>
      </div>

      {/* search bar */}
      <motion.div
        variants={containerVariants}
        // initial={{ opacity: 0, y: 100 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        /*
        animate={{ opacity: 1, y: 0 }}
         transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.5,
        }} */
        className="shadow-xl flex justify-between w-[80%] p-2 rounded-lg mx-auto my-8 bg-white pl-6"
      >
        <div className="flex border-r-2 mr-4 w-[30%]">
          <img src={location} className="w-[30px] h-[30px]" alt="" />
          <div className="px-2">
            <h3 className="font-normal text-[13px]">Location</h3>
            <p className="text-[12px] text-[#bdbdbd]">Search your location</p>
          </div>
        </div>

        <div className="flex border-r-2 w-[30%] mr-4">
          <img src={calendar} className="w-[30px] h-[30px]" alt="" />
          <div className="px-2">
            <h3 className="font-normal text-[13px]">Pick up date</h3>
            <p className="text-[12px] text-[#bdbdbd]">Tue 15 Feb, 09:00</p>
          </div>
        </div>

        <div className="flex border- w-[30%]">
          <img src={calendar} className="w-[30px] h-[30px]" alt="" />
          <div className="px-2">
            <h3 className="font-normal text-[13px]">Return Date</h3>
            <p className="text-[12px] text-[#bdbdbd]">Thu 16 Feb, 11:00</p>
          </div>
        </div>

        <button className="bg-[#1572D3] text-white rounded-lg p-2 w-32">
          Search
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
