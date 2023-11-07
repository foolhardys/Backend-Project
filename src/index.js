import dotenv from 'dotenv'
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import { DB_NAME } from './constants.js'

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         console.log(`\n MONGODB connected !! DB Host :${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection ERROR:", error);
//         process.exit(1)
//     }
// }

dotenv.config({
    path: './env'
})

connectDB()
