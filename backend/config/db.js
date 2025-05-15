const mongoose = require("mongoose");
const { log } = require("node:console");

const connectDB = async () => {
    try {
        await  mongoose.conn
    } catch (error) {
        console.log("Mongodb not connected")
        
    }
    
}