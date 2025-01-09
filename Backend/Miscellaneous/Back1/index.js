const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req,res)=> {
   let { user,password } =  req.query;

   res.send(`Standared GET Request. Welcome ${user} ! `);
});


app.post("/register", (req,res)=> {
  let { user,password } =  req.body;
    res.send(`Standared POST Request. Welcome ${user} ! `);
  });

  
app.listen(port,() => {
  console.log(`Listining to Port ${port}`);
});