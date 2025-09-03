const products = require('./productModel')

//add products
exports.addProductsController = async (req,res) =>{
    // console.log('inside controller');
    const {productName , productId , price , quantity , category} = req.body
    try {
        

        //validation
        if(!productName || !productId || price == null){
           return res.status(400).json('Required fields are missing!')
        }
        if(price < 0 || quantity < 0){
           return res.status(400).json('Price and Quantity must be positive')
        }


        const existingProduct = await products.findOne({productId})
       if(existingProduct){
         res.status(401).json('Product ID already exists')
       }
       else{
        const newProduct = await new products({productName , productId , price , quantity , category})
        await newProduct.save()
        res.status(200).json(newProduct)
       }

    } catch (error) {
       res.status(500).json(error) 
    }
    
    
}

//get all products
exports.getAllProductsController = async (req,res)=>{
    const searchkey = req.query.search
    try {
        const allproducts = await products.find({productName :{$regex:searchkey,$options:'i'}})
        res.status(200).json(allproducts)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get products by ID
exports.getProductByIdController = async (req,res)=>{
     const {id} = req.params
    try {
      
       const productDetails = await products.findById(id)

       if(productDetails){
        res.status(200).json(productDetails)
       }
       else{
        res.status(401).json('Product not found!')
       }
       

    } catch (error) {
        res.status(500).json(error)
    }
}

//update product details
exports.updateProductController = async (req,res) =>{
    const {id}= req.params
    const updates = req.body
  //  console.log(id,updates);
    
    
    
    try {
        //validation
        if(!updates.productName || !updates.productId || updates.price == null){
           return res.status(400).json('Required fields are missing!')
        }
        if(updates.price < 0 || updates.quantity < 0){
           return res.status(400).json('Price and Quantity must be positive')
        }

        const updatedProduct = await products.findByIdAndUpdate(id,updates,{new:true})
        if(updatedProduct){
            res.status(200).json(updatedProduct)
        
        }
        else{
           res.status(401).json('Update Failed!') 
        }

    } catch (error) {
       res.status(500).json(error) 
    }
}

//delete product
exports.deleteProductController = async (req,res)=>{
    const {id} = req.params
    try {
        const deletedProduct = await products.findByIdAndDelete(id)

        if(deletedProduct){
            res.status(200).json(deletedProduct)
        }
        else{
            res.status(401).json('Delete Failed!')
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}