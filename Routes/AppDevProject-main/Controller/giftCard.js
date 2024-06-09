const { request, response } = require("express");
const GiftCard= require("../Model/giftCard");
const Service= require("../service/giftCard");

const createGiftCard= async(req,res)=>
{
    return await Service.createGiftCard(req.body.id,req.body.amount ,req.body.expiry)

}

function getGiftCard(filter)
{
    return Service.getGiftCard(filter);
}

const deleteGiftCard = async(req,res)=>
{
    await Service.deleteAllGiftCards();
}

module.exports= {createGiftCard, deleteGiftCard, getGiftCard};
