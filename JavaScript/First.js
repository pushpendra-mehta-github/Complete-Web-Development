

// About the console.log 

console.log("this is my first time to learning javascript");
console.log("my favoirate youtove channel is a apna collage wich is very helpfull to  enhance my technical skilss");

let pencilPrice = 20;
let rubberPrice = 25

 totalPrice = "The total Price of pencil and rubber is :"+(pencilPrice + rubberPrice)+"rupees."
console.log(totalPrice);

//or
totalPrice =`The total Price of pencil and rubber is : ${rubberPrice+pencilPrice} rupees`
console.log(totalPrice);

//or
console.log(`The total Price of pencil and rubber is : ${pencilPrice-rubberPrice} rupees`);

//or
console.log(++pencilPrice);


// Unary Operators

let x = 30;

let y = x++;
y = x--;

console.log(`the value of x is : ${x}`);
console.log(`the value of y is : ${y}`);


// Comparision Operators

let age = 18;

console.log(age>18);   // false
console.log(age<18);   // false
console.log(age!=18);   // false


console.log(age>=18);  //true
console.log(age<=18); //true
console.log(age==18);   // true

//Condition Statement 

let AGE = 26;
if(AGE >= 19) {
    console.log("you are elizible for vote");
    console.log("you can drive");  // You can also use this
    console.log("your can play in under-19 "); //You can also use this
}
else{
    console.log("you are  not elizible for vote");
}


let  young= 27;
if(young >= 20) {
    console.log("you are elizible for vote👌");
}
    if(young > 23){
        console.log("you are in your 20s");
    }
    if(young >= 18) {
            console.log("you are a little boy👶");
    } 

else{
    console.log("you are  not elizible for vote");
}

//compare

let firstname = "pushpendra";
if(firstname == "pushpendra"){
     
 console.log(`welcome,${firstname}`);
}
else{
    console.log(`ooPs wrong !,${firstname}`);
}


//Traffic light System

let color = "red";
// let color2= "yellow"; 
// let color3 = "green"; 

if(color == "red") {
    console.log("please stop! light color is red");
 }
    if(color == "yellow") {
        console.log('please go slow,light color is yellow');
    }
        if(color == "green") {
            console.log("please lets go ,light color is green");
        }

  
 // else if statement -check Exam  Marks

 let marks = 81.55;

 if(marks >= 89){  
     console.log("your grade is : A+");
 }
   else if(marks >= 76){
     console.log("your grade is : A");
   }
 
   else if(marks >=47){
     console.log("your grade is : B ");
   }
   else if(marks < 33){
     console.log("you are fail");
   }       
        

// else if statement -check eligibility

let age2 = 24;

if(age2 <= 22){  
    console.log("you are aligible for your exam");
}
  else if(age2 <= 19){
    console.log("you are aligible for vote");
  }

  else if(age2 >= 15){
    console.log("you are kids👶");
  }


  // nested if else  

  let Marks = 91.23;

  if(Marks >= 33){
    console.log("Pass");

    if(Marks >=86){
    console.log("your grade is : 0");
    }
    else{
        console.log("your grade is : A");
    }
  }
  else{
    console.log("Sorry! try to next attempt ");
  }



  //  Locical Oparator -And(&&) OP.

let value = 84;

if(value >=70 && value >=80 ){
    console.log("pass, but not suppicient");
    console.log("welcome!😀 your score is very good👍");
}


/*.1. A "good string" is a string  that start with the later  "a" and has a lenght>3. right a program to find
       if a string good or not */

let string = "Absolute";

if( (string[0] === "a") && (string.length > 3) ){

  console.log("this is a good string!😀");
}
else{
  console.log("this is not a good string!😓");
}


//  Locical Oparator -OR(||) OP.

let num = 15;

if( (num%3 == 0) && (num+2 == 20 || num-3 ==12  ) ){

  console.log("Safe ✅");
}
else{
  console.log("Usafe!⚠️");
}


// Truthy and Falsy value 

// Falsy Values  -   false , 0 ,-0 ,on(bigint value) , ""(empty string),null,Undefined,NaN

if(true) {
  console.log("Wao it's true ✔️")
}
else{
  console.log("Ooops it's a false value ❌")
}


// Switch Case Statement 

let color2 = "red2";

switch(color2){

  case "red2": console.log("stop🖐️");
  break;
  case "yellow2": console.log("go slow🚶‍➡️");
  break;
  case "green2": console.log("lets go🏃‍♂️");
  break;
  default:
    console.log("Broken light 🤖");
}

//Alert  Massage on Screen

// alert("THIS IS A ALERT MASSAGE");

// console.error("this  is an error ");
// console.warn("this is a warning");

// prompt("please enter your name ");   // input from the user

// let myname = prompt("please enter your name "); 

// console.log(myname);



// let fname = prompt("please enter your First name "); 
// let lname = prompt("please enter your Last name "); 

// let MASSAGE = `Welcome ,${fname} ${lname}`

// alert(MASSAGE);



//  STRING METHODS 
// 1. String.trim() -> TO REMOVE WHITE SPACES FROM LEFT & RIGHT

let msg = "   pushpendra   ";   
 console.log(msg.trim());


let msg2 = "   point to point   ";
console.log(msg2.trim());


// let  password = prompt("set your password");
// console.log(password.trim());


// let  password2 = prompt("set your password");

// console.log(password2);


/* 2. String.toUpperCase() -> To Lowercase - Uppercase
and Uppecase to Lowercase  */


let name = "pawan raj";
console.log(name.toUpperCase());  // Lowercase - Uppercase

let name2 = "SHRADA KAPARA ";
console.log(name2.toLowerCase());  //  Uppercase - Lowercase 


//  STRING METHODS with arguments 
//  String.indexOf()

let index  = "ILOVECODING";

console.log(index.indexOf("C"));


// METHOD Chaining 

let chain = "  aman datrawal   ";

let newchain = chain.trim().toUpperCase();

console.log("After trim and Uppercase : ",newchain);


//Slice Methods
//String.slice()

let msg3 = "ApanaCollage";

console.log(msg3.slice(5)); // Collage

console.log(msg3.slice(0,5)); // Apana

console.log(msg3.slice(-3)); // age


// Replace & Repeat Method 
//String.replace()


let msg4 = "MY NAME IS PUSHPENDRA"; 

console.log(msg4.replace("NAME","BIRTH")); // MY BIRTH IS PUSHPENDRA

let msg5 = "MY NAME IS PUSHPENDRA";

console.log(msg5.replace("PUSHPENDRA","RAJ"));  // MY NAME IS RAJ

//String.repeat()

console.log(msg5.repeat(3));  // MY NAME IS PUSHPENDRAMY NAME IS PUSHPENDRA MY NAME IS PUSHPENDRA




//  ARAYS[] 
// let student1 = "aman";
// let student2 = "shrada";
// let student3 = "pushpendra";

let students = ["aman","shrada","pushpendra"];

console.log(students);

//Creating Arrays

let numbers = [8,5,2,7,3];
let names = ["aman","shrada","pushpendra"];
let mixedArray =  ["aman",34,49.03];

console.log(numbers);
console.log(names);
console.log(mixedArray);

console.log([].length);         // Empty Array- 0
console.log([2,3,45].length);    // how many values in  Array - 3


// Arrays are immutable

let fruts = ["mango","jample","apple"];  //To Change Array Indexes

fruts[0] = "banana";  
fruts[1] = "banana";
fruts[2] = "banana";

console.log(fruts);    // "banana","banana","banana"




//Array Methods

//push()

let cars = [ "Fortuner","ranrover","audi","XUV"];

cars.push("KIASoneta","mahedra");  
console.log("After push method Element Add end of array: ",cars); // ['Fortuner', 'ranrover', 'audi', 'XUV', 'KIASoneta', 'mahedra']

//pop()

cars.pop(); 
console.log("After pop method Element Remove from end of array : ",cars);  // ['Fortuner', 'ranrover', 'audi', 'XUV', 'KIASoneta']

// unshift()

cars.unshift("Scarpio")
console.log("After push method Element Add start of array: ",cars);  // ['Scarpio', 'Fortuner', 'ranrover', 'audi', 'XUV', 'KIASoneta']

cars.shift("Scarpio")
console.log("After push method Element Remove start of array: ",cars);  // ['Fortuner', 'ranrover', 'audi', 'XUV', 'KIASoneta']


// indexOf()

let cars2 = ["Fortuner","ranrover","audi","XUV"];

cars2.indexOf("rangrover");  
console.log("The index of ranrover is : ",cars2);  // 2

cars2.indexOf("Toyota");  
console.log("The index of Toyota is : ",cars2);  // -1

//includes()

cars2.includes("audi");
console.log(cars2);       // true

cars2.includes("kwid");
console.log(cars2);       // false





// concatenation & reverse() slice()

let primary  = ['red',"green","yellow"];

let secondary = ["blue","white","purple","pink"];

 let output =  primary.concat(secondary);  //['red', 'green', 'yellow', 'blue', 'white', 'purple', 'pink']
 console.log(output);

 let allcolors =  secondary.concat(primary);  //['blue', 'white', 'purple', 'pink', 'red', 'green', 'yellow']
 console.log(allcolors);

 //everse()

 console.log(primary.reverse()); // ['yellow', 'green', 'red']

 //slice()

 let name3  = ["aman","pawan","rohit","sourav","kapil"];

 console.log("conating all array",name3.slice());                    //   ['aman', 'pawan', 'rohit', 'sourav', 'kapil'] 
 console.log("start from 3rd element of array",name3.slice(3));     //  ['sourav', 'kapil']
 console.log("print between 1 to 3",name3.slice(1,4));              //  ['pawan', 'rohit', 'sourav']
 console.log("Array-1",name3.slice(-1));                            //['kapil']
 


//splice() Method of Array
//splice : removes / replaces / Add Element in space  
//splice : (start,deleteCount,item 0 to item N.......)


let name4  = ["aman","pawan","rohit","sourav","kapil"];

 console.log("remove from 3rd element of array",name4.splice(4));                   //   ["aman","pawan","rohit","sourav"]
 console.log("remove between 0 to 1",name4.splice(0,1));                             //   ["pawan","rohit","sourav"]
 console.log("TO add name of 0 index",name4.splice(0,0,"sachin","pushpendra"));       // ['sachin', 'pushpendra', 'pawan', 'rohit', 'sourav']
 console.log("TO add element in the  middle",name4.splice(1,0,"AAkash"));           //  ['sachin', 'AAkash', 'pushpendra', 'pawan', 'rohit', 'sourav']
 console.log("replce element ",name4.splice(1,1,"manish"));                      //  ['sachin', 'manish', 'pushpendra', 'pawan', 'rohit', 'sourav']


 //  Sort()  Method

 let display  = ["book","chiar","mirror","glass","door"];

 console.log("After sorted the element charactor ",display.sort());   //  ['book', 'chiar', 'door', 'glass', 'mirror']



// Array Referencess 

console.log(["rahul"] == ["rahul"]); // false  Here it is not equal

let arr = ["manish"];

let arrcopy  = arr;
console.log(arrcopy == arr);
 
arr.push("pushpendra");

console.log(arr);       //  ['manish', 'pushpendra']
console.log(arrcopy);   //  ['manish', 'pushpendra']



/* Constant Array

NOTE:  1. we can change the array values of the const array  
       2. but, we can not change the all array like.....    */

const Newarr = ["a","b","c","d"];

Newarr.push("f");  
console.log(Newarr);  // ['a', 'b', 'c', 'd', 'f']  Its possible 

// Newarr = ["a","b","c","d"];  //  TypeError: Assignment to constant variable. First.js:483 Uncaught
  

/* LOOPS 

for() loop --->  TO Repeat any condition 
                 TO iterate a piece of code  
*/

console.log(1);  // 1
console.log(2);  // 2
console.log(3);  // 3
console.log(4);  // 4
console.log(5);  // 5

for(let i = 1 ; i <= 5; i++) {
  console.log(i);                    // 1 to 5
}      

for(let i = 5 ; i >= 1; i--) {
  console.log(i);                   // 5 to 1
}    

for(let i=10; i >= 1; i = i-3){ 
  console.log(i);                     // 10 7 4 1
}     


//  Q.  TO Print Odd frome 1 to 15


for(let i=1; i <= 15; i = i+2){ 
  console.log(i);                     //  1 3 5 7 9 11 13 15
}   

//backwords
for(let i=15; i >= 1; i = i-2){ 
  console.log("backwords : ",i);                     //  15 13 11 9 7 5 3 1
}   



//  Q.  TO Print all Even frome 2 to 10

for(let i=2; i<=10; i =i+2) {
  console.log(i);                                   //   2 4 6 8 10 12 14 16 18 20
}

//backwords
for(let i=20; i >= 2; i = i-2){ 
  console.log("backwords : ",i);                     //  20 18 16 14 12 10 8 6 4 2 
}  


// Infinite loop

// for(let i=1; i >= 0; i = i++){ 
//   console.log(i);                     // 1 to n....

// for(let i=1;     ; i++){ 
//   console.log(i);              


// to print multiplication of 5

let n = prompt("Write your number");
n = parseInt(n);

for(let i = n; i<= n*10; i=i+n){
  console.log(i);
}

// while() loop

let i = 0;
while(i<=25){
  console.log(i);
  i++;
}


// Nested Loops

for(let i=1;  i<= 3; i++){
     console.log("Outer loop",i);
    for(let j=1; j<=3; j++){
   
    console.log(j);
  }
}



//  PQ. Guess the favorite movie

// const favMovie = "Avatar";

// let Guess = prompt("Guess my favorite movie ");

// while( (Guess != favMovie) && (Guess != "quit") )   {
//   Guess =  prompt("wrong Guess❗, please 🙏 try again");
// }

// if(Guess == favMovie){
//   console.log("Congrats🎉your movie is found");
// }
// else{
//   console.log("you quit the game!🤖");
// }


// Loops with array

let fruits = ["mango","apple","banana","litchi","Orange"];

for(i=0; i<fruits.length; i++){
  console.log(i,fruits[i]);
}

console.log("your array is reverse : ")
for(i=fruits.length-1; i>=0; i--){
  console.log(i,fruits[i]);
}



// Loops with Nested Array

let heros = [ ["Iroanman","spiderman","thor"],["superman","worder women","flash"]] ;

// for(let i=0; i<heros.length; i++){
//   console.log(i,heros[i],heros[i].length);  
//   for(j=0; j<heros[i].lenght;j++){
//     console.log(`j : ${j}`,heros[i]);  
//   }
// }

for(let i=0; i<heros.length; i++){
  console.log(i,heros[i],heros[i].length);    //  [i] -->  0: ,   ["Iroanman" ,"spiderman" "thor"], 3
                                                           //  j = 0 ironman       
  for(j=0; j< heros[i].length; j++){                       //  j = 1 spiderman         
     console.log(`j = ${j}`,heros[i][j]);                  //  j = 2 thor   
  }                                       
}                                             //  [i] -->  1: ,   ["superman","worder women","flash"], 3   
                                                           //  j = 0 superman
                                                           //  j = 1 worder women
                                                           //  j = 2 flash 

// Q. To print student and his marks


let student = [ ["Manish",95], ["Pushpendra",72], ["Amit",65] ]; 

for(let i=0; i < student.length; i++){    
      console.log(`Info of student : #${i+1}`);
   for(let j=0; j < student.length; j++) {
        console.log(student[i][j]);
 }
}




// for 0f-Loops

let Home  = ["Mannat","jannat","plaja","kotri","cottage","bangalow"] ;


// show of all indivisual Element of Array
for(show of Home){
  console.log(show);
} 


// show of all indivisual Element of Strig 
let str = "ApanaCollage";
for(show of str){
  console.log(show);
}


// Nested for of -Loops

let pops = [  ["lays","dalmutt","golmal"],["patanjali","kurkure"]  ];

for(show of pops){
  for(list of show){
    console.log(list);
  }
}


// Object literals

let info = {

    name:"pushpendra mehta",
    age :20,
    profession: "student",
     marks :469
};                 // output --->       {name: 'pushpendra mehta', age: 20, profession: 'student', marks: 469}
                                      /*  age :  20
                                          marks : 469
                                          name : "pushpendra mehta"
                                          profession : "student"  */
                              


const item = {

 name : "watch",
 price : 350 ,
 delivery_city: "Kota" ,
 delivery_date : 15 ,
 color: ["red","black"]

};
console.log(item);


//Q. Create an object literal for the properties of thread/twitter post wich includes -

const Post = {
  
   Username:"@pushpendra",
   Followers: 1800 ,
   Content : "creative" ,
   Likes : 360,
   Reposts: 2 ,
   Tags : ["Manish","Rahul","Sonali"], 

};

console.log("This is info of My Posts : ",Post);

// TO display perticular Value of Object literal

console.log(Post["Followers"]); // 1800

console.log(Post.Followers);  // 1800


// Conversion in get Values 

let Conversion = {

  1 :"a",
  22: " b",
  null:"nothing",
  true:"value",
  undefined:"e"
};

console.log(Conversion[22]);

//  Add/Update Value 

let movie  = {

  name: "helipotter",
  Release: 12,
  rating : 5,
  length : "2 houres"
};

// change the value of name
console.log(movie.name = "Spiderman");  // movie.name = "Spiderman"


// To add a new Key = Value Pair 
console.log(movie.Promotion = "dehli"); //  movie.Promotion = "dehli"

// To delete a Key = Value Pair 
console.log(delete movie.length);          // true



// Nested Object Litterals

let Classinfo = {
  
   Pushpendra : {
     Class:"BCA",
     grade :"B", 
   },
   Manish : {
    Class:"BSC",
     grade :"A", 
   },
   kartik :{
    Class:"PMT",
     grade :"A+", 
   },
   Arpit : {
    Class:"NEET",
     grade :"A", 
   },
   Arpit : {
    Class:"ITI",
     grade :"C", 
   },

};

console.log(Classinfo); // {Pushpendra: {…}, Manish: {…}, kartik: {…}, Arpit: {…}, Rahul: {…}}

console.log(Classinfo.Pushpendra); // {Class: 'BCA', grade: 'B'}

console.log(Classinfo.Pushpendra.Class);  // BCA

console.log( delete Classinfo.Rahul); // true



// Array Of Objects

let Classinfo2 = [
  
     { 
      name: "Pushpendra",
      grade:"b",
      city:"mumbai"

     },
  
    { 
      name: "Arpit", 
      grade:"A",
       city:"Kota"
    },
   
    {
      name : "Manish ",
      grade:"A+",
      city:"Dehli"
    }  

];
 
console.log(Classinfo2);  //  [{…}, {…}, {…}]

console.log(Classinfo2[0]); // {name: 'Pushpendra', grade: 'b', city: 'mumbai'}
console.log(Classinfo2[2]); //  {name: 'Manish ', grade: 'A+', city: 'Dehli'}

console.log(Classinfo2[2].grade); // A+
console.log(Classinfo2[0].city); // mumbai
console.log(Classinfo2[1].name); // Arpit



// Math Objects

//returns Euler's number
console.log(Math.E);  // 2.718281828459045
console.log(Math.abs(142)); //142 

console.log(Math.pow(2,3));  // 8
console.log(Math.pow(4,4));   // 16

// Returns x rounded down to its nearest integer
// Returns x rounded up to its nearest integer
console.log(Math.floor(-5.5)); // -6
console.log(Math.ceil(6.5));   // 7  

// returns a random number between 0 (inclusive),  and 1 (exclusive):
console.log(Math.random()); // 0.2594862833843872
console.log(Math.random()); // 0.889740001329711


// Random integer 
console.log( A =  Math.random()) ;  // 0.6218741210219481
 
console.log(A2 = A*10);             // 6.218741210219481

console.log(A3 = Math.floor(A2));   // 6

//Extract floating to integer
Math.floor( Math.random() * 10);  // 8


Math.floor( Math.random() * 10) + 1;   // num +1  ---> // 10 

//Numbers between 1 to 100
Math.floor( Math.random() * 100) + 1;  // 35,60,40,2,99,100,25,62

//Numbers between 20 to 24
console.log(Math.floor( Math.random() * 5) + 20) ; // 




// No. Guesaing Game 


// const max = prompt("enter the max number");
// const random = Math. floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");

// while(true) {
//   if(guess == "quit") {
//       console.log("user quit");
//       break;
//   }
 
//   if(guess == random){
//     console.log("Congrats 😎  your number is right ! your ramdom number was : ",random)
//     break;
//   }

//   else if(guess < random) {
//     guess = prompt ("your number is To Small ,please try again ...");
  
// }
// else {
//     guess = prompt ("your number is To Large ,please try again ...");
//    }
// }

// output -->  In the range of 1 to 10   -----> Congrats 😎  your number is right ! your ramdom number was  7
// output -->  In the range of 1 to 10   -----> Congrats 😎  your number is right ! your ramdom number was : 86


//  Fuctions


//  Fuction defination
function MyName() {
  console.log("pushpendra mehta");
}

// Function Calling
MyName();


function isAdult(){
  let age = 18;
  if(age >= 18){
    console.log("your are Adult");
  }
  else{
    console.log("your are not Adult");
  }
}

isAdult();


function sum(a,b){
console.log("Your Sume is : ",a+b);
console.log(" Your Mul is : ",a*b);
console.log("\n");
}

sum(20,15);
sum(9,9);
sum(15,35);



function rollDice(){
   let dice = Math.floor(Math.random() * 6)+ 1; 
   console.log("Your Dice number is : ",dice);
}

rollDice();



//fuction With arguments
function printName(name){
  console.log(name);
}

printName("pushpendra");

function printInfo(name , age ) {
  console.log(`${name},age is : ${age} `);
}

printInfo("Sonali",21);    //  Sonali,age is : 21

printInfo("pushpendra");   // pushpendra,age is : undefined 


 

//PQ.3. Create a fucntion that gives us the average of three number 

function CalcAvg(a,b,c,Avg){ 
   Avg = (a+b+c)/3;
  console.log("The Average is : ",Avg);  
}

CalcAvg(15,30,15);       // The Average is :  20




//PQ.4. Create a fucntion that Prints the Multiplication of a table ...?


function printTable(n){
  for(let i = n; i <= n*10; i = i+n){
    console.log("The Multiplication  is : ",i);
  }
}
 
printTable(5);  //  5,10,15,20,25,30,35,40,45,50
printTable(7);  //  7,14,21,28,35,42,49,56,63,70




// Return Keyword 

function Subtract(a,b) {
    return a*b;
}
 let print =  Subtract(21,3);
 console.log(print);    //  Outout --> 63

//another way to print value
console.log(Subtract(7,12));   // Outout --> 84


function Under19(age){
  if(age >= 19){
     return "Your are selected for Under-19";
  } 
  else{
    return "Your are not selected for Under-19";
  }
  console.log("by by ");  // return keyword ignorred it

}

//without console.log() it is not work
console.log(Under19(22));  // Your are selected for Under-19
console.log(Under19(9));   // Your are not selected for Under-19




//PQ.5. Create a fucntion that returns the sum of numbers from 1 to n...?

function getSum(n){
    sum = 0;
  for(let i = 1; i <= n; i++){
     sum+=i;
  }
  return sum;
}

console.log(`sum is :`,getSum(3)); // sum is : 6
console.log(`sum is :`,getSum(4)); // sum is : 10
console.log(`sum is :`,getSum(10)); // sum is : 55





//PQ.6. Create a fucntion that returns the sum of numbers from 1 to n...?


let STR = ["Pushpendra ","Mehta ","is ","a ","Web Engineer"];

function Merge(STR){
   let result = "";

  for(let i =0; i < STR.length; i++){
     result =  result + STR[i];  
  }
  return result;
}

 console.log(Merge(STR));



 /* Scope

Scope determines the accessibility of variables, objects, and functions from different parts
of the code.
* Function
* Block
* Lexical | */
 



//  * Function-->

      let Sum = 32;  // global scope
  
     function calsum(a,b){
        let Sum = a+b; //function scope
        console.log(Sum);
     }
     
    //  console.log(Sum);  // dosen't Accessible outside the function




// Block Scope --->

//Variables declared inside a { } block cannot be accessed from outside the block.    

for(let i = 1; i <= 30; i++){
  console.log(i);               // block scope 
}
// console.log(i);


let Janm = 20;

if(Janm >= 20 ){
  let code = "is Adult"; 
  console.log(code);          // is Adult
}
// console.log(code);   // ReferenceError: code is not defined




/*
Lexical Scope

a variable defined outside a function can be accessible inside another function defined
after the variable declaration.

The opposite is NOT true.

*/

function outerFunc() {
  let x = 5; 
  let y = 6;
     
      function innerFunc() {
        console. log(x); 
        console. log(y);

  }
  innerFunc();
}

//PQ.7.  what will be the output of this code ....?

let greet = "hello";  // global scope

function chageGreet() {
  let greet = "Namaste";   // fuctoion scope
  console.log(greet);
  
  function innerGreet() {  
    console.log(greet);    //  Lexical scope
  }
  innerGreet();       

}
console.log(greet);    
chageGreet();           

/* "Namaste"
    "hello"
    "Namaste"  */








 /*   Function Expressions

    const variable = function(arg1, arg2) {
    //do or return something
    }   */
    
  const sum2 = function(a,b) {
      return a*b;
    }
    console.log(sum2(18,3));  
    
    sum2();  //  54


    let hello = function() {
      console.log("Bonjur");                     
  }
  hello();  // "Bonjur"
      

  // Higher Order Fucntion

    function multipleGreet(func,count) {
        for(let i = 1; i <= count; i++){
          func();
        }
  }

      let Greet = function() {
        console.log("by by ");
      }  
    
multipleGreet(Greet,65);           // [65]  by by         
  



/* Methods

Actions that can be performed on an object. */


const calcuLator = {
  
  num : 15,
  add : function(a,b){
       return a+b;
  },
  sub : function(a,b){
    return a-b;
  },
  mul : function(a,b){
    return a*b;
  }

};

console.log(calcuLator.num);           // 15
console.log(calcuLator.add(41,36));    // 77
console.log(calcuLator.sub(34,16));    // 18
console.log(calcuLator.mul(41,36));    // 1476





// ".This" Keyword 

const student4 = {

name  : "Pushpendra",
class :"BCA",
age  : 20,
bio  : 89,
chem : 70,
phys  :81,
getAvg() {
  let Avg = (this.bio + this.chem + this.phys) /3;
     console.log(`${student4.name} got average is :`,Avg);
  }
}
console.log(student4.getAvg());



/* try & catch |

The try statement allows you to define a block of code to be tested for errors while it |
is being executed. |

The catch statement allows you to define a block of code to be executed, if an error |
occurs in the try block. | */


console.log("hello");
console.log("MY name ");
// console.log(a);         // ReferenceError: a is not defined

try{
  console.log(a);
}
catch{
  console.log("THIS is an error...a is not defined");
}
console.log("pushpendra");
console.log("Mehta");



// Arrow Fucntions 

const sum3 = (a,b) => {
  console.log(a+b);
}

console.log(sum3(11,21)) // 32


const cube = (z) => {
  return z*z*z;
}

// implicit return Arrow function

const pow = (c,d) => c**d

console.log(pow(3,5));  // 3**5 = 243
console.log(pow(2,7));  // 2**7 = 128



// setTimeout()

// console.log("Hello Coders ");

// setTimeout( () => {
//   console.log("ApnaCollage");
// } , 3000)

// console.log("welcome to");


// setInterval()

// console.log("this is a");
  
// setInterval( () => {
//   console.log("of javscript");
// } , 2000)

// console.log("interval fucntion");



// .This with Arrow function


const findResult = {
  name : "manish", 
  eng : 90,
  maths : 65,
  science: 72,
  getAvg : () => {
      Avg = (this.eng + this.maths + this.science) / 3;  // parents scope -->
      return Avg;
  }
}



/* Practice Qs
Write an arrow function that returns the square of a number 'n".*/

const findSqaure =  (n) => {
     return n*n   
}

console.log(`the sqaure of n is : `,findSqaure(12)); // 144
console.log(`the sqaure of n is : `,findSqaure(7));  // 49




/* Practice Qs
Write a function that prints "Hello World" 5 times at intervals of 2s each.  */


// let id = setInterval( () => {
//   console.log("hello World");
// } , 2000)

// setTimeout(() => {
//   clearInterval(id);
//   console.log("interval cleared!");  // [5] hello World
// }, 10000);                          // intercal cleared!






// Array methods fucntion 

//array.forEach();


let arr2 = [1,4,3,2,1];

const prints = function(elem) {
  console.log(elem);
} 

arr2.forEach(prints);  // 1 4 3 2 1
//or

arr2.forEach(function(elem){  // 1 4 3 2 1
  console.log(elem);
} )

// with objects

let arr3  = [
  {name:"Raja",
   marks: 91
  },

  {name:"rajat",
    marks: 76},
  
  {name:"priyansh",
    marks: 83},
];


arr3.forEach(function(student)  {
  console.log(student.name);
  console.log(student.marks);
})


// map & filter 

let arr4 = [2,3,4,5,6,7];

let double = arr4.map( (ele) => {
      return ele*ele;
} );

 
let student5 = [
  {name:"Raja",
   marks: 91
  },

  {name:"rajat",
    marks: 76},
  
  {name:"priyansh",
    marks: 83},
];

let gpa = student5.map( (ele) => {
  return ele.marks / 10;
})

let arr5 = [2,3,4,5,6,7,8,9,18,22,71];

 let Ans = arr5.filter((ele) => {
  return ele % 2 == 0;
})


// every & sum

// every works as logical and operator
// some works as logical OR operator



let arr6 = [2,4,8,10,12,14];
 
let every = arr6.every((ele) => {                 
  return ele%2 == 0;               // true 
  // return ele%3 == 0;           //false
})

let every2 = [2,4,6,7,8].some((ele) => {return ele%2 == 0})    //true  
let every3 = [3,66,21,80,34].some((ele) => {return ele%3 == 0}) //true


// reduce method 

let arr7 = [1,2,3,4];

let sum4 = arr7.reduce((res,ele) => {
  return res+ele ;                         // 10
})

//  Maximum in Array


let nums = [2,3,4,5,11,4,9,1,2];

let result = nums.reduce((max,ele) => {
    if( ele > max){
      return ele;
    }
     else{
      return max;
    } 
});


/*  Practice Qs |

Check if all numbers in our array are multiples of 10 or not.   */


let num1 = [20,30,40,50];

let mul = num1.every((ele) => {
  return ele%2 == 0;              // true
})




/* Create a function to find the min number in an array. */

let num2 = [2,-4,5,11,4,9,1,2];

let result1 = num2.reduce((max,ele) => {
    if(max < ele){
      return max;
    }
     else{
      return ele;
    } 
});



// default parameter

 function Add(a,b=3) {
  return a+b;              // Add(5,9) --> 14
 };



 // Spread 
//  findout the minimum value of array

console.log(..."ApnaCollage");      // A p n a C o l l a g e


let array = [2,3,78,5,6,34,356,4,2,1];
 
console.log("The minimum value of arrray is : ",Math.min(...array));        // 1


// Spred(Array literals)

let one = [2,5,7,3,6,34,77];
let two = [77,2,5,7,3,6,34];

let three = [...one,...two];   //  (14) [2, 5, 7, 3, 6, 34, 77, 77, 2, 5, 7, 3, 6, 34]


//Spread(Object literals)

let data = {
 email: "Apnacollage@gmail.com",
 password: 14321
};

const datacopy  = {...data,id:"@344",user_name:"shrada kapra"}; 

/* output -->
{email: 'Apnacollage@gmail.com', password: 14321, id: '@344', user_name: 'shrada kapra'}  */ 


let str1 = {..."pushpendra"};




/* Rest
Allows a function to take an indefinite number of arguments and bundle them in an array | */


function sum5(...args)  {
  for(let i=0; i< args.length; i++){
    console.log("you gave us : ",args);
  }
}
console.log(sum5(1,2,4,5,54,3,2)); // you gave us :  (7) [1, 2, 4, 5, 54, 3, 2]





/* Destructuring
Storing values of array into multiple variables */


let namess = ["tony", "bruce","peter","steve","abc","xyz","pyq"];
// let winner = namess[0];
// let runnerup = namess[1];
// let secondrunnerup = namess[2];

// let [winner,runnerup,secondrunnerup] = namess;  //-->   tony, bruce, peter

// console.log(winner);   // tony
// console.log(runnerup); // bruce
// console.log(secondrunnerup);   // peter

let [ winner,runnerup,...others] = namess;

console.log(namess);                   // ['tony', 'bruce', 'peter', 'steve', 'abc', 'xyz', 'pyq']




/* Destructuring (Objects)  */


let student6 = {
 
  name : "kartik",
  age  :20,
  class:"Neet",
  subject: ["bio","physi","chem"],
  Username:"@kartik1234",
  password:325217

};

/* Java Script DOM  */

let { Username: user, password:Secrete ,city = "mumbai"} = student6;



 
