const Product = require ('../models/product')

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products"
    })
}


//Create new Product 
// => /api/v1/admin/product/new [POST]

exports.newProduct = async(req, res, next) =>{
    //Saving data to the database 

    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
}

//Update Product 
// => /api/v1/admin/product/:id [PUT]

exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product){
        return res.status(404).json({
            success: true,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}