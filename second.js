//arithmetic operator

let a = 5;
let b = 2;
console.log("a=",a,"& b=",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);//10*10


//unary operator
//increment,decrement

console.log("a++=",a++);
console.log("++a=",++a);
console.log("a--=",a--);
console.log("--a=",--a);

//assignment operator
//+=,-=,*=,/=,**=,%=

a+=4;//a = + 4
console.log("a = ", a);//9

a-=4;
console.log("a = ", a);

a*=4;
console.log("a = ", a);

a/=4;
console.log("a = ", a);

a**=4;
console.log("a = ", a);

a%=4;
console.log("a = ", a);

//comparison operator
//==,===,!=,!==,>,>=,<,<=

console.log("a== b",a==b);
console.log("a=== b",a===b);
console.log("a!= b",a!=b);
console.log("a!== b",a!==b);
console.log("a>b",a>b);
console.log("a>=b",a>=b);
console.log("a<b",a<b);
console.log("a<=b",a<=b);

let x = 5;
let y ="5";

console.log("x==", x == y);

//logical operator
//&&, ||, !


//and operator
let con1 = a>b;
let con2 = a===b;
console.log("con1 && con2 =" , con1 && con2);

console.log("a>b && a===b =" , a>b && a===b);

//or operator
console.log("a>b || a===b =" , a>b || a===b);

console.log("con1 || con2 =" , con1 || con2);

//not operator
console.log("(!a<b) = ", !(a<b));
console.log("!5<2 = ",!(a===5));

//ternary operator
//condition?true output : false optput

let age=20;

let result = age > 18 ? "adult" : "not adult";
console.log(result);




