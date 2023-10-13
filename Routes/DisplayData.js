const express = require('express')
const router = express.Router()
const food_item = require('../models/FoodItem')

router.post('/foodData', async(req,res)=>{
    try {
       
        const all = await food_item.find({});
        console.log(all);
        res.send(all)
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;