import React from 'react'
import MobileList from './MobileList'
const books = [{
    title: 'Readme 12',
    price: '100'
},
{
    title: 'Readme 13',
    price: '210'
}]

export default function Mobile(){

    return (
        <div>
            {books.map((ele)=>{
                return <MobileList 
                title ={ele.title} 
                price={ele.price}
                />
            }
            )
        }
        </div>
    )
}