// /* 

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

// */
// // EXAMPLE SOLUTION CODE:
// // function Airplane(name) {
// //     this.name = name;
// //     this.isFlying = false;
// //   }
// //   Airplane.prototype.takeOff = function() {
// //     this.isFlying = true;
// //   };
// //   Airplane.prototype.land = function() {
// //     this.isFlying = false;
// //   };

// class Airplane {
//   constructor(name) {
//     this.name = name;
//     this.isFlying = false;
//   }

//   takeOff() {
//     this.isFlying = true;
//   }

//   land() {
//     this.isFlying = false;
//   }
// }

// /*
//     // 👇 COMPLETE YOUR WORK BELOW 👇
//     // 👇 COMPLETE YOUR WORK BELOW 👇
//     // 👇 COMPLETE YOUR WORK BELOW 👇
//     */

// /*
//    TASK 1
//    - Write a Person Constructor that initializes `name` and `age` from arguments.
//    - All instances of Person should initialize with an empty `stomach` array.
//    - Give instances of Person the ability to `.eat("someFood")`:
//    + When eating an edible, it should be pushed into the `stomach`.
//    + The `eat` method should have no effect if there are 10 items in the `stomach`.
//    - Give instances of Person the ability to `.poop()`:
//    + When an instance poops, its `stomach` should empty.
//    - Give instances of Person a method `.toString()`:
//    + It should return a string with `name` and `age`. Example: "Mary, 50"
//    */

// //   function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// //     this.stomach = [];
// //   }
// //   Person.prototype.eat = function(someFood) {
// //     if (this.stomach.length < 10) {
// //       this.stomach.push(someFood);
// //     }
// //   };

// //   Person.prototype.poop = function() {
// //     this.stomach = [];
// //   };

// //   Person.prototype.toString = function() {
// //     return `${this.name}, ${this.age}`;
// //   };

// //----------Class Construction---------

// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //     this.stomach = [];
// //   }
// //   eat(someFood) {
// //     if (this.stomach.length < 10) {
// //       this.stomach.push(someFood);
// //     }
// //   }

// //   poop() {
// //     this.stomach = [];
// //   }

// //   toString() {
// //     return `${this.name}, ${this.age}`;
// //   }
// // }

// // const Fred = new Person("Fred", 37);
// // Fred.eat();
// // console.log(Person);
// // console.log(Fred);
// // /*
//     //                     TASK 2
//     //                     - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
//     //                     - All instances built with Car:
//     //                     + should initialize with an `tank` at 0
//     //                     + should initialize with an `odometer` at 0
//     //                     - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
//     // - Give cars ability to `.drive(distance)`. The distance driven:
//     // + Should cause the `odometer` to go up.
//     // + Should cause the the `tank` to go down taking `milesPerGallon` into account.
//     // - A car which runs out of `fuel` while driving can't drive any more distance:
//     // + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
//     // */

// //    function Car(model, milesPerGallon) {
// //        this.model = model;
// //        this.milesPerGallon = milesPerGallon;
// //        this.tank = 0;
// //        this.odometer = 0;
// //     }

// //     Car.prototype.fill = function(gallons) {
// //         this.tank += gallons;
// //     };

// //     Car.prototype.drive = function(distance) {
// //         let needFuel = distance / this.milesPerGallon;
// //         let milesLeft = this.tank * this.milesPerGallon;
// //         if (this.tank <= needFuel) {
// //             this.tank = 0;
// //             this.odometer = this.odometer + milesLeft;
// //             return `I ran out of fuel at ${this.odometer} miles!`;
// //         } else {
// //             this.odometer += distance;
// //             this.tank = this.tank - needFuel;
// //         }
// //     };

// //----------Class Construction---------

// class Car {
//   constructor(model, milesPerGallon) {
//     this.model = model;
//     this.milesPerGallon = milesPerGallon;
//     this.tank = 0;
//     this.odometer = 0;
//   }

//   fill() {
//     this.tank += gallons;
//   }

//   drive() {
//     let needFuel = distance / this.milesPerGallon;
//     let milesLeft = this.tank * this.milesPerGallon;
//     if (this.tank <= needFuel) {
//       this.tank = 0;
//       this.odometer = this.odometer + milesLeft;
//       return `I ran out of fuel at ${this.odometer} miles!`;
//     } else {
//       this.odometer += distance;
//       this.tank = this.tank - needFuel;
//     }
//   }
// }

// /*
//     TASK 3
//     - Write a Baby constructor subclassing Person.
//     - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
//     - Besides the methods on Person.prototype, babies have the ability to `.play()`:
//     + Should return a string "Playing with x", x being the favorite toy.
//     */

// //    function Baby(name, favoriteToy) {
// //        Person.call(this, name, favoriteToy);
// //        this.name = name;
// //        this.favoriteToy = favoriteToy;
// //     }
// //     Baby.prototype = Object.create(Person.prototype);
// //     Baby.prototype.play = function() {
// //         return `Playing with ${this.favoriteToy}`;
// //     };

// //----------Class Construction---------
// class Baby extends Person {
//   constructor(name, favoriteToy) {
//     super(name, favoriteToy);
//   }
//   play() {
//     return `Playing with ${this.favoriteToy}`;
//   }
// }

// /* 
//     TASK 4
  
//     In your own words explain the four principles for the "this" keyword below:
//     1. 
//     2. 
//     3. 
//     4. 
//   */

// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// if (typeof exports !== "undefined") {
//   module.exports = module.exports || {};
//   if (Airplane) {
//     module.exports.Airplane = Airplane;
//   }
//   if (Person) {
//     module.exports.Person = Person;
//   }
//   if (Car) {
//     module.exports.Car = Car;
//   }
//   if (Baby) {
//     module.exports.Baby = Baby;
//   }
// }
