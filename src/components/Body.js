import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listofrestaurants, setListofrestaurants] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search-box">
        <input placeholder="search" />
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdlist = listofrestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListofrestaurants(filterdlist);
          }
        }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listofrestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
