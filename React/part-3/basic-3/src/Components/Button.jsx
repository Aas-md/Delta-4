function onClick() {
    console.log("Hello Aas")
}

const onHover = ()=>{
    console.log("On mouse hover")
}


function Button() {

    return (
        <div>
            <button onClick={onClick}>click me</button>
            <p onMouseOver={onHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum adipisci labore dignissimos, odit aut iusto mollitia, recusandae ratione aliquam dolores, praesentium ducimus animi inventore quibusdam atque facilis provident itaque.
                Aut vero quisquam fuga quasi molestias vitae iste tempora optio? Sed id ea eaque, distinctio minima quis veritatis praesentium, ad iure odio unde. Ipsam saepe quasi inventore iusto beatae quam.</p>
        </div>
    )
}

export default Button