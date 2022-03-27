let Book=require("../model/book");

let express=require("express");

let router=express.Router();

router.get("",async(req,res)=>{
    try {
        let book=await Book.find().lean().exec();
        res.send(book); 
    } catch (error) {
        res.send(error);
    }
});
router.post("",async(req,res)=>{
    try {
        let book=await Book.create(req.body);
        res.send(book); 
    } catch (error) {
        res.send(error);
    }
});
router.get("/:id",async(req,res)=>{
    try {
        let book=await Book.findById(req.params.id).lean().exec();
        res.send(book); 
    } catch (error) {
        res.send(error);
    }
});
router.patch("/:id",async(req,res)=>{
    try {
        let book=await Book.findByIdAndUpdate(req.params.id,req.body,{new :true}).lean().exec();
        res.send(book); 
    } catch (error) {
        res.send(error);
    }
});
router.delete("/:id",async(req,res)=>{
    try {
        let book=await Book.findByIdAndDelete(req.params.id).lean().exec();
        res.send(book); 
    } catch (error) {
        res.send(error);
    }
});

module.exports=router;