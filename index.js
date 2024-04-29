/**/ 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//creating the array was simple, instead of curly braces, you use regular brackets.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// so to subtract the first element and last elemant from the first array, i had to make a new line of code
// to be able to get the result. i had to use 'ages.lengths' to find the last element. using '- 1', usues the index to 
//find the last element. 
const firstAge = ages[0];
const lastAge = ages[ages.length - 1];
let subtractionResult = lastAge - firstAge;
console.log(subtractionResult);
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//using .push 'pushes' a new element to the end of the array. 
ages.push(49); 
// Use a loop to iterate through the array and calculate the average age.
// i had to use a 'for' loop to calculate the ages and find out what the avarage of the ages were. 
function averageArray(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
   // console.log("i : ", i)
// console.log("sum during loop " + i + " is equal to " + sum )
    sum += array[i]

}
let average = sum / array.length
console.log("Average of array is " + average)
return sum;
}

console.log(averageArray(ages))
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names1 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// Use a loop to iterate through the array and calculate the average number of letters per name.
//this one runs the same as the ages array, but it calculated the number of letters that are in the names instead.
// i originally had '_array' as the parammeter, but relized that it was confusing and when i relized that i was still using 'names1',
// I switched it to make it more sense. HOWEVER....
// i came a cross a NaN error and had to try and figure out how to fix it. i returned to my previous   
// code and realized that my 'avarageArray" had already been used. so I had to change
// my function up to fix it!
function avarageArray1(names1){
    let sum = 0;
for (let i = 0; i < names1.length; i++){
    sum += names1[i].length;
}
let avarage = sum / names1.length;
//console.log(`The avarage number of leters is ${avarage}`)
return avarage;
}

console.log(avarageArray1(names1));

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// I had honestly read this wrong, thinking that the names had to be together but no, it had to be sepparated by spaces. it took me a moment to realize
// that i had to create a 'space charater' rather than just putting down ''. 
let result = ' ';
for (let i = 0; i < names1.length; i++){
    result += names1[i];
    if (i !== names1.length - 1){
        result += ' ';
    }
}
console.log(result);
// How do you access the last element of any array?
function lastElement() {
    let y = names1[names1.length -1];
    return y;
}
console.log ('The Last Element is ' + lastElement());
// How do you access the first element of any array?
function firstElement(){
    let x = names1 [0];
    return x;
}console.log ('The first element is ' + firstElement());
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
//add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
//i had to add a number to nameLengths1 to make things easier to keep track of the following questions and so the code doesn't jumble together. 
// I had to add on the number of letters of each name to add onto the nameLengths to make an array of '6', bringing it togteher. 
let names2 = ["Kelly", "Sam", "Kate"];
let nameLengths1 = [5, 3, 4];

for (let i=0; i < names2.length; i++){
    nameLengths1.push(names2[i].length);
}
console.log(nameLengths1);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// using a for 'loop' to calculate the sum of all the elements to go through each number in the list one by one. 
// so once we go over every number in the list  we stop  as now the sum '0' hold all the length of the 
// number together. using console.log to print it out, we finally get our sum.   
let namelengths1 = [5, 4, 3];
let sum = 0;

for (i = 0; i  < namelengths1.length; i++ ){
    sum += nameLengths1[i];
}
console.log(sum);
// Write a function that takes two parameters, word and n, as arguments and 
//returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// ive decided to take a magic route here because coding is magic... ish. so i have a wand fuction and i'm trying to have my wand spell out 
// a 'word' three times., I used concancateWord1 inside the wand fuction to bring together in an empty string  to have the wand spell out 'word' three times. when i used the 
// return callback, it looped through the code and acknowledged that there was a code that was brought together
// and made it come out when you console.log it out. therefor the magic wand spelled out 'Word' three times.
 function wand(word, n) {
    concancateWord1 = ' ';
    for (let i = 0; i < n; i++){
        concancateWord1 += word;
        if (i !== n - 1){
            concancateWord1 += ' ';
        }
    }
    return concancateWord1

 }
 console.log(wand('word', 3));



// Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.
// When asked do do this one, I had to look for the examples of putting together the first and last name with the space in between
//to make it readable. I used the concancate atribute to bring about the space in between 'Jenny' and 'Gomez'. returning the concancate, it spelled out the name 
//with the space in between when I loged it out. 
let firstName = 'Jenny';
let lastName = 'Gomez';

function fullName(firstName, lastName){
    let concancateName = '';
    concancateName = firstName + ' ' + lastName;
    return concancateName;
}

console.log(fullName(firstName, lastName));

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//this was tricky to remember to do as I was writing it out. Writing it out with the if/else statement and bringing back what was coded previously, 
//it was simple to add up all the numbers in the array, but to have the sum3 come back true or false, was the tricly part as i had to keep it in the function
// of bigUnits, and placing numbers3 into it if it would work or not. 
// i added the 100 to see if the new sum3 is greaters than 100. 
let numbers3 = [13, 45, 56, 27, 38, 94, 21, 17];

function bigUnits(numbers3) {
    let sum3 = 0; 
    for (let i = 0; i < numbers3.length; i++) {
        sum3 += numbers3[i];
        }   
    if (sum3 > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(bigUnits(numbers3))

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
// this was fairly simple enough for me to write out without much complication,
// i had to make sure that programically  to make the code fuction avarage out the 
//numbers i wrote down, i had to use a for fuction to get my arrays avarage. 
const array2 = [7, 10, 13, 87, 45, 69, 74, 40];
function avarageArray(arr){
    let sum4 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum4 += arr[i];
        }
        return sum4/arr.length;
}
console.log(avarageArray(array2))

// Write a function that takes two arrays of numbers and returns true if the average 
//of the elements in the first array is greater than the average of the elements in the second array.
// I honestly had to play around with this code for a hot minute before I coud get it down,
//  i messed up a few times and i didn't understand why it wasn't working until i fiddled around with it before
//turning to examples of why it wasn't working. It was mostly undefined errors and syntax errors
// that kept the code from working. as it was tricky to keept it from messing with the other codes. 
function compareTheAvarages(numbers3, array2){
    let sum1 = 0;
    for(let i = 0; i <= numbers3.length; i++){
        sum1 += numbers3[i];
    }
    let avarageNum1 = sum1/numbers3.length;

    let sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    let avarageNum2 = sum2/array2.length;
    
    if (avarageNum1 > avarageNum2){
        return true;
    } else {
        return false;
    }
}
console.log (compareTheAvarages(numbers3, array2));

// Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// Whiles writing out this code, i did hit a few roadblocks, i had to try and remember
//how booleans work and work the string a little to make it make sense. i had to use
//Number to create a constructor to make sure that moneyInPocket was used in the block of code.
//
let isHotOutside = true;
let moneyInPocket = '10.50';

function willBuyDrink(isHotOutside, moneyInPocket){
    moneyInPocket = Number(moneyInPocket);
    if (isHotOutside && moneyInPocket >= 10.50) {
        return true;
    } else {
        return false;
    } 
    }
console.log(willBuyDrink(isHotOutside, moneyInPocket));

// Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.
// as I work in a potato factory we have to sepatrate the bad potatoes from the good ones,
// i didn't want any large fraction numbers to make it hard to read, so i had to play with the 
//numbers a little. I used an arrow function to use a shorter code that was simple
// and easy to make without over complicating it. i had to add the 100 to the 
// code because i wanted to avarage out howmany good and bad potatoes can be separated.
//while it only has one statement returned it was simple enough to work. Arrow functions
// are easier to use when you want smaller more precise code. 
let goodPotatoes = 10;
let badPotatoes = 6;

const countedPotatoes = (goodPotatoes, badPotatoes) =>{
    let totalPotatoes = goodPotatoes + badPotatoes;
    let allowedPotatoes = (goodPotatoes/totalPotatoes) * 100;
    return allowedPotatoes;
}
console.log(`The avarage number of potatoes is: ${countedPotatoes(goodPotatoes, badPotatoes)}%`);
    