const express=require("express");
const app =express();
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main()
.then(()=>{console.log("successful connection")})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.listen("8080",()=>{
    console.log("Listening to port 8080");
});
app.use(express.static(path.join(__dirname,"public")));
const chatArray = [
  {
    from: "Neha",
    to: "Palak",
    message: "shaant rho",
    created_at: new Date()
  },
  {
    from: "Ravi",
    to: "Aman",
    message: "Kal movie dekhne chalein?",
    created_at: new Date()
  },
  {
    from: "Sana",
    to: "Isha",
    message: "Assignments complete kar liye?",
    created_at: new Date()
  },
  {
    from: "Aarav",
    to: "Kabir",
    message: "Match kab hai bhai?",
    created_at: new Date()
  },
  {
    from: "Megha",
    to: "Tina",
    message: "Party ki pics bhej na",
    created_at: new Date()
  },
  {
    from: "Kunal",
    to: "Neha",
    message: "Kya haal hai?",
    created_at: new Date()
  },
  {
    from: "Riya",
    to: "Rohit",
    message: "Exam ke notes bhej do",
    created_at: new Date()
  },
  {
    from: "Dev",
    to: "Ankit",
    message: "Code chal gaya bhai!",
    created_at: new Date()
  },
  {
    from: "Tanya",
    to: "Shruti",
    message: "Late night call karte hain?",
    created_at: new Date()
  },
  {
    from: "Varun",
    to: "Divya",
    message: "Kya scene hai aaj?",
    created_at: new Date()
  }
];
Chat.insertMany(chatArray)
  .then(() => console.log("10 chats inserted"))
  .catch(err => console.error(err));

app.get("/chats",async(req,res)=>{
   let chats= await Chat.find();
   console.log(chats);
   res.render("index",{chats});
});

