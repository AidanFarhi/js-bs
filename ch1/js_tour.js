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
console.lot(count)              // => 6