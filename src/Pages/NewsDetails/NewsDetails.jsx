import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-[#403F3F] md:text-xl font-semibold md:font-bold">
            Dragon News
          </h2>
          <p>{id}</p>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </>
  );
};

export default NewsDetails;
