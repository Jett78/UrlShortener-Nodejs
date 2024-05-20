const express = require('express');
const URL = require('../models/url');

const router = express.Router()

router.get("/",async (req,res)=>{
    const allurl = await URL.find({})
    return res.render("home",{
        urls:allurl,
    });
})
module.exports = router
