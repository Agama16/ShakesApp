// const Worker=require ("../Model/worker");
const Worker=require("../Model/worker")


const createWorker= async (userId, firstnNme,sureName, phone, salary, rank,branchId, password )=>
{
    
    const worker=new Worker({
    userId:userId,
    firstName:firstnNme,
    sureName:sureName,
    phone:phone,
    salary:salary,
    rank:rank, 
    branchId:branchId,
    password:password,
    })

    return await worker.save();
    
}

const deleteAllWorkers= async() =>
{
    await Worker.deleteMany({});
}

const getWorker= async(filter)=>
{
    return await Worker.find(filter);
}

async function deleteOneWorker(userId)
{
    const worker = await Worker.findOne({ userId:userId });
    if(worker!=null)
    {
        await Worker.deleteOne(worker)
    }
}

const getWorkerByInfo= async(salary, rank, branchId)=>{

    const worker= await Worker.find({salary:salary,rank:rank,branchId:branchId})
    if(worker!=null)
    {
        return worker
    }
}

module.exports= {
    deleteAllWorkers,
    createWorker,
    getWorker,
    deleteOneWorker,
    getWorkerByInfo
}
