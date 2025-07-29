function Inner({title,desc,oldPrice,newPrice}){

    return (
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{oldPrice} {newPrice}</p>
        </div>
    )
}


export default Inner;