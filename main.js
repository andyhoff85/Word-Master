const vowels = ["A" , "E" , "I" , "O" , "U"];
var _ = require('lodash');
var number_of_vowels = _.random(1,5);
console.log(number_of_vowels);
var vowels_chosen = _.sampleSize(vowels, number_of_vowels);
console.log(vowels_chosen);
var number_of_consonants = 7 - number_of_vowels;
console.log(number_of_consonants);
const consonants = ["B" , "C" , "D" , "F" , "G" , "H" , "J" , "K" , "L" , "M" , "N" , "P" , "Q" ,"R" , "S" , "T" , "V" , "W" , "X" , "Y" , "Z"];
var consonants_chosen = _.sampleSize(consonants, number_of_consonants);
console.log(consonants_chosen);
function pick_letters (vowels_chosen, consonants_chosen){
    return letters = vowels_chosen.concat(consonants_chosen);
};
pick_letters(vowels_chosen, consonants_chosen);
console.log(letters);
let wordsguessed = prompt('What words can you make using ?');
