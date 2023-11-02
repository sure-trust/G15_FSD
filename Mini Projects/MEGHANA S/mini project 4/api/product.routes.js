import express from 'express'

import Product from '../model/product.model.js'

const router= express.Router()

//when i say a / in products route /api/v1/products, localhost:5000 
router.route('/').get((req,res)=>{
    Product.find()
    .then(products=>res.json(products))
    .catch(err=>res.status(400).json(err))
})

//api/v1/products/add  -post
router.route('/add').post((req,res)=>{

    const name=req.body.name
    const price=req.body.price
    const newProduct =  new Product({name,price})

    newProduct.save()
    .then(()=>res.json('Product added'))
    .catch(err=>res.status(400).json(err))

})

//api/v1/products
router.route('/:id').get((req,res)=>{
    Product.findById(req.params.id)
    .then((product)=>res.json(product))
    .catch(err=>res.status(400).json(err))

})


router.route('/:id').delete((req,res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then(()=>res.json({msg:'Product deleted'}))
    .catch(err=>res.status(400).json(err))
    
})


router.route('/:id').put((req,res)=>{
    Product.findById(req.params.id)
    .then((product)=>{
        product.name=req.body.name
        product.price=req.body.price

        product.save()
        .then(()=>res.json({msg:'Product successfuly updated'}))
        .catch(err=>res.json(err))
    }).catch(err=>res.json(err))})

export default router