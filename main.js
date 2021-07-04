'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ************************** my code below ******************************

/**
 * return the position of the first vowel in the word
 * in no vowel is in the word, return -1
 * @param {string} word
 */
 //let aWord = "swm"

 function positionOfFirstVowel(word){
  // try array of vowels in a loop using indexOf method

  // go thru every letter in the word
  // and if I find a vowel, i will return
  // the position of the letter right away
  // without going thru the rest of the loop
  for(let i=0; i < word.length; i++){
    let letter = word[i];
    // if("aeiou".includes(letter)){
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    
      return i;
    }
  }

   return -1;

}



const pigLatin = (word) => {
  let aWord = word.toLowerCase().trim();
  positionOfFirstVowel(aWord);
  //console.log("first vowel:", positionOfFirstVowel(aWord));
  if(positionOfFirstVowel(aWord) === -1){ 
    let noVowel = aWord.concat("ay");
    //console.log("no vowel in word:" + noVowel);
    return noVowel;
  } else if(positionOfFirstVowel(aWord) === 0) {
      let firstVowel = aWord.concat("yay")
      //console.log("word has vowel first:" + firstVowel);
      return firstVowel;
    } else {
      
      //console.log("this is aWord:" + aWord)
      //console.log("first vowel:", positionOfFirstVowel(aWord));
      //console.log("aWord slice:" + aWord.slice(positionOfFirstVowel(aWord)));
      let cutWordEnd = aWord.slice(positionOfFirstVowel(aWord));
      //console.log("cutWordEnd:" + cutWordEnd);
      let cutWordStart = aWord.substring(positionOfFirstVowel(aWord),-1);
      //console.log("cutWordStart:" + cutWordStart);
      let cWord = cutWordEnd.concat(cutWordStart).concat("ay")
      //console.log("cWord: " + cWord)
      return cWord;
    }
    //console.log("still working on it")
  
}
//pigWork(aWord);

//  let cutCWord = cWord.slice(0,1);
// let newWord = cWord.slice(1).concat(cutCWord).concat("ay"); 







  
  // Your code here



// ******************************* my code above *********************************************


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
