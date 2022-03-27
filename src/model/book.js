let mongoose=require("mongoose");

let bookSchema=new mongoose.Schema(
    {
        section:{type:String,required:true},
        book:{type:String,required:true},
        author:{type:String,required:true},
        firstName:{type:String,required:true},
        lastName:{type:String,required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports=mongoose.model("book",bookSchema);