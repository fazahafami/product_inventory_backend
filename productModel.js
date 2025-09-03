const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
    },
     productId : {
        type : String,
        required : true,
        unique : true
    },
     price : {
        type : Number,
        required : true,
        min : 0
    },
     quantity : {
        type : Number,
        default : 0,
        min : 0
    },
     category : {
        type : String,
        default : ''
        
    },

})

const products = mongoose.model('products',productSchema)
module.exports = products  