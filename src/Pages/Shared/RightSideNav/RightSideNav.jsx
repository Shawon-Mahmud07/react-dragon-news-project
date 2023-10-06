import { Button } from "@material-tailwind/react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import {
  FaGoogle,
  FaSquareGithub,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
} from "react-icons/fa6";

const RightSideNav = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-xl ml-3 py-2">Login With</h1>
        <div className="mb-2">
          <Button
            size="md"
            variant="outlined"
            color="blue"
            className="flex font-bold items-center justify-center gap-3 w-11/12 mx-auto"
          >
            <FaGoogle className="h-4 w-4"></FaGoogle>
            Login with Google
          </Button>
        </div>
        <div>
          <Button
            size="md"
            variant="outlined"
            color="gray"
            className="flex font-bold items-center justify-center w-11/12 mx-auto gap-3"
          >
            <FaSquareGithub className="h-5 w-5"></FaSquareGithub>
            Login with GitHub
          </Button>
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-[#403F3F] text-xl font-semibold ml-4 mb-2">
          Find Us On
        </h2>

        <div className="px-3 md:px-0 md:pl-4 ">
          <div className="flex  items-center gap-3 border-2 rounded-t-md  pl-3 py-2 ">
            <div className="flex bg-[#F3F3F3] items-center justify-center h-8 w-8  rounded-full">
              <FaFacebook className="h-7  text-[#3B599C]"></FaFacebook>
            </div>
            <span className="text-[#706F6F] text-base font-medium">
              FaceBook
            </span>
          </div>
          <div className="flex items-center gap-3 border-x-2 pl-3 py-2  ">
            <div className="flex bg-[#F3F3F3] items-center justify-center h-8 w-8  rounded-full">
              <FaSquareTwitter className="h-7 text-[#58A7DE] bg-[#F3F3F3]"></FaSquareTwitter>
            </div>

            <span className="text-[#706F6F] text-base font-medium">
              Twitter
            </span>
          </div>
          <div className="flex items-center gap-3 border-2  pl-3 py-2 rounded-b-md ">
            <div className="flex bg-[#F3F3F3] items-center justify-center h-8 w-8  rounded-full">
              <FaInstagram className="h-7 text-[#E98A93]"></FaInstagram>
            </div>
            <span className="text-[#706F6F] text-base font-medium">
              Instagram
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] md:ml-3 mx-3 md:mx-0  ">
        <h2 className="text-[#403F3F] text-xl font-semibold ml-4 mb-2">
          Q-Zone
          <div className="flex flex-col justify-center items-center pr-4 space-y-3 md:p-4 ">
            <div>
              <img src={qZone1} alt="" />
            </div>
            <div>
              <img src={qZone2} alt="" />
            </div>
            <div>
              <img src={qZone3} alt="" />
            </div>
          </div>
        </h2>
      </div>
    </>
  );
};

export default RightSideNav;
