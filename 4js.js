//loops
//for loop
for(let i=1; i<=5; i++){
console.log("pranjal");
}

//calculate sum of 1 to n

let sum = 0 ;
for(let  i=1; i<=5; i++ ){
    sum = sum +i;
}
console.log("sum = ", sum);


//print 1 to 5

for(let i=1; i<= 5; i++){
    console.log("i=",i);
}

//while loop

let i=1;
while(i<=7){
    console.log("i=",i);
    i++;
}

//do-while loop

let ii = 20;
do{
    console.log("pranjal");
    ii++;
}while(ii<=10);

let j = 1;
do{
    console.log("j=",j);
    j++;
}while(j<=10);

//for-of loop

let str = "pranjal";
let size = 0;
for(let val of str){
    console.log("val = ",val);
    size++;
}
console.log("string size = ",size);

//for-in loop

let student = {
    name : "pranjal",
    age: 19,
    cgpa: 8.5,
    ispass: true
};
for(let key in student){
    console.log("key=",key, "value=",student[key]);
}

//practice
//even num

let num=0;
for(let num=0; num<=100; num++){
   if(num%2 === 0)
    console.log("num=",num);
}

//odd num

let numm=0;
for(let numm=0; numm<=100; numm++){
   if(numm%2 !== 0)
    console.log("numm=",numm);
}

//practice 2

let gamenum = 25;
let usernum = prompt("guess the game num");
while(usernum != gamenum){
     usenum = prompt("you entered wrong num guess again : ")
}
console.log("congratualation");



