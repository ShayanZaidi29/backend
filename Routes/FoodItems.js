const express = require('express');
const router = express.Router();
const food_item = require('../models/FoodItem');


router.get('/all/food-items', async(req, res) =>{
    try{

        const allCategories = await food_item.allCategories();
        res.json(allCategories);

    }catch(e){
        return res.json({"error" : true, "message": e})
    }
  
})

module.exports = router;