import { CDN_URL } from "../utils/constant";
import "font-awesome/css/font-awesome.min.css";

// Function to render stars based on the average rating
const renderStars = (avgRating) => {
  const starCount = Math.floor(avgRating); // Get the whole number of stars
  const remainder = avgRating - starCount; // Get the remainder to determine half star

  const stars = [];

  // Render full stars
  for (let i = 0; i < starCount; i++) {
    stars.push(<i key={i} className="fa fa-star text-yellow-400"></i>);
  }

  // Render half star if remainder is greater than 0.25
  if (remainder > 0.25) {
    stars.push(
      <i key="half" className="fa fa-star-half-alt text-yellow-400"></i>
    );
  }

  return stars;
};

const RestrauntCardsCards = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwoString,
    locality,
  } = resData;

  return (
    <div className="m-4 p-4 w-[250px] h-[375px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <div>
        <img
          className="w-full rounded-lg"
          alt="resImage"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <div className="flex items-center">
          <div className="mr-2">
            {renderStars(avgRating)} {/* Render stars here */}
          </div>
          <h4>{avgRating} </h4>
        </div>
        <h4 className="whitespace-normal text-wrap truncate">
          {cuisines.join(", ")}
        </h4>
        <h4>{costForTwoString}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestrauntCardsCards;
