console.log("You look fantastic!");


/*
    Objects, Prototypes, and Classes
*/

let person = {}
console.log(person)
console.log(typeof person)

person.name = 'Fred';
person.age = 55;
person.favColor = 'blue';

console.log(person);

// Access values via Dot or Bracket Notation
console.log(`${person.name} is ${person['age']} years old`);

// Objects can hold other objects
let person2 = {
    name: 'Gabrielle',
    age: 33,
    languages: ['Python', 'JavaScript', 'SQL'],
    teams: {
        mlb: 'Expos',
        nba: 'SuperSonics',
        nfl: 'Oilers',
        nhl: 'Whalers'
    }
};

console.log(person2);
person2.languages.forEach(lang => console.log(lang.toUpperCase()));

let person3 = {
    name: 'Jeeves',
    sayHello: function(){console.log(`Hello ${this.name}!`)},
    getThis: function(){return this}
};

console.log(person3);

console.log(person3.sayHello);
person3.sayHello();

console.log(person3.getThis());

console.log(this);

console.clear();

/*
    JavaScript Object Instantiation -> Class Instantiation
*/

// let animal = {};
// animal.name = 'Buddy';
// animal.energy = 10;

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
// }

// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
// }

// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
// }

// console.log(animal);

// animal.eat(10);
// animal.play(15);
// animal.sleep(20);

// console.log(animal);

//////////////////////////////
// Functional Instantiation //
//////////////////////////////

// This function is considered the "Constructor Function"
// because it constructs the new object

// function Animal(name, energy){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
    
//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
//     }
    
//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
//     }
    
//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
//     }

//     return animal
// }

// let buddy = Animal('Buddy', 10)
// console.log(buddy);

// buddy.eat(10);
// buddy.play(15);
// buddy.sleep(20);

// console.log(buddy);

// let leo = Animal('Leo', 20)
// console.log(leo);

// leo.eat(12);
// leo.play(13);
// leo.sleep(21);

// console.log(leo);

// console.log(buddy.sleep === leo.sleep);


//////////////////////////////////////////////////
// Functional Instantiation with Shared Methods //
//////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
//     },
//     play:  function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
//     }
// }


// function Animal(name, energy){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
    
//     animal.eat = animalMethods.eat
    
//     animal.sleep = animalMethods.sleep
    
//     animal.play = animalMethods.play

//     return animal
// }

// let buddy = Animal('Buddy', 10)
// console.log(buddy);

// buddy.eat(10);
// buddy.play(15);
// buddy.sleep(20);

// console.log(buddy);

// let leo = Animal('Leo', 20)
// console.log(leo);

// leo.eat(12);
// leo.play(13);
// leo.sleep(21);

// console.log(leo);

// console.log(buddy.sleep === leo.sleep);

console.clear()
///////////////////
// Object.create //
///////////////////

let parent = {
    first: 'Margaret',
    last: "O'Reilly",
    heritage: 'Irish'
};

console.log(parent);
console.log(parent.first);
console.log(parent.last);
console.log(parent.heritage);

let child = Object.create(parent);
child.first = 'Seamus';
console.log(child);
console.log(child.first);
console.log(child.last);
console.log(child.heritage);

let parentObj = {
    name: 'David',
    getInfo: function(){console.log(`Hello my name is ${this.name}`)}
};

let childObj = Object.create(parentObj);
childObj.name = 'Hannah';
console.log(childObj);
childObj.getInfo();

console.clear();

////////////////////////////////////////////////////////////////////
// Functional Instantiation with Shared Methods and Object.create //
////////////////////////////////////////////////////////////////////


// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
//     },
//     play:  function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
//     },
//     makeSound: function(){
//         console.log(`${this.name} is making noises!!!`)
//     }
// }


// function Animal(name, energy){
//     let animal = Object.create(animalMethods);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// let buddy = Animal('Buddy', 10)
// console.log(buddy);

// buddy.eat(10);
// buddy.play(15);
// buddy.sleep(20);

// console.log(buddy);

// let leo = Animal('Leo', 20)
// console.log(leo);

// leo.eat(12);
// leo.play(13);
// leo.sleep(21);

// console.log(leo);

// console.log(buddy.sleep === leo.sleep);

// Function Prototype
function doNothing(){};
console.log(doNothing.prototype);
console.log(typeof doNothing.prototype);

//////////////////////////////
// Prototypal Instantiation //
//////////////////////////////


// function Animal(name, energy){
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// Animal.prototype.eat =  function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
// }
// Animal.prototype.play =  function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
// }

// console.log(Animal.prototype);

// let buddy = Animal('Buddy', 10)
// console.log(buddy);

// buddy.eat(10);
// buddy.play(15);
// buddy.sleep(20);

// console.log(buddy);

// let leo = Animal('Leo', 20)
// console.log(leo);

// leo.eat(12);
// leo.play(13);
// leo.sleep(21);

// console.log(leo);

// console.log(buddy.sleep === leo.sleep);


///////////////////////////////////
// Pseudoclassical Instantiation //
///////////////////////////////////


// function Animal(name, energy){
//     // let this = Object.create(Animal.prototype);
//     this.name = name;
//     this.energy = energy;

//     // return this
// }

// Animal.prototype.eat =  function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
// }
// Animal.prototype.play =  function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
// }

// console.log(Animal.prototype);

// let buddy = new Animal('Buddy', 10)
// console.log(buddy);

// buddy.eat(10);
// buddy.play(15);
// buddy.sleep(20);

// console.log(buddy);

// let leo = new Animal('Leo', 20)
// console.log(leo);

// leo.eat(12);
// leo.play(13);
// leo.sleep(21);

// console.log(leo);

// console.log(buddy.sleep === leo.sleep);

/////////////////////////////////////
// ECMAScript 2015 - class Keyword //
/////////////////////////////////////

class Animal{
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        this.energy += amount;
        console.log(`${this.name} is eating ${amount} and its energy is now ${this.energy}`)
    }

    sleep(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping ${amount} and its energy is now ${this.energy}`)
    }

    play(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing ${amount} and its energy is now ${this.energy}`)
    }
}


let buddy = new Animal('Buddy', 10)
console.log(buddy);

buddy.eat(10);
buddy.play(15);
buddy.sleep(20);

console.log(buddy);

let leo = new Animal('Leo', 20)
console.log(leo);

leo.eat(12);
leo.play(13);
leo.sleep(21);

console.log(leo);

console.log(buddy.sleep === leo.sleep);


let myNewArray = [];

let myNewerArray = new Array();

console.log(myNewerArray);

class Parent{
    constructor(firstName){
        this.name = firstName
    }

    getInfo(){
        console.log('Hello ' + this.name)
    }
}

class Child extends Array{
    concat(){
        console.log('My name is ' + this.name)
    }
}

let kid = new Parent('Brian');
kid.getInfo();
