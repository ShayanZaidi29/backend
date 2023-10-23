const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db'); // Check the path to db.js

// Corrected CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next(); // Call next to allow the middleware chain to continue
});

app.use(express.json());

// Define your routes after setting up middleware
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

async function startServer() {
    try {
        await connectDB(); // Call the connectDB function to establish the database connection

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
