import { Product } from "../Services/products.model.js"

export const getProducts =(req,res)=>{
    try{

        Product.find({},function(err,products){
            if(err){
                res.status(404).send("Couldn't Get Products")
            }else{
                res.status(200).send(products)
            }
        })
    }catch(e){
        res.status(400).send(e)
    }
}

export const getProduct =(req,res)=>{
    try{
        const productId = req.params.id
       
        Product.findById({_id:productId},function(err,products){
            if(err){
                res.status(404).send("Couldn't Get Products")
            }else{
                res.status(200).send(products)
            }
        })
    }catch(e){
        res.status(400).send(e)
    }
}
export const getProductByActive =async (req,res)=>{
    try{
        const productActive = req.query
       const active = await Product.find({
        isActive:true
       })
      
        console.log(active);
       res.status(200).json({
        status:'success',
        results:active.length,
        data:{
            active,
        }
       })
       
    }catch(e){
        res.status(400).send(e)
    }
}
export const getProductByPriceRange =async (req,res)=>{
    try{
        const {price} = req.query
        console.log(req.query);
        const active = await Product.find({
         price: {$lt: price.lt , $gt:price.gt}
       
        
         
         
        })
        console.log(active);
       res.status(200).json({
        status:'success',
        results:active.length,
        data:{
            active,
        }
       })
       
    }catch(e){
        res.status(400).send(e)
    }
}


export const postProducts =async (req,res)=>{
   try{

       const newProduct = await Product.create(req.body)
       console.log(newProduct);
       res.send(newProduct)
    }catch(e){
        res.status(400).send(e)
    }
   
 

}
export const patchProduct =async (req,res)=>{
   try{
        const {id} = req.params
        const active = req.body.isActive
        const priceinp = req.body.price
        console.log(active);
        console.log(priceinp);
       const editProduct = Product.findOneAndUpdate({
        _id:id
       },
       {isActive:active , price:priceinp},
       function(err,result){
        if(err){
           console.log(err);
        }else{
            res.send(`${result} has Been Changed`)
        }
       }
       )
     
    }catch(e){
        res.status(400).send(e)
    }
   

}
export const delProduct =async (req,res)=>{
   try{
        const {id} = req.params
      
    
       const removeProduct = Product.findByIdAndRemove({
        _id:id
       },
      
       function(err,result){
        if(err){
           console.log(err);
        }else{
            res.send(`${result} has Been Deleted`)
        }
       }
       )
     
    }catch(e){
        res.status(400).send(e)
    }
   

}
export const delAllProducts =async (req,res)=>{
   try{
      
      
    
        Product.deleteMany(
       function(err,result){
        if(err){
           console.log(err);
        }else{
            res.send(` All has Been Deleted`)
        }
       }
       )
     
    }catch(e){
        res.status(400).send(e)
    }
   

}