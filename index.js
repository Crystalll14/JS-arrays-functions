// //Number 1 
// Mutating array methods: These methods modify the original array by adding, removing, or changing elements.
// 5 examples of mutating array methods:

// push(): adds one or more elements to the end of an array and returns the new length of the array.
// pop(): removes the last element from an array and returns that element.
// shift(): removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.
// unshift(): adds one or more elements to the beginning of an array and returns the new length of the array.
// splice(): adds or removes elements from an array at a specified index.

// Non-mutating array methods: These methods do not modify the original array, but instead return a new array with the desired modifications.
// 5 examples of non-mutating array methods:

// concat(): returns a new array that concatenates two or more arrays.
// slice(): returns a new array that contains a portion of an array specified by its indices.
// filter(): returns a new array that contains elements that pass a specified test function.
// map(): returns a new array that contains the results of calling a function on each element of an array.
// reduce(): returns a single value that is the result of applying a function to each element of an array.

// Number 2
let lang = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
lang.push('Kotlin')
console.log(lang)
lang.splice(3, 0, 'Java')
console.log(lang)
lang.shift()
console.log(lang)
lang.splice(0, 0, 'Scala','Swift')
console.log(lang)
lang.splice(5,1,'Go','Rust')
console.log(lang)

//Number 3
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
let r = changeFruit(fruit)
console.log(r)
//Value of Fruit = ['apple', 'mango', 'orange'];

//Number 4
function maximum(numbers) {
    return Math.max(...numbers);
}
let numbers = [4, 6, 2, 8, 3];
let max = maximum(numbers);
console.log(max); // Output: 8

//Number 5

function valTimesIndex(num) {
    return num.map((x,i) => x * i);
}
const num = [1, 2, 3, 4, 5];
const result = valTimesIndex(num);
console.log(result);