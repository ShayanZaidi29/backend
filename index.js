const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db'); // Check the path to db.js

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"))

async function startServer() {
    try {
        await connectDB(); // Call the connectDB function to establish the database connection

        // Rest of your code
        // ...

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

       
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

startServer();
