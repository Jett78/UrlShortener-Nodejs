const shortid = require('shortid')
const URL = require("../models/url")

async function generateNewShortUrl(req,res){
    const shortID = shortid();
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'url is required'})
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    })
return res.render("home",{
    id:shortID
})
};
async function getAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
    })
}
module.exports ={
    generateNewShortUrl,getAnalytics
}