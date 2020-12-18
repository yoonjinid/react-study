const express=require('express')
const app=express()
const port=5000
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://myoung:dbs12wls@boilerplate.zqjjp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true, userUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))


app.get('/',(req,res)=>res.send('Hello world! 안녕!'))
app.listen(port,()=>console.log(`Example app listening on port ${port}`))