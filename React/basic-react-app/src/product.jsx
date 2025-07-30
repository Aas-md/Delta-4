import './Product.css'
import Price from './Price'

function Product({ title, idx }) {
    let oldPrice = ['12,000', '1,000', '1200', '10,000']
    let newPrice = ['11,000', '900', '1100', '9,000']
    let desc = ['desc 1 but not word the same', 'desc 2 but not word the same', 'desc 3 but not word the same','desc 4 but not word the same']
    return (
         
        <div className="Product">
           
            <h1>{title}</h1>
            <p>{desc[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )

}

export default Product