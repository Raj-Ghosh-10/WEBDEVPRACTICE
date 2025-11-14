// =============================================================
// GLOBAL SCOPE
// =============================================================
console.log("GLOBAL SCOPE:");
console.log(this);  // Browser: window / Node: {}

// =============================================================
// NORMAL FUNCTION - NON STRICT MODE
// =============================================================
function normalNonStrict() {
    console.log("Normal Function (non-strict):", this);
}
normalNonStrict();  // global object

// =============================================================
// NORMAL FUNCTION - STRICT MODE
// =============================================================
"use strict";
function normalStrict() {
    console.log("Normal Function (strict):", this);
}
normalStrict();  // undefined

// =============================================================
// OBJECT METHOD
// =============================================================
const user = {
    name: "Raj",
    age: 25,
    greet: function () {
        console.log("Inside Object Method:", this.name);
    }
};
user.greet();  // "Rohit"

// =============================================================
// ARROW FUNCTION INSIDE OBJECT
// =============================================================
const user2 = {
    name: "Mohit",
    greet: () => {
        console.log("Arrow Inside Object:", this); 
        // NOT user2 → takes outer 'this'
    }
};
user2.greet();

// =============================================================
// NESTED FUNCTION FIX USING THAT = THIS
// =============================================================
const user3 = {
    name: "Sohan",
    show() {
        const that = this;
        function inner() {
            console.log("Nested Function using that =", that.name);
        }
        inner();
    }
};
user3.show();

// =============================================================
// ARROW FIX (LEXICAL THIS)
// =============================================================
const user4 = {
    name: "Raj",
    show() {
        const inner = () => {
            console.log("Arrow Lexical This:", this.name);
        };
        inner();
    }
};
user4.show();

// =============================================================
// CALL, APPLY, BIND
// =============================================================
function increment(value) {
    this.age += value;
    console.log("After increment:", this.age);
}

const person = { age: 20 };
increment.call(person, 10);   // call
increment.apply(person, [5]); // apply

const bound = increment.bind(person, 15);  
bound();                      // bind

// =============================================================
// CLASS / CONSTRUCTOR
// =============================================================
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Rahul", 22);
console.log("From Class Constructor:", p1);

// =============================================================
// SETINTERVAL WITH NORMAL + THAT FIX
// =============================================================
const timer1 = {
    second: 0,
    start() {
        const that = this;
        setInterval(function() {
            that.second++;
            console.log("Timer Normal Function:", that.second);
        }, 1000);
    }
};
// timer1.start();

// =============================================================
// SETINTERVAL WITH ARROW FUNCTION (LEXICAL THIS)
// =============================================================
const timer2 = {
    second: 0,
    start() {
        setInterval(() => {
            this.second++;
            console.log("Timer Arrow Function:", this.second);
        }, 1000);
    }
};
// timer2.start();

// =============================================================
// EVENT LISTENER (BROWSER ONLY - DEMO)
// =============================================================
/*
button.addEventListener("click", function() {
    console.log("Event Listener Normal:", this);  // button
});

button.addEventListener("click", () => {
    console.log("Event Listener Arrow:", this); // NOT button
});
*/
