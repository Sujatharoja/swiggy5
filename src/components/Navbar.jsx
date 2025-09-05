import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function Navbar(){
    const cartLength=useSelector((state)=>{
     return state.cart.items.length  
    })

    console.log(length)
    return(
        <div>
            <nav className='nav'>
                <Link to='/'>
                <img className="logo" src="data:image/png;base64,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" alt=""/>
                </Link>
                
                <ul>
                    <Link><li><i className="bi bi-tv"></i>Swiggy corporate</li></Link>
                    <Link to='/Search'><li><i class="bi bi-search"></i>Search</li></Link>
                    <Link><li><i className="bi bi-gift"></i>Offer</li></Link>
                    <Link><li><i className="bi bi-patch-question"></i>Help</li></Link>
                    <Link> <li><i className="bi bi-person-circle"></i>Roja</li></Link>
                    <Link to='/Cart'><li><i className="bi bi-cart-check"></i>Cart {cartLength}</li></Link>                   
                </ul>
                
                </nav>
            
            
            </div>
    )
}
export default Navbar