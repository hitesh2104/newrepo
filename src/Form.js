import React, {useState} from "react";
export default function Form(){
   // const[name,setName] = useState("")
   const[formData,setFormData] = useState({
    fname:'',
    email:''
   })
   /* const handleName =(e) =>{
    setName(e.target.value)
    } */
    const handleInput =(e) =>{
        const {name,value} = e.target
setFormData({
    [name]:value
})
        }
    const handleSubmit=(e) =>{
        e.preventDefault();
    }
    return(
     <div>
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="fname" onChange={handleInput} value={formData.fname} />
        </label>
        <label>
            Email:
            <input type="text" name="email" onChange={handleInput} value={formData.email} />
        </label>
        <button type="submit">Submit</button>
        </form>
     </div>   
    )
}