const vowels = ["A" , "E" , "I" , "O" , "U"];
var _ = require('underscore');
var number_of_vowels = _.random(1,5);
console.log(number_of_vowels);
var vowels_chosen = _.sample(vowels, number_of_vowels);
console.log(vowels_chosen)
var number_of_consonants = 7 - number_of_vowels
console.log(number_of_consonants)
const consonants = ["B" , "C" , "D" , "F" , "G" , "H" , "J" , "K" , "L" , "M" , "N" , "P" , "Q" ,"R" , "S" , "T" , "V" , "W" , "X" , "Y" , "Z"];
var consonants_chosen = _.sample(consonants, number_of_consonants);
console.log(consonants_chosen)
const prompt = require("prompt-sync")();
const words_guessed = prompt("What words can you make using these letters? ");
console.log(`You entered ${words_guessed}`);