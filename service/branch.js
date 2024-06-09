const Branch=require("../Model/Branch");

const createBranch= async(maneger,id, adress)=>
{
    const branch=new Branch({
        maneger:maneger,
        branchId: id,
       adress:adress
    })
    
    return await branch.save();

}

const deleteAllBrunch= async() =>
{
    await Branch.deleteMany({});
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
