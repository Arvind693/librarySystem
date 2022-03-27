let express=require("express");

let app=express();

module.exports=app;

let book=require("./controller/bookController");

app.use(express.json());

app.use("/books",book)