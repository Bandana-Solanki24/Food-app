import React, { useState, useEffect } from "react";
import RestrauntCards from "./RestrauntCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showOnlyTopRated, setShowOnlyTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestraunts(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchText("");
  };
  const handleSearch = () => {
    const filteredRestaurant = listOfRestraunts.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurant(filteredRestaurant);
  };
  const showTopRatedRestraunt = () => {
    setShowOnlyTopRated(!showOnlyTopRated);
    let topRatedRestraunts = showOnlyTopRated
      ? listOfRestraunts.filter((res) => res.info.avgRating > 4)
      : listOfRestraunts;

    setFilteredRestaurant(topRatedRestraunts);
  };

  return (
    <>
      <div className="flex ml-4 p-3">
        <input
          type="text"
          className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter text..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="m-3 p-3 border rounded-md bg-slate-300"
        >
          Search
        </button>
        <button
          className="m-3 p-3 border rounded-md bg-slate-300"
          onClick={showTopRatedRestraunt}
        >
          {showOnlyTopRated
            ? " Show Top-rated Restaurants"
            : "  Show All Restraunts "}
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurant/" + restaurant?.info.id}
            >
              <RestrauntCards resData={restaurant?.info} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Body;
