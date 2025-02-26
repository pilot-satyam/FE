import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    //initial value of listOfRestaurants, it is rendered before actual api data is fetched
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList); 

    const[listOfRestaurants,setListOfRestaurants] = useState([]); //nothing is fetched 
    const[searchRestaurant,setSearchRestaurant] = useState("");
    const[filteredText,setFilteredText] = useState([]);

    const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json = await data.json(); //resolving promise
      console.log(json);
      setListOfRestaurants(json?.data?.cards?.slice(3));//slice is used here because first 2 cards are not useful
      setFilteredText(json?.data?.cards.slice(3)); //we are copying here the complete list so that when we search again it should render all the values and not only 2 restaurant
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h3>Looks like you are offline Gareeb!!! Internet ka bill bharke aa!!</h3>;

    return listOfRestaurants.length === 0 ? <Shimmer /> :(
      <div className="body">
        <div className="filter flex">
          <div className="searchRest m-4 p-4">
            <input type="text" 
            className="border border-solid border-black" 
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
            />
            <button className="px-4 m-4 bg-green-100 rounded-lg"
            onClick={()=>{
              //filtering using search text
              console.log(searchRestaurant);

              //using lower case here so that if any case is searched it is mapped to result
              
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.card?.card?.info?.name.toLowerCase().includes(searchRestaurant.toLowerCase()));
              
              //here using filtered Text since after filtering eg suppose we filter using keyword
              //burger and we get 2 results and now if we try to search coffee it would not search
              //because it will try to search in those two results and not the whole restaurant hence
              //we create a new state variable filteredText and then set it's value
              setFilteredText(filteredRestaurant);
            }}
            >
            search
            </button>
          </div>
           <div className="flex items-center justify-center">
           <button 
            className=" bg-green-100 rounded-md px-2"
            onClick={()=>{
                // lisOfRestaurants = lisOfRestaurants.filter((res) => res?.card?.card?.info?.avgRating > 4.4);
                // console.log(lisOfRestaurants);
                const filteredList = listOfRestaurants.filter((res) => res?.card?.card?.info?.avgRating > 4.4);
                setListOfRestaurants(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
           </div>
        </div>
        <div className="flex flex-wrap">
        {
          filteredText.map((restaurant)=>(
            // Using link over here to map each card with their respective restaurant food menu
            <Link key={restaurant?.card?.card?.info?.id} to={"/restaurants/" + restaurant?.card?.card?.info?.id}>
              {restaurant?.card?.card?.info?.promoted ? (<RestaurantCardWithPromotedLabel resData={restaurant} />) : (<RestaurantCard resData={restaurant}/>)}
            </Link> 
          ))
        }
        </div>
      </div>
    );
};

export default Body;
  