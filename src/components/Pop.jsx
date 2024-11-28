import jag from "../assets/images/jag.png";
import bmw from "../assets/images/bmw.png";
import aud from "../assets/images/aud.png";
import lambo from "../assets/images/lanbo.png";
import plug from "../assets/images/plug.png";
import door from "../assets/images/door.png";
import user from "../assets/images/user.png";
import ice from "../assets/images/ice.png";
import star from "../assets/images/star.png";
import arrow from "../assets/images/arrow-white.png";
import arrowgr from "../assets/images/arrow-right.png";

import { motion } from "framer-motion";

/*  img: jag,
    ice: ice,
    plug: plug,
    door: door,
    user: user, */
const data = [
  {
    img: jag,

    name: "Jaguar XE L P250",
    rev: 4.8,
    review: "2,436",
    passengers: 4,
    doors: 4,
    price: "1,800",
  },
  {
    img: aud,
    name: "Audi R8",
    rev: 4.6,
    review: "1,936",
    passengers: 2,
    doors: 2,
    price: "1,600",
  },
  {
    img: bmw,

    name: "BMW M3",
    rev: 4.5,
    review: "2,036",
    passengers: 4,
    doors: 4,
    price: "1,200",
  },
  {
    img: lambo,

    name: "Lamborghini Huracan",
    rev: 4.3,
    review: "2,236",
    passengers: 2,
    doors: 2,
    price: "2,300",
  },
];
const Pop = ({ containerVariants, cardVariants }) => {
  return (
    <div className="my-6 lg:min-h-[100vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div>
          <h2 className="text-[#1572D3] mx-auto bg-[#ECF5FF] w-fit px-6 rounded-lg p-2 font-medium">
            POPULAR RENTAL DEALS
          </h2>
          <h2 className="text-2xl font-medium text-center my-4">
            Most Popular Car rental deals
          </h2>
        </div>

        <div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-wrap justify-center"
        >
          {data.map((data, key) => (
            <motion.div
              className="m-4 shadow-xl rounded-xl p-4 pb-0"
              variants={cardVariants}
            >
              <img
                src={data.img}
                className="w-[200px] h-[100px] mx-auto"
                alt=""
              />
              <div className="">
                <h3 className="text-center my-2">{data.name}</h3>
                <p className="flex justify-between mx-auto w-fit text-gray-500">
                  <img
                    src={star}
                    className="w-[15px] h-[15px] my-auto mr-3"
                    alt=""
                  />
                  {data.rev} ({data.review}
                  <span className="text-[15px]"> reviews</span>)
                </p>
              </div>

              {/* info */}
              <div className="text-gray-500 my-4">
                <div className="flex my-2">
                  <p className="flex w-[120px] mx-2">
                    <img
                      src={user}
                      className="w-[15px] h-[15px] mr-2 mt"
                      alt=""
                    />
                    <span className="text-[10px]">
                      Passengers {data.passengers}
                    </span>
                  </p>
                  <p className="flex mx-2">
                    <img src={plug} className="w-[15px] h-[15px] mr-2" alt="" />
                    <span className="text-[10px]">Auto</span>
                  </p>
                </div>

                <div className="flex my-2">
                  <p className="flex w-[120px] mx-2">
                    <img src={ice} className="w-[16px] mr-2" alt="" />
                    <span className="text-[10px]">Air Conditioning</span>
                  </p>
                  <p className="flex justify-center mx-2">
                    {" "}
                    <img src={door} className="w-[16px] mr-2" alt="" />
                    <span className="text-[10px]">{data.doors} Doors</span>
                  </p>
                </div>
                <hr className="my-4 mx-4 " />
                {/* price */}
                <div className="flex justify-between">
                  <p className="text-[16px]">Price</p>
                  <p className="text-black font-medium">
                    ${data.price}{" "}
                    <span className="text-gray-500 text-[14px]">/day</span>
                  </p>
                </div>
                <button className="bg-[#1572D3] flex justify-center p-2 w-full text-white mt-4 rounded-lg">
                  Rent Now{" "}
                  <img src={arrow} className="w-[16px] my-1 ml-2" alt="" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-center my-4">
        <button className="flex justify-center p-2 w-fit text-gray-500 border mt-4 rounded-lg">
          See more vehicles{" "}
          <img src={arrowgr} className="w-[16px] my-1 ml-2" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pop;
