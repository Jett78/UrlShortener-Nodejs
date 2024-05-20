const express = require('express')
const router = express.Router();
const {  generateNewShortUrl,getAnalytics} = require("../controllers/url")

router.post('/',generateNewShortUrl)


router.get('/analytics/:shortId',getAnalytics)

module.exports = router;