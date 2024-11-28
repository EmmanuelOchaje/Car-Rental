import qleft from "../assets/images/qleft.png";
import qright from "../assets/images/qright.png";
import wps from "../assets/images/wps.png";

const Reviews = (props) => {
  return (
    <div className="b-[#F7FBFF] min-h-[100vh]">
      {/* <div className="py-6">
        <div className="flex relative justify-center">
          <img src={qleft} className="w-[270px] h-[300px]" alt="" />
          <div>
            <h2 className="text-[#1572D3] bg-[#ECF5FF] w-fit px-6 rounded-lg p-2 font-medium mx-auto">
              TESTIMONIALS
            </h2>
            <h2 className="text-3xl font-medium text-center my-4">
              what people say about us?
            </h2>
          </div>
          <img src={qright} className="w-[270px] h-[300px]" alt="" />
        </div>
      </div> */}
      <img src={wps} alt="" />
    </div>
  );
};

export default Reviews;
