import { useState } from "react"

export default function LikeButton() {

    let [isLike, setisLike] = useState(1)

    function updateLike() {
        setisLike(isLike ^ 1)
        console.log(isLike);
    }

    let styel = {
        color : "red"
    }

    return (
        <div>
            <p onClick={updateLike}>
                {isLike == 0 ? <i className="fa-regular fa-heart"></i> :
                    <i style = {styel} className="fa-solid fa-heart"></i>}</p>

        </div>
    )
}

