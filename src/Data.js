import React,{ useState } from "react";
import datas from './datas.json'

export default function Data(){
    const[nData, setnData] = useState(datas)

    const clearData =() =>{
        setnData([]);
    }
    const removeData =(itemId) =>{
        console.log(itemId);
        setnData(nData.filter(item => item.id !== itemId))
    }
    const updateData =(itemId) =>{
        setnData(nData.map(items =>{
            if(items.id ===itemId){
                return{name:'newupdate'}
            } else{
                return items
            }
        } ))
    }
   return(
      <ul>
        { nData.map((items) =>{
         return <li key={items.id}>
            {items.id} {items.name} 
            <button onClick={()=>removeData(items.id)}>remove</button>
            <button onClick={()=>updateData(items.id)}>update</button>
         </li>
        }
        )
      }
      <button onClick={clearData}> Clear</button>
      
      </ul>
      
   ) 
}