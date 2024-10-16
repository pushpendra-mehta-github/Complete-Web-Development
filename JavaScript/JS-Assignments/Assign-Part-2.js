//Q.1 Create a number variable num with some value Now, print “good” if the number is divisible by 10 and print “bad”if it is not.

let num = 30;

if(num%10 == 0 ){
    console.log("NUMBER IS DIVISIBLE BY, 10")
}
else{
    console.log("NUMBER IS NOT DIVISIBLE BY ,10")
}


//Qs2. Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert(by substituting their name & age):

//  let name = prompt("ENTER YOUR NAME ");
//  let age =   prompt("ENTER YOUR AGE ");

// alert(`YOUR NAME IS ${ name},YOUR AGE IS ${ age}`);



// Qs3. Write a switch statement to print the months in aquarter.

let quarter = 2;

switch(quarter){

  case 1: console.log("January,February,March");
  break;
  case 2: console.log("April,May,June");
  break;
  case 3: console.log("July,August,September");
  break;
  case 4: console.log("October,November,December");
  break;
  case 5: console.log("November,December,October");
  break;
  case 6: console.log("August,April,October");
  break;

  default:
    console.log("NOTHING QUARTER YET");
}

// Qs4.A string is a golden string if it starts with the character‘A’or‘a’and has a total length greater than 5.For a given string print if it is golden or not.


let golden = "Absolute";

if( (golden[0] === "a") || ((golden[0] === "A")) && (golden.length > 3) ){

    console.log("String is a golden😀");
  }
  else{
    console.log("String is a not golden!😓");
  }


  // Qs5.Write a program to find the largest of 3 numbers.

  
  let a = 34;
  let b = 45;
  let c = 22;

  
  if(a > b){
    if(a > c){
        console.log("A IS A GREATER NUMBER");
    }
    else{
        console.log("c IS A GREATER NUMBER ");
      }
  }
  else{  
    if(b > c){
    console.log("B IS A GREATER NUMBER");
  }
   else{
    console.log("c IS A GREATER NUMBER");
  }
}


// Qs6(Bonus).Write a program to check if 2 numbers have the same last digit. Eg:32 and 47852 have the same last digit i.e.2

let num1 = 32;
let num2 = 47852;

if( (num1%10) == (num2%10) ){
    console.log("numbers have the same last digit which is :",num1%10);
}
else{
    console.log("numbers don't have the same last digit ");
}



