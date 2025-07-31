import { useState } from "react"
import './Comment.css'
import CommentForm from './CommentForm'



export default function Comment() {

    let [comments, setComments] = useState([{
        username: "@Aas",
        remark: "good job",
        rating: 4
    }])

    let addComment = (comment) => {
        setComments((currComments) => {
            return [...currComments, comment]
        })
        console.log("comment added")
    }

    return (
        <div>

         

            <CommentForm addNewComment={addComment} />
            <br /><br /><br />
                <hr />

                <br /><br /><br />

            <h3>All Comments</h3>

            {
            comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.remark}</span>
                    &nbsp;&nbsp;
                    <span>rating = {comment.rating}</span>
                    <br /><br />
                    <p>{comment.username}</p>
                </div>
            ))
            }


           
        </div>
    )
}