import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import   products    from  './api/product.routes.js'
const config = dotenv.config()
//how to create express app
const app=express()

const port=process.env.PORT || 9000

//to inform express application of different domains and routes

app.use(cors())

//no need to separately parse the request body , use the middleware 

app.use(express.json())
//here i am informing server to use middleware
//this is our middleware
// routes for products 
//which we have imported
app.use('/api/v1/products',products)


app.use('/',(req,res)=>res.status(200).json({msg:'Hello world!!'}))

//app.use('*',(req,res)=>res.status(404).json({error:'some error'}))

app.listen(port,()=>{console.log(`listening to port ${port}`)})

const uri=process.env.DB_URI
console.log(uri)
mongoose.connect(uri,{useNewUrlParser:true})

const connection=mongoose.connection
connection.once('open',()=>{

    console.log('MongoDB connected')
})
