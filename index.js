//Your job is to write the following function:

//titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.

//Some questions to consider:

// How can we "iterate" through individual words in a string?- split
// Can we execute an iteration inside an iteration? How?, loop, for..of
// How can we capitalize just the first letter in a word?- toUpperCase
// A couple of hints:

// Break the task into smaller chunks: using the console or a REPL, start by figuring out how to modify one individual element in the tutorials array. Once you've got that working, then figure out how to update the array itself.

//task: We want all the titles to be "title case", in other words, the first letter of each word should be capitalized. Create a new array containing the names of the tutorials with proper title case formatting. For example, 'what does the this keyword mean?' should become 'What Does The This Keyword Mean?'.

//split all the sentences, use to uppercase to format

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 const titleCased = () => tutorials.map((tutorial) => {
 //  return tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
const stringArray = tutorial.split(' ')
const arrayCapitalize = stringArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))
return arrayCapitalize.join(' ') 

 });




 

console.log(titleCased());

