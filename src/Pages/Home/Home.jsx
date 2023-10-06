import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav categories={categories}></LeftSideNav>
        </div>
        <div className="border md:col-span-2">
          <h1>News page coming Soon...</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
