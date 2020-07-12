const express = require("express")

const app =  express()

app.set("port",process.env.PORT||2000)

app.get('/api/timestamp/:date_string',(req,res)=>{
    const {date_string} =req.params
    console.log(date_string);    
    if(date=="Invalid Date" || date_string==undefined)
    return res.json({"error" : "Invalid Date" })    
    let date = new Date(date_string)        
    res.json({unix:date.getTime(),utc:date.toUTCString()})
})



app.listen(app.get('port'),()=>{
    console.log("server on port: ",app.get('port'));
})