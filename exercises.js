// Do not change any of the function names

/*
Vocabulary Terms:

Callback Functions - Callback functions allow one to define a function and use it later. So, 
you can declare a function, start another one, and run the origin function inside of the other one. 

Closure - A closure is when a function can see outside of the function it is currently sitting in
and reference something outside of that function. It's like being able to see out your window
from inside your home and say hi to someone outside. 

arguments - Arguments are pieces of information that you pass through a function. Parameters 
are the tools used to refer to the arguments. 

Recursion - Recursion is a concept, not a literal thing. It means to call a function on itself. 
Recursion occurs in most loops, because they iterate through characters in a string, elements in 
an array, or properties in an object. 

prototype - Prototypes refer to categories of objects. When you make an object, it gets 
traits from its category, which is the prototype. Which prototype and qualities the object 
gets depends on how the object is made.

Constructors - Constructors are functions that make objects.
*/

function multiplyArguments() {
  var product = 1;
  
  if (arguments.length === 0) {
    return 0;
  }
  for (var i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}

function invokeCallback(cb) {
  cb();// invoke cb
}

function sumArray(numbers, cb) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) { // sum up all of the integers in the numbers array
    sum += numbers[i];
  }
  cb(sum); // pass the result to cb
  
  
  // no return is necessary
}

function forEach(arr, cb) {
  arr.forEach(function(x) {// iterate over arr and pass its values to cb one by one
	cb(x);// hint: you will be invoking cb multiple times (once for each value in the array)
  });
}

function map(arr, cb) {
  // create a new array
  var array = arr.map(function(x) {// iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
	return cb(x);// the new array should be the same length as the array argument
  });
  return array;
}

function getUserConstructor() {
  return function (options) {// create a constructor called User
	this.username = options.username;// it should accept an options object with username, name, email, and password properties
	this.name = options.name;
	this.email = options.email;
	this.password = options.password;// in the constructor set the username, name, email, and password properties
	this.sayHi = function () {// the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
		return 'Hello, my name is' + this.name; // {{name}} should be the name set on each instance
	};// return the constructor
  };	
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function () {// add a method to the constructor's prototype
	return 'Hello World!';
	// the method should be called 'sayHi' and should return the string 'Hello World!'
  };
}

function addReverseString() {
  String.prototype.reverse = function () {// add a method to the string constructor's prototype that returns a reversed copy of the string
	var newString = '';// name this method reverse
  for (var i = this.length - 1; i > -1; i--){ //iterates backwards through object 
	newString += this[i]; //uses this keyword to add/replace with string at index placement i 
	// you will need to use 'this' inside of reverse
  }
  return newString;
  };
  
}

function nFactorial(n) {
  if (n === 0) return 1;
  return n * nFactorial(n-1);// return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function cacheFunction(cb) {
  // Extra Credit
    var cache = {};// use closure to create a cache for the cb function
	return function(arg) {// the function that you return should accept a single argument and invoke cb with that argument
		if(cache.hasOwnProperty(arg)) {
			return cache[arg];// when the function you return is invoked with an argument it should save that argument and its result
		}// when the function you return is called again with an argument that it has seen before it should not call cb
		else {// but should instead directly returned the previous result
			cache[arg] = cb(arg);// example:
			return cache[arg];// cb -> function(x) { return x * x; }
		}// if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	};// if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
