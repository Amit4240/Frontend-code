// // Javascript Loops
// // for loop

let a=0;
for(let i=1; i<5; i++){
    console.log(a+i);
}

// for in loop
let obj = {
    name: "Amit Nadugeri",
    education: "B Tech",
    role: "Fullstack Web Developer"
}
for (const key in obj) {
        const element = obj[key]    
        console.log(key, element);
    }


// for of loop
for (const c of "AmitNadugeri") {
    console.log(c); 
}

// while loop
let i = 0;
while(i<6)
{
    console.log(i);
    i++
}


// do-while loop
i=10;
do{
  console.log(i); 
}
while(i<8);{
    i++;
}


