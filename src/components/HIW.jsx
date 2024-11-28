import React, { useEffect } from "react";
import { motion } from "framer-motion";
import location from "../assets/images/location-tick.png";
import calendar from "../assets/images/calendar.png";
import car from "../assets/images/car.png";
import imgslide from "../assets/images/slide.png";
import acura from "../assets/images/acura.png";
import audi from "../assets/images/audi.png";
import nissan from "../assets/images/nissan.png";
import volvo from "../assets/images/volvo.png";
import honda from "../assets/images/honda.png";
import jaguar from "../assets/images/jaguar.png";

const data = [
  {
    header: "Choose a Location",
    text: "Choose your and find your best car",
    img: location,
  },
  {
    header: "Pick up date",
    text: "Select your pick up date and time to book your car",
    img: calendar,
  },
  {
    header: "Book Your Car",
    text: "Book your car and we will deliver it directly to you",
    img: car,
  },
];

const HIW = ({ containerVariants, cardVariants }) => {
  return (
    <div>
      <div className="lg:h-[100vh] my-10 lg:my-0 pt-20">
        {/* Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="w-fit p-2 px-6 rounded-lg bg-[#ECF5FF] font-medium text-[#1572D3] m-auto">
            HOW IT WORKS
          </h2>
          <h2 className="text-[#333333] font-medium text-[22px] md:text-3xl text-center my-4">
            Rent with following 3 working steps
          </h2>
        </motion.header>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="md:flex flex-wrap w-fit mx-auto"
        >
          {data.map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="m-10">
              <img
                src={item.img}
                className="bg-[#ECF5FF] p-6 rounded-lg w-[100px] mx-auto"
                alt=""
              />
              <h3 className="text-center my-4 text-[15px]">{item.header}</h3>
              <p className="text-center text-[11px] text-[#979797] w-[150px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-scrolling images */}
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="flex animate-loop-scroll">
            <div className="p-2 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={acura} alt="" />
            </div>
            <div className="p-4 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={audi} alt="" />
            </div>
            <div className="p-4 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={nissan} alt="" />
            </div>
            <div className="p-6 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={jaguar} alt="" />
            </div>
            <div className="p-6 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={volvo} alt="" />
            </div>
            <div className="p-4 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={honda} alt="" />
            </div>
          </div>
          <div className="flex animate-loop-scroll">
            <div className="p-2 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={acura} alt="" />
            </div>
            <div className="p-4 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={audi} alt="" />
            </div>
            <div className="p-4 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={nissan} alt="" />
            </div>
            <div className="p-6 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={jaguar} alt="" />
            </div>
            <div className="p-6 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={volvo} alt="" />
            </div>
            <div className="p-4 w-[272px] h-[68px] flex justify-center">
              <img className="w-fit" src={honda} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIW;
