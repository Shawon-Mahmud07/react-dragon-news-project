import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import BreakingNews from "./BreakingNews";

const Home = () => {
  const categories = useLoaderData();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch data from the news.json file
    fetch("/news.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setNewsData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:mt-5">
        <div>
          <LeftSideNav categories={categories}></LeftSideNav>
        </div>
        <div className=" md:col-span-2 ">
          <h2 className="text-[#403F3F] text-xl font-semibold ml-3 md:ml-0 mt-3 md:mt-0">
            Dragon News Home
          </h2>
          {newsData.map((data, index) => (
            <NewsCard key={index} data={data}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
