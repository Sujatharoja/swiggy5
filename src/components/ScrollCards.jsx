import React from "react";
import FoodCard from "./FoodCard";
import { useState,useEffect } from "react";
import ImageShimmer from "./shimmer/imageShimmer";

function ScrollCards() {


    const [cards,setCards]=useState([])
   async function cardsFetch(){
       const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const data=await response.json()
       setCards(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
        
    }
    useEffect(()=>{
        cardsFetch()
    },[])
    if (cards.length==0){
        return(<ImageShimmer/>)
    }

    else{
        return (
        <div>
            <h1>Top restaurant chains in Bangalore</h1>
            <div className="card-flex">
                {
                    cards.map((x)=>{
                        return <FoodCard data={x}/>
                    })
                }
                
                
                

            </div>
        </div>
    )
}

    }
    
export default ScrollCards