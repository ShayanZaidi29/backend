const mongoose = require('mongoose');
const express = require('express');

const mongoURL = 'mongodb://127.0.0.1:27017/FoodWow';

async function connectDB() {
    try {
        await mongoose.connect(mongoURL);
        console.log("db connected");

        const foodCategorySchema = new mongoose.Schema({
            name: String,
            description: String,
            price: Number,
        }, {
        collection : "foodCategory"
    });

    const foodCategory = mongoose.model('foodCategory', foodCategorySchema);


    const all = await foodCategory.find();
    
        } catch(e){
            console.log(e);
        }

    }

function startServer() {
    const app = express();

    
    // Configure your server routes and middleware here

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports=connectDB