let express=require("express");

let connect=require("./db/configs")
let app=require("./index");

app.use(express.json());

app.listen(5000,async()=>{
    try {
        await connect()
        console.log("This is port of 5000");
    } catch (error) {
        console.log(error)
    }
})