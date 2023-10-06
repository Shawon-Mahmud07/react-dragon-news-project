import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const LeftSideNav = ({ categories }) => {
  return (
    <div className="space-y-3 md:space-y-5 mt-4 md:mt-0">
      <h2 className="text-[#403F3F] text-lg md:text-xl font-semibold ml-2 md:ml-0">
        All Category
      </h2>
      <div className="text-center bg-[#E7E7E7] md:rounded-md py-1 mx-2 md:mx-0 md:py-3">
        <h1 className="text-[#403F3F] font-semibold text-lg md:text-xl">
          National News
        </h1>
      </div>
      <div className="mx-4 space-y-3 md:space-y-7  grid grid-cols-2 md:grid-cols-1 justify-center items-center">
        {categories.map((data, index) => (
          <div className="flex md:ml-11  items-center " key={index}>
            <Link className="text-left text-[#9F9F9F] font-medium text-sm md:text-xl ">
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
LeftSideNav.propTypes = {
  categories: PropTypes.array,
};
export default LeftSideNav;
