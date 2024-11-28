import google from "../assets/images/google.png";
import app from "../assets/images/appstore.png";
import phone from "../assets/images/phone.png";

const Download = (props) => {
  return (
    <div className="flex">
      <div className="min-h-[100vh] bg-2 pt-[10rem] px-[8rem]">
        <h2 className="text-[#1572D3] mx-aut bg-[#ECF5FF] w-fit px-6 rounded-lg p-2 font-medium">
          DOWNLOAD
        </h2>
        <h2 className="text-4xl w-[400px] font-semibold my-4">
          Download Rent Car App for <span className="text-[#1572D3]">FREE</span>
        </h2>
        <p>For faster, easier booking and exclusive deals.</p>

        <div className="flex my-6">
          <img src={google} className="w-[150px] m-2 ml-0" alt="" />
          <img src={app} className="w-[150px] m-2" alt="" />
        </div>
      </div>
      <div className="flex items-end">
        <img src={phone} className="w-[1000px]" alt="" />
      </div>
    </div>
  );
};

export default Download;
