const express =  require("express");
const app = express();
const Port  = 8080;

// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));

const path = require("path");
app.set("view engine ",  "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req ,res) => {
     res.render("home.ejs");
} );
 

app.get("/rolldice", (req ,res)=> {
   let diceValue = Math.floor(Math.random() * 11) + 1;
   res.render("rolldice.ejs", { diceValue } ); 
});


app.get("/ig/:username", (req ,res)=> {
   let {username} = req.params;

   // let {username} = req.params;
   const instaData = require("./data.json");
   console.log(instaData);
   const data =  instaData[username] ;
 
   if(data) {
   res.render("instagram.ejs", {data});
 } else {
   res.render("error.ejs");
 } 

 });
 

app.get("/hello", (req ,res) => {
    res.send("hello, i am a Programmer");
} );


 app.listen(Port, ()=> {
    console.log(` Listening on Port ${Port}`);
 });