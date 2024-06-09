const Product = require("../Model/product");

const createProduct= async (price, foodType, name,  points, id) =>{
    const product=new Product({
        price: price,
        foodType: foodType,
        id:id,
        name:name,
        otherCategories:null,
        points:points,
    })

    
    return await product.save();

}



const deleteAllProducst= async() =>
{
    await Product.deleteMany({});
}

const getProduct= async(filter)=>
{
    return await Product.find(filter);
}

const getProductByInfo= async(points, foodType, price)=>{

    const product= await Product.find({points:points,foodType:foodType,price:price})
    if(product!=null)
    {
        return product
    }
}


module.exports= {
    deleteAllProducst,
    createProduct,
    getProduct,
    getProductByInfo
}





