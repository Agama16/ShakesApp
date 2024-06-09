const GiftCard=require("../Model/giftCard");

const createGiftCard= async(id, amount, expiry)=>
{
    const giftCard=new GiftCard({
        id:id,
        amount:amount,
        expiry:expiry
    })
    
    return await giftCard.save();

}

const deleteAllGiftCards= async() =>
{
    await GiftCard.deleteMany({});
    //await GiftCard.deleteMany({});
}

const getGiftCard= async(filter)=>
{
    return await GiftCard.find(filter);
}

module.exports= {
    deleteAllGiftCards,
    createGiftCard,
    getGiftCard
}
