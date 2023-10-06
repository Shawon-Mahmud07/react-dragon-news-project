import { Button } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="mt-4 md:mt-7 bg-[#F3F3F3] flex p-1 md:p-3">
      <Button
        className="bg-[#D72050]  text-[#FFF] font-medium  md:text-xl rounded-none"
        size="sm"
      >
        Latest
      </Button>
      <Marquee
        pauseOnHover="true"
        speed={60}
        className=" text-[#403F3F] text-sm md:text-lg md:font-semibold"
      >
        <p className="mr-10">
          Liverpool too good for Saint-Gilloise, Brighton battle back to hold
          Marseille
        </p>{" "}
        <p className="mr-10">Bangladesh joins nuclear energy club</p>
        <p className="mr-10">
          Years after their feud, Arijit Singh meets Salman Khan at his
          residence
        </p>
        <p className="mr-10">
          Root helps England to 282-9 as New Zealand apply brakes in WC opener
        </p>
        <p className="mr-10">
          At least 49 killed in Russian attack in northeast Ukraine
        </p>
        <p className="mr-10">‘The Donald Trump show is over’</p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
