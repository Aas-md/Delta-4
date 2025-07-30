import Product from "./product"

function productTab() {

    let style = { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }
    return (
        <div style={style}>
            <Product title="Apple" idx={0} />
            <Product title="Microsoft" idx={1} />
            <Product title="Amazon" idx={2} />
            <Product title="Google" idx={3} />

        </div>
    )
}

export default productTab;