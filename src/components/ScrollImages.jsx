
import React from 'react'
import { useState, useEffect } from 'react'
import ImageShimmer from './shimmer/imageShimmer';


function ScrollImages() {
    const [images, setImages] = useState([]);

    async function swiggyImages() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json()
        setImages(data.data.cards[0].card.card.imageGridCards.info)
    }
    useEffect(() => {
        swiggyImages()
    }, []);

    if(images.length==0){
        return<>
        <h1>Loading...</h1>
            <ImageShimmer/>
        </>
    }
    else{
         return (
        <>
            <h1>ROJA,What's on your mind?</h1>
            <div className='scroll'>
                {
                images.map((x)=> {
                return (
                    <div>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${x.imageId}`}/>
                            </div>
                        )

                    })
                }

            </div>
            </>
        
    )

    }



   
}


export default ScrollImages