import { useState } from "react"

export default function Form() {

   let [formData,setFormData] = useState({
    fullname : "",
    username : ""
   })

   let handleInput = (event)=>{

        setFormData((currData)=>{
           
            return {...currData , [event.target.name] : event.target.value}
        })

   }

   let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData)
    setFormData({
        fullname : "",
        username : ""
    })
   }

  

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Enter your name</label>
            <input value={formData.fullname} onChange={handleInput} name= "fullname" placeholder="Enter fullname" id="fullname" />
            <br /><br /><br />
             <label htmlFor="username">Enter your username</label>
            <input value={formData.username} onChange={handleInput} name="username" placeholder="Enter username" id="username" />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}