//Create one function with zero parameter having a console statement;

function sayHi(){
    console.log("Hi");
}
sayHi();

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(val1,val2){
    let val3=7;
    console.log(val1+val2+val3);
}
sum(3,4);

//Create one arrow function

let arrow = (a,b) =>{
    console.log(a+b);
}

arrow(2,3);

//"Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
//Output : undefined

//"Print output: 

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//Output : Undefined and 21

//"Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

//Output :Uncaught ReferenceError: a is not defined , Uncaught ReferenceError: b is not defined

function fact(n)
{
 if (n === 0) {
    console.log("1");
}
else {
    let fact=1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);
}
}
fact(4);























