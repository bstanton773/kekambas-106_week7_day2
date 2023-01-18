console.log("Hello this is functions.js!");


/*
    JavaScript Functions!
*/

// Regularly Named Function
// function funcName(){ code to execute when called }

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2
};

console.log(addNums);
// Execute a function: funcName();
console.log(addNums());


// Regularly Named Functions with parameters
// function funcName(param1, param2, etc.){ code to execute when called }

function addNums2(num1, num2){
    console.log(num1, num2)
    return num1 + num2
}

console.log(addNums2);

// Executing function with params: funcName(arg1, arg2, etc.)
console.log(addNums2(100, 200))

// Take exercise 2 from last night and put it in a function

let numbers1 = [10, 12, -9, 23, -25, 14];

function addPositives(numbers){
    let total = 0;
    for (let num of numbers){
        if (num > 0){
            total += num;
        };
    };
    return total;
};


console.log(addPositives(numbers1));
console.log(addPositives([2, 3, -1, -10, 23, -53, 65]));


// Default Parameters
// function funcName(param1, param2=defaultValue){ code to execute }

function addNums3(num1, num2=100){
    console.log("Hello",num1)
    return num1 + num2
};

console.log(addNums3(10));
console.log(addNums3(10, 50));


// Use Spread Operator (...) to accepts optional parameters
function acceptAll(x, ...all){
    console.log(x);
    console.log(all)
};

acceptAll('a', 'b', 'c', 'd');


// Function Expressions
// var (let, const) nameOfVariable = function(){ code to execute }

var addSomeNums = function(){
    let num1 = 1000;
    let num2 = 9000;
    return num1 + num2
};

console.log(addSomeNums);
console.log(addSomeNums());

let addMoreNums = function(num1, num2){
    return num1 + num2
};

console.log(addMoreNums);
console.log(addMoreNums(500, 1500));

const anotherFunc = function someCoolName(a, b){
    return b - a
};

console.log(anotherFunc);
console.log(anotherFunc(10, 25));


// Arrow Function Expression
// Syntax: () => { code to execute }
// Syntax: (param1, param2, etc.) => { code to execute }
// Syntax: param1 => { code to execute }
// Syntax: param1 => code to execute in one line return

var myFirstArrowFunction = () => {};
console.log(myFirstArrowFunction);
console.log(typeof myFirstArrowFunction);


function subNums(num1, num2){
    return num2 - num1
};

// Convert to arrow -- remove function keyword and replace with arrow b/w params and {code}
var subNumsArrow = (num1, num2) => {
    return num2 - num1
}

console.log(subNumsArrow(10, 25));

// If { code to execute } is one line with only a return, you can remove {} and return
var subNumsArrow2 = (num1, num2) => num2 - num1

console.log(subNumsArrow2(17, 89));

// If you have one and only one parameter, you don't need the parentheses

var addTen = num => num + 10

console.log(addTen(20));


let colors = ['red', 'orange', 'yellow']

function makeUpperCase(color){
    return color.toUpperCase()
}

console.log(colors.map(makeUpperCase));

console.log(colors.map( c => c.toUpperCase() ))


// Ternary Operator
// (condition) ? value if True : value if False

// Python ternary: value_if_true if condition else value_if_false


let doSomething = num => num % 2 === 0 ? num ** 2 : num / 2

console.log(doSomething(10));
console.log(doSomething(15));

// Exercise 1 as an arrow function

function firstNonConsecutive(anArr){
    for (let i = 0; i < anArr.length - 1; i++){
        if (anArr[i] + 1 !== anArr[i+1]){
            return i+1
        }
    }
    return -1 // Means that everything is consecutive
}

console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7, 8]));
console.log(firstNonConsecutive([10, 11, 12, 13]));


// Arrow version
var firstNonConsecutiveArrow = anArr => {
    for (let i = 0; i < anArr.length - 1; i++){
        if (anArr[i] + 1 !== anArr[i+1]){
            return i+1
        }
    }
    return -1 // Means that everything is consecutive
}
console.log(firstNonConsecutiveArrow([1, 2, 3, 5, 6, 7, 8]));
console.log(firstNonConsecutiveArrow([10, 11, 12, 13]));


// If returning an object in a one line arrow function expression,
// use parentheses around the object

const buildObj = (x, y) => ({a: x, b: y})

console.log(buildObj(10,20))