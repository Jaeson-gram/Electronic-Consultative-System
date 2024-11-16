import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import messageRoute from "./routes/messageRoute.js";



const app = express();

dotenv.config()
const port = process.env.PORT || 3001;
const uri = process.env.ATLAS_URI;


app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get("/", (request, response) => {
    response.send('Welcome to ECS Chat funtionality APIs')
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`) 
})


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('MongoDB connection established!')).catch((error) => console.log('MongoDB connection failed: ', error.message));


