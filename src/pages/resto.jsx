import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactOffer } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'


function restoOffer(props) {
    return (
        <div className='menuItem'>
            <h5>{location.pathname.replace(/%/g, ' ').replace(/\d+/g, "")}</h5>
            <h1>{KFC}</h1>
            <div className='c1'>
                <div className='c2'>
                    <h3>
                        <span className='star'><i className="bi bi-star-fill"></i></span>{restaurantInfo.avgRating}
                    </h3>
                    <h4><u>{restaurantInfo.name}</u></h4>
                    <ul>
                        <li><h5>outlet <span>{restaurantInfo.areaName}</span></h5></li>
                        <li><h5>{restaurantInfo.sla?.slaString}</h5></li>
                    </ul>
                </div>

            </div>

        </div>
    )

}




function RestoItem(props) {
    const dispatch=useDispatch()

    const [count, setCount] = useState(0)


    function handleAddItem() {
        dispatch(addItem(props.data.card.info))
        setCount(count + 1)
    }
    function handleRemoveItem() {
        setCount(count - 1)
    }
    
    return (
        <div className='resto-item'>
            <div className='data'>
                <h3>{props.data.card.info.name}</h3>
                <p>{props.data.card.info.defaultPrice / 100}</p>
                <p>{props.data.card.info.ratings.aggregatedRating.rating}({props.data.card.info.ratings.aggregatedRating.ratingCountv2})</p>
                <p>{props.data.card.info.description}</p>
            </div>
            <div className='image-data'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${props.data.card.info.imageId}`}></img>
                <div className='btn-flex'>
                    <button onClick={handleRemoveItem}>-</button>
                    <p>{count}</p>
                    <button onClick={handleAddItem}>+</button>
                </div>
            </div>
        </div>
    )
}
function RestoPage() {
    const [RestoItems, setRestoItems] = useState([])
    const { id } = useParams()
    async function RestoPagefetch() {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const result = await response.json()
        console.log(result)
        //console.log(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        setRestoItems(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    }
    useEffect(() => {
        RestoPagefetch()
    }, [])
    return (
        <div className='resto-page'>
            {
                RestoItems.map((x) => {
                    return <RestoItem data={x} />
                })
            }
        </div>
    )
}
export default RestoPage