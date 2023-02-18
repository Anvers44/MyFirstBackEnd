import express from "express"
import {connect} from "./utils/database.js";


const app = express()

app.get("/healthcheck",(req,res)=>{
    res.send("OK")
})

app.listen(3010,()=>{
    console.log("Server Start :)")
    connect()
})