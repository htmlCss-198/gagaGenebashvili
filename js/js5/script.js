// Task 1
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray = array2.map(element => {
    if (typeof element === 'number') {
        return element * element;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else {
        return element;
    }
});
console.log(newArray);

// Task 2
let info = 'good day';
let extractedWord = info.slice(info.indexOf('day'), info.indexOf('day') + 3);
console.log(extractedWord);

// Task 3
function calculateStringLength(str) {
    return str.length;
}

console.log(calculateStringLength("Hello")); // Example usage

// Task 4
let correctAnswer = "tbilisi";
let userAnswer = prompt("Capital of Georgia?");
userAnswer = userAnswer.toLowerCase();
if (userAnswer === correctAnswer) {
    console.log("Correct");
} else {
    console.log("False");
}

// Task 5
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(0, fruits.length, "strawberry");
console.log(fruits);
// Exercise 1
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray = array2.map(item => {
    if (typeof item === 'number') {
        return item * item;
    } else if (typeof item === 'string') {
        return item.toUpperCase();
    } else {
        return item;
    }
});

console.log(newArray);

// Exercise 2
let info = 'good day';
let extractedWord = info.slice(5); // Extracting the word "day"
console.log(extractedWord);

// Exercise 3
function stringLength(str) {
    return str.length;
}

console.log(stringLength("Hello")); // Example usage

// Exercise 4
let correctAnswer = "atlanta";
let userResponse = prompt("Capital of Georgia?").toLowerCase();

if (userResponse === correctAnswer) {
    console.log("Correct");
} else {
    console.log("False");
}

// Exercise 5
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(0, fruits.length, "strawberry");
console.log(fruits);

// Exercise 6
let numbersArray = [5, 25, 89, 120, 36];
numbersArray.push("javascript", "python");
numbersArray.unshift("html and css");
console.log("Number of elements in the array:", numbersArray.length);
numbersArray.shift();
numbersArray.pop();
console.log(numbersArray);

// Exercise 7
let fruitsArray = ["orange", "banana", "kiwi"];
console.log("Number of elements in the array:", fruitsArray.length);
fruitsArray.push("apple", "pineapple");
fruitsArray.unshift("watermelon");
console.log("Number of elements in the array:", fruitsArray.length);
fruitsArray.splice(2, 0, "mango");
fruitsArray.shift();
fruitsArray.pop();
console.log("Number of elements left in the array:", fruitsArray.length);

// Exercise 8
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, 'a', 'b', 'c');
console.log(array3);

// Exercise 9
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray5 = array5.map(item => item / 3);
console.log(newArray5);

// Exercise 10
let array7 = [15, 100, 25, 10, 36];
let index = array7.indexOf(10);
if (index !== -1) {
    array7.splice(index, 1);
}
console.log(array7);

// Exercise 11
let array8 = [1, 2, 3, 4, 5];
let index2 = array8.indexOf(3);
if (index2 !== -1) {
    array8[index2] = "three";
}
console.log(array8);

// Exercise 12
let array1 = ["hello1", 14, 24, "hello2"];
let numbersOnly = array1.filter(item => typeof item === 'number');
console.log(numbersOnly);

// Exercise 13
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach(item => sum += item);
console.log("Sum of numbers:", sum);

// Exercise 14
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filteredLanguages = languages.filter(word => word.length > 3);
console.log(filteredLanguages);

// Exercise 15
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let wordsWithM = words.filter(word => word.toLowerCase().includes('m'));
console.log(wordsWithM);

// Exercise 16
function checkHTTPS(link) {
    if (link.indexOf("https://") !== -1) {
        return "Yes, it includes";
    } else {
        return "No, it does not include";
    }
}

console.log(checkHTTPS("https://google.com"));

// Exercise 17
let array6 = [-1, -2, -3, 4];
let hasPositiveNumber = array6.some(num => num > 0);
console.log("Does the array contain at least one positive number?", hasPositiveNumber);
// Exercise 18
let string = '12345';
let numbersArray = string.split('').map(Number);
let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// Exercise 19
let numbers = [10, 20, 30, 40];
let sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers using reduce:", sumOfNumbers);

// Exercise 20
let array = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
let positiveNumbers = array.reduce((acc, curr) => {
    curr.forEach(num => {
        if (num > 0) {
            acc.push(num);
        }
    });
    return acc;
}, []);

console.log("Positive numbers:", positiveNumbers);

