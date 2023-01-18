console.log('Hello this is arrayMethods!');

/*
    Array Methods!
    Some of the more popular methods on the Array prototype
*/

// Create an array with which to work
let names = ['Jack', 'Katherine', 'Marge', 'Bill', 'Amanda', 'Frank'];

// Basic Looping
for (let i=0; i < names.length; i++){
    console.log(names[i]);
};

console.log('================')

// for...of loop
for (let name of names){
    console.log(name);
};

console.log('================')

// Array.prototype.forEach(callbackFn)

names.forEach(e => console.log(e))

console.log('================')
// Callback Function
function logInfo(element, idx, arr){
    console.log(element, idx, arr)
};

names.forEach(logInfo);

console.log('================')

// Array.prototype.map(callbackFn)
function mapCallBack(el, ix){
    if (ix % 2 === 0){
        return el.toUpperCase();
    } else {
        return el.toLowerCase();
    };
};

let newNames = names.map(mapCallBack);
console.log(names);
console.log(newNames);


// As Arrow Function
let newerNames = names.map((e, i) => i%2===0 ? e.toUpperCase() : e.toLowerCase());
console.log(newerNames);

console.clear();
// Array.prototype.filter()
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Baltimore', 'Cheyenne', 'Albuquerque'];

console.log(cities);

function startsWithC(aString){
    return aString[0].toUpperCase() === 'C'
}

let cNameCities = cities.filter(startsWithC);
console.log(cNameCities);

// Arrow Function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);


// filter creates a shallow copy - a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made
let testArr = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 4}]

let newTestArr = testArr.filter(x => x.a === 1)
console.log(testArr[0] === newTestArr[0]);
console.log(testArr[0]);
console.log(newTestArr[0]);
testArr[0].b = 1000;
console.log(newTestArr[0]);

// filter takes the boolean value of the return

let randomFilter = cities.filter((e, i) => i%3 === 0 ? 'hello world' : '');
console.log(randomFilter);

// Array.prototype.concat()
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

// let arrC = arrA + arrB;
// console.log(arrC);
// console.log(typeof arrC);

let arrC = arrA.concat(arrB);
console.log(arrC);
console.log(typeof arrC);

let arrD = arrA.concat(arrB, arrC);
console.log(arrD);

// Array.prototype.includes()
let fruits = ['orange', 'apple', 'banana', 'watermelon', 'strawberry', 'pear', 'banana'];
console.log(fruits);

console.log(fruits.includes('orange')); // .includes will check if the element is in the array
console.log(fruits.includes('mango'));
console.log('apple' in fruits); // in operator - checks to see if the object has that property
console.log('2' in fruits);

// Array.prototype.indexOf()
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('banana', 3));

// Array.prototype.join()
let myNameArr = ['B', 'r', 'i', 'a', 'n']
console.log(myNameArr.join());
console.log(myNameArr.join(''));
console.log(myNameArr.join('-'));


// Array.protoype.push() -- equivalent to the list.append in python
console.log(fruits.push('mango'));
console.log(fruits);

fruits.push('pineapple', 'blueberry', 'tomato');
console.log(fruits);


// Array.prototype.pop()
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// Array.prototype.reverse()
console.log(cities);
cities.reverse();
console.log(cities);
cities.reverse();
console.log(cities);

// Array.prototype.slice()
console.log('Array Slice:')
console.log(fruits);
console.log(fruits.slice()) // fruits[:] in python
console.log(fruits.slice(3)) // fruits[3:] in python
console.log(fruits.slice(3, 6)) // fruits[3:6] in python
console.log(fruits.slice(0, 6)) // fruits[:6] in python
console.log(fruits.slice(0, -3)) // fruits[:-3] in python

console.clear()
// Array.prototype.splice()
console.log('Array Splice:')
console.log(fruits);
fruits.splice(2, 3, 'kiwi', 'kumquat');
console.log(fruits);

// Array.prototype.sort()
fruits.sort();
console.log(fruits);

let unsorted = [23, -1, 10, 3, 5, -7, 18, 100, 5]
console.log(unsorted);
unsorted.sort();
console.log(unsorted);


let newUnsorted = [9, 70, 61, 5, 8, -40, -5]
console.log(newUnsorted)

function compareFunction(a, b){
    console.log('A:', a, 'B:', b)
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}

newUnsorted.sort(compareFunction);
console.log(newUnsorted);

// To sort by number value
let anotherUnsorted = [23, 32, 4, 52, 252, 1];
console.log(anotherUnsorted);
anotherUnsorted.sort( (a,b) => a - b )
console.log(anotherUnsorted);


