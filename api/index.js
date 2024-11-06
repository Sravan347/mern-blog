const express=require('express')
const { mongoose } = require('mongoose')
const dotenv = require('dotenv')
const api =require('./routes/userRoute')
const app = express()
dotenv.config()


app.use(express.json())
app.use('/',api)









mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("database is connected");
    
}).catch((err)=>{
    console.log(err);
    

})


const port=5000
app.listen(port,()=>{
    console.log(`server is running on  port${port} `);
    
})
//mernBlog

