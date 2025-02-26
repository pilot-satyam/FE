import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams(); 
    //moving the logic to custom hook
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards; 
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}- Rs.{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
                ))}
                {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
            </ul>
        </div>
    );
}

export default RestaurantMenu;