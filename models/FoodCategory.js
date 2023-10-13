const mongoose = require('mongoose');
const express = require('express');

const foodCategorySchema = new mongoose.Schema({
            name: String,
            description: String,
            price: Number,
        }, {
        collection : "foodCategory"
    }
    );
        
    const foodCategory = mongoose.model('foodCategory', foodCategorySchema);

    
module.exports=foodCategory   