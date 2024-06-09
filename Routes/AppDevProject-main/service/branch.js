const Branch=require("../Model/Branch");

const createBranch= async(maneger,id, adress)=>
{
    const branch=new Branch({
        maneger:maneger,
       // workersId:[], //todo get from creator
       // ordersId:[],
       // stockID:[], //the ids of all the products in stock
      //  income:0,
        branchId: id,
       // menuId: []//todo get from creator
       adress:adress
    })
    
    return await branch.save();

}

const deleteAllBrunch= async() =>
{
    await Branch.deleteMany({});
    //await GiftCard.deleteMany({});
}

const getBranch= async(filter)=>
{
    return await Branch.find(filter);
}

module.exports= {
    deleteAllBrunch,
    createBranch,
    getBranch
}
