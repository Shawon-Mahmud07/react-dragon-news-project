import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="text-center pt-6 md:pt-8 space-y-2 md:space-y-3 px-4 md:px-0">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-sm md:text-base text-[#706F6F)] font-normal">
          Journalism Without Fear or Favour
        </p>
        <p className="text-sm md:text-base text-[#706F6F)] font-normal">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
