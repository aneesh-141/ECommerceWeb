const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product Price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product Description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
       {
           public_id: {
               type: String,
               required: true  
           },
           url: {
            type: String,
            required: true  
           }
       }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values:[
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Sports',
                'Home',
                'Outdoor',
                'Clothes/ Shoes',
                'Beauty/Health',
                'Books'
            ],
            message: 'Please select correct product category'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product Seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product Stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [],
    createdAt: {
       type: Date,
       default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)