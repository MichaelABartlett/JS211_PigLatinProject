




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
  let pigLatinReturn;

  const pigLatin = (word) => {
    let aWord = word.toLowerCase().trim();
    positionOfFirstVowel(aWord);
    //console.log("first vowel:", positionOfFirstVowel(aWord));
    if(positionOfFirstVowel(aWord) === -1){ 
      let noVowel = aWord.concat("ay");
      //console.log("no vowel in word:" + noVowel);
      console.log('this is the value of noVowel:' ,noVowel);
      
      return noVowel;
    } else if(positionOfFirstVowel(aWord) === 0) {
        let firstVowel = aWord.concat("yay")
        //console.log("word has vowel first:" + firstVowel);
        console.log('this is the value of firstVowel: ', firstVowel);
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
        console.log('this is the value of cWord: ', cWord);
        return cWord;
      }
    
  }
  
  
 

  // ***************** below here is for the DOM ********************************

// getting the word from inputbox and putting it into the Javascript program to be processed into Pig Latin

let button = document.getElementById('enterButton');

// listening for the click event on the button

button.addEventListener("click", function(){
    // letting us know that the button has been clicked
    console.log("The enter button has been clicked");

    let input = document.getElementById("inputbox")
    // getting the word that was typed into  the box
    let text = input.value;
    pigLatinReturn = pigLatin(text);
    // .value returns the value of the text field
    console.log("The word that was entered to be translated: ", text);

    // ******** I got the input box to clear when the enter button on the screen is pressed **************8
    document.getElementById("inputbox").value = "";

    if(text.trim().length == 0){
        // this is checking that if after trimming the white space
        // the length is '0'
        // it then prompts that there is no entry
        console.log('Exiting the function early, because there is nothing inputed into the inputbox');
        return;
    }
//***************** starting to run translation function

    pigLatin(text);
    console.log('this in the value of text: ',text);




    // we are now creating a li element in the DOM
    let li = document.createElement("li");

    // go to the ul in the HTML and add the newly created li to it
    let ul = document.getElementById("translatedWord");
    ul.appendChild(li);

    // update the newly created li with the value of the translated word
    li.innerText = "Entered word: " + text + "  ||" + "   Translated word: " + pigLatinReturn;
    // !!!!!!!!!!!!!!!!!!!!!! the pigLatin(text) for the equal to really did a number on me
    //  but it todally makes since now.  I want to print the value of the function ran with the input value ran thru it

    

}) 