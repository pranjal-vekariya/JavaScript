//arrays : mutable(change)
    //string: inmutable(not change)

let marks=[97,85,78,66,52];
console.log(marks);
console.log(marks.length);

let stunm = ["pranjal","pinal","avisha","ruta"];
console.log(stunm);

//looping in array

let subnm = ["English","Maths","Gujarati","Hindi"];
for(let i=0; i<subnm.length; i++){
    console.log(subnm[i]);
}

//for-of loop

for(let el of subnm){
    console.log(el);
}

let cities = ["Ahemdabad","surat","vadodara","amreli"];
for(let city of cities){
        console.log(city.toUpperCase());
}

//practices

let smarks = [85,97,44,37,76,60]
console.log(smarks);

let sum = 0;
for(let val of smarks){
    sum += val;
}
let avg = sum / smarks.length; 
console.log(`avg of the class = ${avg}`);

//practice 2
//fpr of loop

let items = [250,645,300,900,50]
console.log(items);

let i = 0;
for(let val of items){
    console.log(`val at index ${i} = ${val}`);
    let offer = val/10;
   items[i] = items[i] - offer;
   console.log(`value after offer = ${items[i]}`);
   i++;
}

//for loop

let item = [250,645,300,900,50]
for(let i = 0; i<item.length; i++){
    let offer = item[i]/10;
    item[i] -= offer;

}
console.log(item);

//array method
//push(): add to end

let chocolate = ["silk", "bubbly", "dairymilk"];
chocolate.push("dairysilk","fivestar");
console.log(chocolate);

//pop(): delete end

let chocolates = ["silk", "bubbly", "dairymilk"];

console.log(chocolates);
let deletedchocolate = chocolates.pop();
console.log(chocolates);
console.log("deleted",deletedchocolate);

//tostring(): coverts array to string

let mark = [90,78,56,87,56];
console.log(mark.toString());

//concate(): multiple arrays & return result

let girlsnm = ["pranjal","pinal"];
let boysnm = ["jay","dax"];

let name = girlsnm.concat(boysnm);
console.log(name);

//unshift(): add to start

let girlsname = ["pranjal","pinal"];
 girlsname.unshift("avisha");  


//shift(): delete to start

let val = girlsname.shift();
console.log("deleted", val);

//slice(): return piece of the array(not change original array)

let girlnm = ["pranjal","pinal","avisha","ruta"];
console.log(girlnm);
console.log(girlnm.slice(1, 3));

//splice(): change original array(add,remove,replace)

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);    

//add to element 

arr.splice(2,0,101);

//delete to element

arr.splice(3,1);

//replace to element

arr.splice(3, 1, 101);

//practice

let companies = ["bloomberg", "microsoft", "uber", "goodle", "IBM", "netfix"];
companies.shift();

console.log(companies);
companies.splice(2, 1,  "ola");

companies.push("amazon");


