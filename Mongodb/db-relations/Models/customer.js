const mongoose = require('mongoose');
const { Schema } = mongoose;

// one to many


main().then(() => {
    console.log("connected with databse");
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}




const orderSchema = new Schema({
    item: String,
    price: Number
})

const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

// mongoose pre and post midle wares

// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("pre midleware");
// })

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }

})

const Customer = mongoose.model("Customer", customerSchema);



let findCustomer = async () => {

    let res = await Customer.find().populate("orders")
    console.log(res[0]);

}

let addOrders = async () => {

    let result = await Order.insertMany([
        { item: "Samosa", price: 10 },
        { item: "Chips", price: 20 },
        { item: "Chocolate", price: 40 }]
    );
    console.log(result);
}


const addCustomer = async () => {

    let customer1 = new Customer({
        name: "Karan Ajun",

    })

    let order = new Order({
        item: "Burger",
        price: 200
    })
    customer1.orders.push(order);

    await customer1.save();
    await order.save();
    console.log("Customer saved to db");


}


// addOrders();

// addCustomer();

// findCustomer();

//handling deletion.

let deleteCus = async () => {

    let deletedCustomer = await Customer.findByIdAndDelete("687cdc16c7fb566401f55d91");
    console.log(deletedCustomer);

}

deleteCus();




