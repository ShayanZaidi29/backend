const express = require('express')
const router = express.Router()
const food_item = require('../models/FoodItem')
const cat = require('../models/FoodCategory')

router.post('/foodData', async(req,res)=>{
    try {
       
        const all = await food_item.food_items.find({});
        res.send(all)
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})


router.get('/foodData/options', async(req,res)=>{
    try {
       
        const all = await food_item.food_items.find({}, {"description":0,
                            "CategoryName":0, "img":0, "id":0});
        res.send(all)
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

router.post('/foodCategory', async(req,res)=>{
    try {
       
        const allfoodcategory = await  cat.find({})
        res.send(allfoodcategory)
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})
module.exports = router;