const express = require("express");

const app  = express();

let port  = 8080;



// app.listen() --> To listen a request from a server

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);

  }
)



// res.send() --> To send a response from a server 

// app.use((req,res) => {
//   console.log("Request Recieved");
//   res.send("hyy this is a new request");
//   res.send({

//     name : "pushpendra",
//     class :"BCA"
//   })
//     let code = "<h1>Fruits</h1> <u> <li>Mango </li> <li>Mango </li> </u>" ;
//     res.send(code);

// } )


// To get Request

app.get( "/", (req,res) => {
  res.send("hello this is a root path ");  
})


app.get( "/Apple", (req,res) => {
    res.send("you contacted Apple path ");  
  })

 
app.get( "/Orange", (req,res) => {
    res.send("you contacted Orange path ");  
  }) 

 
//   app.get("*", (req,res) => {
//     res.send("hello, this is pushpendra mehta and i am a software engineer in greater noida with the salary packdge of 9 lack/Annam if you can contact - 6376832758 ");  
//   })   



//  To post Request


  app.post("/", (req,res) => {
    res.send(" you send a post request ");  
  })   




  //  Path Parameter

  // app.get("/:username/:id",(req,res)=>{
  //   // console.log(req.params);
  //  let { username,id }  = req.params;
  //     // res.send("Hello,i am Root");
  //   res.send(`Welcome to the page of @${username}.`);
  // } );

  app.get("/:username/:id",(req,res)=>{
   let { username,id }  = req.params;
   let htmlStr = `<h1> Welcome to the page of @${username}!</h1>`
   res.send(htmlStr);
  } );


  // Query Strings

  app.get("/search", (req,res) =>{
   let {q} = req.query;
    res.send(`<h1> Search query for : ${q} <h1>`);
  })