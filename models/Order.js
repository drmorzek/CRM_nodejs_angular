const { Schema , model} = require('mongoose');

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        default: ""
    },
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
})

module.exports = model("orders", orderSchema)