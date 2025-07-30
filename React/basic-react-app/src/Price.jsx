import './Price.css'


function Price({oldPrice, newPrice}){
    return (
        <div className='style'>
            <span className="oldStyle">{oldPrice}</span>
            &nbsp; &nbsp;&nbsp;
            <span className="newStyle">{newPrice}</span>
        </div>
    )
}

export default Price