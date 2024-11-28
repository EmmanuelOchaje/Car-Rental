import audi from "../assets/images/Audi-1.png";
import support from "../assets/images/24-support.png";
import message from "../assets/images/messages-2.png";
import user from "../assets/images/user-tick.png";
import wallet from "../assets/images/wallet.png";
import { motion } from "framer-motion";

const data = [
  {
    img: wallet,
    head: "Best price guaranteed",
    text: "Find a lower price? ,We’ll refund you 100%of the difference.",
  },
  {
    img: user,
    head: "Experience Driver",
    text: "Don’t have driver? Don’t worry, we have many experienced driver for you.",
  },
  {
    img: support,
    head: "24 hour car delivery",
    text: "Book your car anytime and we will deliver it directly to you.",
  },
  {
    img: message,
    head: "24/7 technical support",
    text: "Have a question? Contact Rentcars support any time when you have problem.",
  },
];

const WCU = ({ containerVariants, cardVariants }) => {
  return (
    <div className="lg:bg-1 lg:min-h-[100vh] overflow-hidden lg:flex justify-between">
      <div className="flex items-center lg:h-[100vh]">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: [0, -10, 5, 0] }} // Keyframes for bounce
          transition={{
            duration: 1, // Adjust duration for the whole sequence
            ease: "easeOut", // Smooth easing
          }}
          viewport={{ once: true, amount: 0.3 }}
          src={audi}
          className="md:w-[600px]"
          alt=""
        />
      </div>
      <div className="">
        {/* right side */}
        {/* motion headers */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }} // Keyframes for bounce
          // animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="px-6 lg:px-0"
        >
          <h2 className="text-[#1572D3] bg-[#ECF5FF] w-fit px-6 rounded-lg p-2 font-medium">
            WHY CHOOSE US
          </h2>
          <h2 className="text-[22px] md:text-3xl font-medium md:w-[500px] my-4">
            We offer the best car experience with our rental deals
          </h2>
        </motion.div>

        {/* list */}
        <motion.div
          className="px-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {data.map((data, key) => (
            <motion.div key={key} className="flex my-2" variants={cardVariants}>
              {" "}
              <img
                src={data.img}
                className="p-4 bg-[#ECF5FF] w-[70px] rounded-lg m-2 mr-6"
                alt="/"
              />{" "}
              <div>
                <h3 className="text-[17px] md:text-xl">{data.head}</h3>
                <p className="text-gray-500 text-[12px] md:text-[14px] w-[500px] my-2">
                  {data.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WCU;
/* initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
            /*  initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1, // Lengthen the animation duration
            ease: "easeOut",
            type: "spring",
            stiffness: 5,
            damping: 5,
          }}
          viewport={{ once: true, amount: 0.3 }}
           */
