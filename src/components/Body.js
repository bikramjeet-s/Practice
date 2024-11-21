import RestaurantCard from "./RestaurantCard.js"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body=() =>{
    
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filtererdListOfRestaurants,setFilteredListOfRestaurants] = useState([]);
    const [searchInput,setSearchInput] = useState("");
    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7362904&lng=76.741588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const js_data = await data.json()

        setListOfRestaurants(js_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(js_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() =>{fetchData()},[])
    
    const handleClick = () =>{
        setFilteredListOfRestaurants(listOfRestaurants.filter((restaurant) =>{return restaurant?.info?.avgRating > 4.4}))
    }
    
    const handleInput = (e) =>{setSearchInput(e.target.value)}
    const handleSearch = () =>{
        setFilteredListOfRestaurants(listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchInput.trim().toLowerCase())))
    }

    if(listOfRestaurants.length==0){
        return <Shimmer/>
    }
    console.log('Body rendered')
    return(
        <div id='body'>
            <div id="filter-contianer">
                <input onChange={(e) =>{handleInput(e)}}></input>
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleClick}>Top Rated Restaurants</button>
            </div>
            
            <div id='res-container'>
                {
                    filtererdListOfRestaurants.map((restaurant) => {return(<RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)})
                }
            </div>

        </div>
    )
}

export default Body;