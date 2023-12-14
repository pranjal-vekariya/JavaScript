//strings

var str = "pranjal";

console.log(str[5]);

//template

var sentance = `this is a template`;
console.log( typeof sentance);

var obj = {
    item: "pen",
    price: 10,
};

var output = `the cost of ${obj.item} is ${obj.price}rs`;
console.log(output);
console.log("the cost of",obj.item, "is", obj.price,"rs");

//string methods
//str.touppercse()

var str2 = "javascript";
str2 = str2.toUpperCase();
console.log(str2);

//str.tolowercase()

var str3 = "JAVASCRIPT";
str3 = str3.toLowerCase();
console.log(str3);

//str.trim

var str = "             java script           ";
str = str.trim();
console.log(str);

//str.slice(start,end)

var str = "hello";
str = str.slice(2);
console.log(str);


//sre1,concate(str2)join str2 with str1

var str1 = "pranjal";
var str2 = "veakriya";
var res = "i am " + str1 + str2;
console.log(res);

//str.replace(searchval,newval) search any value and replace new value

var str = "hello";
console.log(str.replace("h", "y"));

//str.charAt(idx)

var str = "pranjal";
console.log(str.charAt(0));

//practice

let fullname = prompt("enetr your fullname without spaces");
let username = "@" + fullname + fullname.length;
console.log(username);

