import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    resData: {
      card: {
        card: {
          info: {
            cloudinaryImageId = '',
            name = 'Unknown',
            cuisines = [],
            costForTwo = 'N/A',
            avgRating = 'N/A'
          } = {}
        } = {}
      } = {}
    } = {}
  } = props;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200" >
      <img 
        className="rounded-lg"
        alt="rest-logo"
        src={ CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(",")}</h4> 
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;