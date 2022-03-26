function getRandomVowels(vowels, number_of_vowels) {
    var shuffled = vowels.slice(0), i = vowels.length, temp, index;
    while (i--) {
        index = Math.floor((i+1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, 5);
}
const vowels = ["A" , "E" , "I" , "O" , "U"];
var number_of_vowels = Math.floor(Math.random() * 10);
var random_vowels = getRandomVowels(x, number_of_vowels)


const prompt = require("prompt-sync")();
const words_guessed = prompt("What words can you make using these letters? ");
console.log(`You entered ${words_guessed}`);