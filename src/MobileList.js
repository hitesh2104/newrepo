import React from "react";
import './MobileList.css'
 export default function MobileList(props){
    const{title,price} =props;
    return(
        <div className='main'>
           <img src=""/>
           <h2>{title}</h2>
           <p>${price}</p>
           <button>add to cart</button>
        </div>
    )
 }