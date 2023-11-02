import { Schema, mongoose } from "mongoose";

const productSchema=new Schema({

        name:{
            type:String,
            required:true,
            minlength:3

        },
        price:{
            type:Number,
            required:true,

        }},
        {
            timestamps:true
        }

)

const Product = mongoose.model("Product",productSchema)

export default Product