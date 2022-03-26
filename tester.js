var _ = require('underscore');
var numbers = [1, 2, 3, 4];
var listOfNumbers = '';
_.each(numbers, function(x) { listOfNumbers += x + ' ' });
console.log(listOfNumbers);
