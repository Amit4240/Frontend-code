let a = 3;
let b = 8;
console.log(b);
{
    let a = 9;
    console.log(a);
}
a = a + 9;
console.log(a);
//    let is block scoped variable can be redeclared but cannot be uploded


// var can be redeclared and updated it is global scoped
var x = 9;
var x = 10;
console.log(x); 


// const is also block scoped it can neither be redeclared nor updated;
const e = 5.432;
// const e = e + 5;  not possible
console.log(e);






