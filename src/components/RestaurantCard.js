import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-65 bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt={name}
        className="rounded-lg"
      />
      <div className="restaurant-details">
        <h3 className="font-bold py-3 text-lg">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">
            <span>{avgRating}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.slaString} mins</h4>
        </div>
        <p className="cuisine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;