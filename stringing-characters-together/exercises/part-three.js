//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language[language.indexOf('J')] + language[language.indexOf('S')]);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for Javascript is ${language[0] + language[language.indexOf('S')]}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toLowerCase().replace('S', '5'))
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCaseArray = notTitleCase.split(" ");
notTitleCaseArray[0][0] = "T";
notTitleCaseArray[1][0] = "C";
notTitleCase = notTitleCaseArray[0].concat(notTitleCaseArray[1]);
console.log(notTitleCase);

