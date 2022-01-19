const express = require("express");
const mongoose = require("mongoose");
//create express server 
const app = express();
const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes")
const commentRoutes = require("./routes/commentRoutes")


//set Port
const PORT = process.env.PORT || 1800;

//create mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/blogs-database",()=>{
    console.log("connection established ......... with mongo");
});



//express middleware to parsing json data
app.use(express.json())


app.use("/blogs", blogRoutes)


app.use("/users",userRoutes)

app.use("/comments", commentRoutes)


app.listen(PORT, ()=> console.log(`server is running on : ${PORT}`))