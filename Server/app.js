import express from "express"


const app = express()

app.get("/healthcheck",(req,res)=>{
    res.send("OK")
})



app.listen(3010,()=>{
    console.log("Server Start :)")
})