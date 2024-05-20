const express = require('express');
const urlRouter = require('./routes/url')
const staticRouter = require("./routes/staticRouter")
const URL = require('./models/url')
const path = require('path')
const {connectToMongoDb} = require('./connect')
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{console.log("Connection Successful")})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ejs
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

//routes
// app.get('/:shortId',async (req,res)=>{
//    const shortId = req.params.shortId;
//    const entry =  await URL.findOneAndUpdate({
//     shortId
//    },{$push:{
//     visitHistory:{
//        timestamp: Date.now(),
//     },
//    }})
//    res.redirect(entry.redirectURL)
// })
app.use("/url",urlRouter)
app.use("/",staticRouter)
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})