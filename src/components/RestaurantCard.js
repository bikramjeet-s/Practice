import { IMAGE_URL } from "../utils/constants.js";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,cloudinaryImageId,avgRating} = resData?.info;
    return (
        <div className='res-card'>
            <div id='res-image-container'>
                <img id = 'res-image' src = {IMAGE_URL+cloudinaryImageId}></img>
            </div>
            <div>
                <h2>{name}</h2>
                <h2>{cuisines.join(', ')}</h2>
                <h2>{avgRating}</h2>
            </div>
        </div>
    )
}

export default RestaurantCard;