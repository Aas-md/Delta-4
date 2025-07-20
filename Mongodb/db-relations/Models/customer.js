const mongoose = require('mongoose');
const {Schema} = mongoose;

// one to many


main().then(()=>{
    console.log("connected with databse");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username : String,
    address : [
        {
            location : String,
            city : String
        }
    ]
})

const orderSchema = new Schema({
    item : String,
    price : Number
})

const Order = mongoose.model("Order",orderSchema);

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async ()=>{

    let customer1 = new Customer({
        name : "Aas Mohammad",
        
    })

    let orders = await Order.find({price : {$lte : 20}});
    for(let order of orders)customer1.orders.push(order);
    let res = await customer1.save();
    console.log(res);


}

let findCustomer =async ()=>{

    let res = await Customer.find().populate("orders")
    console.log(res[0]);

}

let addOrders = async ()=>{

    let result = await Order.insertMany([
        {item : "Samosa",  price : 10},
        {item : "Chips",price : 20},
        {item : "Chocolate",price : 40}]
    );
    console.log(result);
}



// addOrders();

// addCustomer();

findCustomer();


