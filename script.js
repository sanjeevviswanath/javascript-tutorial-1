// let name1 = ['Sanjeev','satheesh','Rohit']
// let name2 = ['Arun', 'Vivek', 'Jay']
// Merge using spread
// let combinedName = [...name1, ...name2]
// console.log(combinedName)

// using concat
// let combinedName = name1.concat(name2)
// console.log(combinedName)

// using concat in a different way
// let combinedName = [].concat(name1, name2)
// console.log(combinedName)


// let combinedName = name1.push(...name2)
// console.log(name1)

//using reduce 
// let combinedName = name2.reduce((name,item) => {
//     name.push(item);
//     return name;
// },name1)

// console.log(combinedName)

// Arrow functions

const add = (a,b)=>  a + b;
const sub = (a,b)=> a - b;
const mul = (a,b)=> a * b;
const div = (a,b)=> a / b;
const calculator =  (op,a,b) => op(a,b);

console.log(calculator(add,10,20))
console.log(calculator(sub,10,20))
console.log(calculator(mul,10,20))
console.log(calculator(div,10,20))

