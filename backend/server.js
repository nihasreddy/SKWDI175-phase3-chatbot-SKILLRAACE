const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes.js")
const messageRoutes = require("./routes/message.routes.js")
const userRoutes = require("./routes/user.routes.js")

const connectToMongoDB = require("./db/connectToMongoDB.js")

const app = express(); 

dotenv.config();
const PORT = process.env.PORT; 

dotenv.config();

app.use(express.json())   //used to extract fields from the req.body in controllers
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


//app.get("/",(req,res)=>{
//    res.send("Hello server");
//       })


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
}) 