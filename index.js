
const { constants } = require("buffer");
const express = require("express");
const app =  express();
const port  = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended :true }));
app.set("view engine", "ejs");
app.set("view engine", path.join(__dirname, "views"));

app.use(express.static( path.join(__dirname, "public")));

let posts = [ 
  {
  Id : uuidv4(),
  username : "pushpendra",
  content : "pushpendra Software Enginear"
 },

 {
  Id : uuidv4(),
  username : "Arpit",
  content : "Arpit is a Doctor"
 },

 {
  Id : uuidv4(),
  username : "Manish",
  content : "Manish is a Government Teacher"
 }
 ] ;



app.get("/",(req,res)=>{
  res.send("Server Working well !");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts} );
})

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
  let {username,content} = req.body;
  let Id = uuidv4();
  posts.push({Id,username,content});
  res.redirect("/posts");

});


app.get("/posts/:Id",(req,res)=>{
 let {Id} =  req.params;
 console.log(Id);
 let post = posts.find((p) => Id === p.Id);
 console.log(post);
 res.render("show.ejs",{post});
 
});


app.patch("/posts/:Id",(req,res)=>{
  let {Id} =  req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => Id === p.Id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
  
 });


 app.get("/posts/:Id/edit",(req,res) =>{
  let {Id} =  req.params;
  let post = posts.find( (p) => Id === p.Id );
  res.render("edit.ejs",{post});
  res.send("Edit Request Successful ");
 })


 app.delete("/posts/:id",(req,res) =>{
  let {Id} =  req.params;
  posts = posts.filter( (p) => Id !== p.Id );
  res.redirect("/posts");
  console.log("delete succesful");
 })



 app.listen(port,() => {
  console.log("Listening on port : 8080 ");
})