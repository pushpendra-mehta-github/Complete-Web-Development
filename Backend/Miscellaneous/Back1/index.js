const express = require("express");
const app = express();
const port = 8080;


app.get("/register", (req,res)=> {
   let { user,password } =  req.query;

   res.send(`Standared GET Request. Welcome ${user} ! `);
});

app.post("/register", (req,res)=> {
    res.send("Standared POST Request ");
  });

  
app.listen(port,() => {
  console.log(`Listining to Port ${port}`);
});