const mongoose = require('mongoose');
const express = require('express');

const food_itemsSchema = new mongoose.Schema({
    id: String,
    CategoryName: String,
    img: String,
    options: Array,
    description: String,
},
{
    collection: "food_items"
}
);
const food_items = mongoose.model('food_items',food_itemsSchema);


module.exports=food_items