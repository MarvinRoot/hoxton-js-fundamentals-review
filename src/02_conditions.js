/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
// 1.1 Call the function with "Bob" and "Steven" as arguments.
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
// 1.3. Call the function with any arguments we like to test the remaining use case.
function getShorterString(string1, string2){
    if(string1.length === string2.length) return "They're the same length!"
    else if(string1.length > string2.length) return string2
    else return string1
}
// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean
function checkDirtyBirds(array){
    let count = 0
    for(let bird of array){
        if(bird === 'pigeon' || bird === 'seagull' || bird === 'bin chicken') count++
    }
    if(count === 0) return "Birds are cute!"
    else if(count === 1) return "Eww"
    else if(count === 2) return "Oh god"
    else return "Where the hell am I?"
}
// 2.1 Test all the scenarios by calling the function with different arguments.