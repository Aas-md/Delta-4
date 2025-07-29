import Product from "./product"

function productTab(){
    let owners = ["Aas","hamza","himanshu","anshuman","joy bhatacharya"]
    return (
        <div>
            <Product title="Phone" price={12000} owners={owners}/>
            <Product title="laptop" price={20000} owners={owners}/>
            <Product title="Charger" price={25000} owners={owners}/>
         
         
        </div>
    )
}

export default productTab;