// This is a list of words
let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// TODO: implement this function to return a string containing all words in a paragraph.
function createParagraph(words){
    let paragraph = '';
    let tama = words.length -1;
    words.forEach((elemt, i) => i < tama ? paragraph = paragraph + elemt + ' ':paragraph += elemt);
//   let temp = words.join(' ');
    return paragraph;
}

// Prints paragraph to console
console.log(createParagraph(words));

// don't change this line
if (typeof module !== 'undefined') {
  module.exports = createParagraph;
}