// Objects 

let school = {
    name : "University of Mindanao",
    location: "Davao City",
    established: "1952"

    // keys: "Values"
    // keys are the properties of the object
}

// Javascript code demonstrating a simple object

let school2 = {
    name: "Philippine Women's College of Davao",
    location: "Davao City",
    established: "1952",
    displayInfo: function() {
        document.write(`${this.name} was established 
        in ${this.established} at ${this.location}`);
    }
}

school2.displayInfo();

let classMate = {
    name: "Erecka Lyn",
    age: 19,
    course: "BS in Psychology",
    displayInfo: function() {
        document.write("<br>" + `${this['name']} is ${this['age']}, 
        taking up ${this['course']}`);
    }
}

classMate.displayInfo();

// more than one word key
//access one word in a more than one word value
let classMate2 = {
    name : "Erispe Styles",
    displayInfo: function() {
        document.write(`${this.name.split(' ')[0]}`);
    }
}

classMate2.displayInfo();

// has own property code in js

const object1 = new Object();

object1.property1 = 42;

console.log(object1.hasOwnProperty('property1')); // true 

// creating objects 

//using object literals

/*let obj = {
    member1 : value1,
    member2 : value2

    // member can be strings
    //               numbers
    //               functions
    //               arrays
    //               other objects
};*/

// Object Constructor

const school_two = new Object();

school_two.name = "Talomo National High School";
school_two.established = "1952";
school_two.location = "Talomo";

school_two.displayInfo1 = function() {
    console.log(`${school_two.name} was established in ${school_two.established} at ${school_two.location}`);
}

school_two.displayInfo1();

// Constructors

function Vehicle(name, maker) {
    this.name = name;
    this.maker = maker;
}

let car1 = new Vehicle('Tesla', 'Elon');
let car2 = new Vehicle('Isuzu', 'someone');

console.log(car1);
console.log(car2);

console.log(car1.name);


//inside classes, there can be special methods named constructor().

class people {
    constructor () {
        this.name = "Erecka";
    }
}

let person1 = new people();

//output : "Adam"

console.log(person1.name);
console.log(people)

// Prototypes 

let footballers = {
    position: "Striker"
}

let footballer1 = Object.create(footballers);

//output : Striker
console.log(footballer1.position);

// Accesing Object Matters

// dot.notation

let sc