/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

//appears to apply to whatever you js is 'working in' at the time. notice the first this displays an empty obj, while the second displays the window obj (basically all the stuff javascript uses to run). 

// code example for Window Binding
// console.log(this)
function add(a, b) {
    console.log(this);
    return a + b;
  }
//   add(3, 4);
  
// Principle 2

//When 'this' is used inside of an object it automatically refers to the object it is called on (unless explicitly bound to something else)

// code example for Implicit Binding
let dog = {
    food: 'cats',
    favFood: function(){console.log(`My favorite food is ${this.food}`)}
}
//dog.favFood()

// Principle 3

//When using the 'new keyword', 'this' refers to the new object that is being created. It is functionally the same as principle 2

// code example for New Binding
function Constructor(name){
    this.name = name,
    
    this.print = function(){
        console.log(this)
        console.log(this.name)
    }
}
const Tony = new Constructor('Tony')
Tony.print()

// Principle 4

// uses .apply() or .call() to override the implicit binding and manually set the target of the this keyword.

// code example for Explicit Binding

const Pupper = new Constructor('Pupper')
Tony.print.apply(Pupper)