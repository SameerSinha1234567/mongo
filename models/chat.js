const mongoose=require("mongoose");
const ChatSchema=new mongoose.Schema({
  from:{
    type:String
  },
  to:{
    type:String
  },
  message:{
     type:String,
  },
  created_at:{
    type:Date,
    required:true
  }
});
const Chat=mongoose.model("Chat",ChatSchema);
module.exports=Chat;