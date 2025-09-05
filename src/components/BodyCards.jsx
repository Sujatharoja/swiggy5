import React from "react";
import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import BodyShimmer from "./shimmer/BodyShimmer";


function BodyCards() {
    const [bodyCards, setBodyCards] = useState([])
    const [search, setSearch] = useState('')
    async function BodyCardsFetch() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json()
        setBodyCards(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)


    }
    useEffect(() => {
        BodyCardsFetch()

    }, [])
    function handleFastDelivery() {
        const fast = bodyCards.filter((x) => {
            return x.info.sla.deliveryTime < 30
        })
        setBodyCards(fast)
    }
    function handleTopRatings() {
        const ratings = bodyCards.filter((x) => {
            return x.info.avgRating > 4.5
        })
        setBodyCards(ratings)


    }
    function handleSearch() {
        const searching = bodyCards.filter((x) => {
            return x.info.name.toLowerCase().includes(search.toLowerCase())
        })
        setBodyCards(searching)
    }
    if (bodyCards.length == 0) {
        return <BodyShimmer />
    }
    else {
        return (
            <div>
                <h1>Restaurants with online food delivery in Bangalore</h1>
                <div className="button-flex">
                    <div>
                        <button className="f-btn" onClick={handleFastDelivery}>Fast delivery</button>
                        <button className="f-btn" onClick={handleTopRatings}>Ratings 4.5+</button>
                    </div>

                    <div>
                        <input type="search resto" value={search} onChange={(x) => { setSearch(x.target.value) }} />
                        <button onClick={handleSearch}>search</button>
                    </div>
                </div>
                <div className="body-card-flex">
                    {
                        bodyCards.map((x) => {
                            return <FoodCard data={x} />
                        })
                    }




                </div>
            </div>
        )
    }


}
export default BodyCards