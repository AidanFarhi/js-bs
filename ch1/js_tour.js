// Variable basics
let x                           // declare a variable named x
x = 0                           // assign a value to x
console.log(x)                  // print out variable to the standard output
x = 1                           // Integer
x = 0.01                        // Float
x = "hello world"               // String
x = 'YavaSkripts'               // Also a String
x = true                        // Boolean
x = false                       // Also a Boolean
x = null                        // Null means 'no value'
x = undefined                   // A special type of null

// JavaScript objects are the most important data type.
// An object is a collection of name/value pairs, or a string to a value map.
let book = {
    topic: 'JavaScript',
    edition: 7
}
// Access properties using . or []
book.topic                      // => 'JavaScript'
book['edition']                 // => 7
// Assign new properties
book.author = "Flanagan"
book.contents = {}
console.log(book)
// Conditionally access properties with ? (ES2020)
book.contents?.ch01?.sect1      // => undefined

// JavaScript also supports arrays of values
let primes = [2, 3, 5, 7]       // An array of 4 values
primes[0]                       // => 2: the first element (index 0)
primes.length                   // => 4: how many elements in the array
primes[primes.length-1]         // => 7: the last element of the array
primes[4] = 9                   // Add a new element by assignment
primes[4] = 11                  // Alter and existing element by assignment
let empty = []                  // [] is an empty array with no elements
empty.length                    // => 0

// Arrays and objects can hold other arrays and objects
let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
]
let data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]]
}

// An expression is a phrase of JavaScript that can be evaluated to
// produce a value.
// The most common way to form an expression is to use operators.
3 + 2                           // => 5
3 - 2                           // => 1
3 * 2                           // => 6
3 / 2                           // => 1.5
points[1].x - points[0].x       // => 1
"3" + "2"                       // => "32": + adds numbers and concatenates strings

// Shorthand operators
let count = 0
count++                         // Increment by 1
count--                         // Decrement by 1
count += 1                      // Add 2
count *= 3                      // Multipy by 3
console.log(count)              // => 6

// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on
let v1 = 10
let v2 = 20
v1 === v2                       // => false
v1 !== v2                       // => true
v1 < v2                         // => true
v1 <= v2                        // => true
v1 > v2                         // => false
v1 >= v2                        // => false
"two" === "three"               // => false
"two" > "three"                 // => true
false === (v1 > v2);            // => true

// Logical operators combine or invert boolean values
(v1 === 2) && (v2 === 3)        // => true
(v1 > 3) || (v2 < 3)            // => false
!(v1 === v2)                    // => true

// Functions are parameterized blocks of JavaScript code that we can invoke
function plus1(x) {
    return x + 1
}
plus1(10)                       // => 11

let square = function(x) {
    return x * x
}
square(plus1(2))                // => 9

// Arrow functions
const plus2 = x => x + 2
const squareArrow = x => x * x
plus2(10)                       // => 12
squareArrow(plus2(1))           // => 9

// When functions are assigned to the properties of an object,
// they become 'methods'
let a = []
a.push(1, 2, 3)
a.reverse()
console.log(a)

// We can define our own methods too. The 'this' keyword refers to
// the object on which the method is defined
points.dist = function() {
    let p1 = this[0]
    let p2 = this[1]
    let a = p2.x - p1.x
    let b = p2.y - p1.y
    return Math.sqrt(a*a + b*b)
}
points.dist()                   // => 1.4142135623730951

// Some functions illustrating common JavaScript control structure
// statements
function abs(x) {
    if (x >= 0) {
        return x
    }
    return -x
}
abs(-10) === abs(10)            // => true

function sum(array) {
    let sum = 0
    for (let x of array) {
        sum += x
    }
    return sum
}
sum(primes)                     // => 28

function factorial(n) {
    let product = 1
    while (n > 1) {
        product *= n
        n--
    }
    return product
}
factorial(4)                    // => 24

function factorial2(n) {
    let i, product = 1
    for (i = 2; i <= n; i++) {
        product *= i
    }
    return product
}
factorial2(5)                   // => 120

// Classes
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
let p = new Point(1, 1)
p.distance()                    // => 1.4142135623730951