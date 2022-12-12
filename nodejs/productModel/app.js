import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/productsDB');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    category: {
        type:String,
        required:true
    },
    isActive:Boolean,
    details:{
        type:Object,
        description:{
            type:String,
            required:true,
            min: [10,'Must Be At Least 10,Got {VALUE}']
        },
        price:{
            type:Number,
            min:0,


        },
        discount:{
            type:Number,
            default:0,
        }
      

    },
    images:{
        type:Array,
        min:[2,'2 Images must be inputed']
    },
    phoneNumber:{
        type:Number,
        trim:true,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    },
    DateAdded:{
        type: Date
    }

})

const Product = mongoose.model("Product",productSchema);

const shoe = new Product({
    name:"Nike",
    category:"Sports",
    isActive:true,
    details:{
        description:"a very nice shoe to run at morning",
        price:24,
        discount:10

    },
    images:[
        'image1.jpg','image2.jpg'
    ],
    phoneNumber: +972-52-9991111,
    Date: new Date()

})
const jacket = new Product({
    name:"Adidas",
    category:"Sports",
    isActive:true,
    details:{
        description:"a very nice jacket in the winter",
        price:64,
        discount:20

    },
    images:[
        'image1.jpg','image2.jpg'
    ],
    phoneNumber: +972-52-9991111,
    Date: new Date()

})
const shorts = new Product({
    name:"Puma",
    category:"Sports",
    isActive:false,
    details:{
        description:"a very nice shorts for sports",
        price:34,
        discount:5

    },
    images:[
        'image1.jpg','image2.jpg'
    ],
    phoneNumber: +972-52-9991111,
    Date: new Date()

})

Product.insertMany([shoe,jacket,shorts],function(err){
    if (err){
        console.log(err);
    }else{
        console.log(`Prodcuts Succesfully Added`);
    }
})

