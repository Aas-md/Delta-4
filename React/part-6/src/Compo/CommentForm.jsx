import { useState } from "react"
import { Formik } from 'formik';

export default function CommentForm({addNewComment}) {

    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 0
    })

    let handleInput = (event) => {

        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault()
        console.log(formData);
        addNewComment(formData)
        setFormData({
            username : '',
            remark : '',
            rating : 0
        })
    }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Please enter your user name</label>
            <input id="username" value={formData.username} onChange={handleInput} name="username" />

            <br /><br />
            <label htmlFor="remark">Please enter a comment</label>
            <input id="remark" value={formData.remark} onChange={handleInput} name="remark" />
            <br /><br />
            <label htmlFor="rating">Please enter your user name</label>
            <input type="range" id="rating" value={formData.rating} onChange={handleInput} name="rating" min="0" max="5" />

            <br /><br />
            <button>Submit</button>
        </form>
    )
}