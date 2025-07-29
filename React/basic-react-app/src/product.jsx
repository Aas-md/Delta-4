function Product({title,price,owners}){
   let list = owners.map((owner)=><li>{owner}</li>)
   let style = {backgroundColor : price >= 20000 ? "pink" : ""}
    return (
        <div style={style}>
            <h1>price : {price}</h1>
            <h3>Titke : {title}</h3>
            <p>owners : {list}</p>
            {price >= 20000  && <p>"5% Discount eligible"</p>}
        </div>
    )

}

export default Product