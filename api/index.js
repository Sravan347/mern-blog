const express=require('express')
const { mongoose } = require('mongoose')
const dotenv = require('dotenv')
const userRoute =require('./routes/userRoute')
const authRoute =require('./routes/auth.route')
const app = express()
dotenv.config()


app.use(express.json())
app.use('/',userRoute)
app.use('/',authRoute)









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

