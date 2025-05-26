const express=require("express")
const cors=require("cors")

const PORT=process.env.PORT||1000
const app=express()

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)})

