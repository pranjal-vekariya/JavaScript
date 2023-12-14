//conditional statement
//if statement

let age = 25;

if(age > 18){
    console.log("you can vote");
}

if(age < 18){
    console.log("you cannot vote");

}

let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);

//if=else statement

let smode = "light"
let scolor;

if(smode === "dark")
{
    scolor = "black";
}
else
{
    scolor = "white";
}
console.log(color);

let agee = 25;

if(agee >= 18){
    console.log("vote");
}
else
{
    console.log("not vote");
}
    
//odd or even number
let num = 10;

if(num%2 === 0){
    console.log("number is even");
}
else
{
    console.log("number is odd");
}

let numm = 10;

if(numm%2 === 0){
    console.log(numm,"is even");
}
else
{
    console.log(numm,"is odd");
}

//else-if statement

let modee = "dark";
let colorr;

if(modee === "dark"){
    colorr = "black";
}
else if(modee == "blue")
{
    colorr = "blue";
}
else if(modee === "pink")
{
    colorr = "pink;"
}
else{
    colorr = "white";
}
console.log(colorr);


//practice

let number = prompt("enter a number");

if(number % 5 === 0){
    console.log("num is multiple of 5");
}
else
{
    console.log("num is not multiple of 5")    
}


//practice 2

let score=75;
let grade;

if(score > 90 && score <=100){
   grade = "A";
}
else if (score >=70 && score <=89){
    grade = "B";
    
}
else if (score >=60 && score <=69){
    grade = "C";

}
else if (score >=50 && score <=59){
    grade = "D";

}
else if (score >=0 && score <=49){
    grade = "F";

}
console.log("according to your scores,your grade was", grade);






















