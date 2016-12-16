//Not sure if I need comments for everything in the code as I am very new to programming.
//I thought better be safe than sorry.

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


//Array variable for the used index numbers that correlate to the used quotes.
var usedNums = [];

//Variable holds a random number that is used to select a random object by it's index number in the quote array.
//Needs to be global because it is used outside of a function.
var randNum;

//Variable to hold the interval function, also needs to be global variable for access outside of function.
var intervalId;

//I feel like this code 'gets the job done' however I believe it could be better.
//I am not exactly sure how to go about it though.
//This will display a random quote and color when the webpage is loaded. It also starts the interval timer.
  window.addEventListener("load", function(){
    document.getElementById('quote-box').innerHTML = printQuote();
    document.getElementById('color-change').style.background = randColor();
      intervalChange();
});

//Again I feel like this code can be better simplified as well, just not too sure on what to do.
//The quote and background color are changed once the button is pressed.
//The interval timer is cleared once the button is pressed and then restarted so the quote is displayed
//for the proper amount of time.
  document.getElementById('loadQuote').addEventListener("click", function() {
    document.getElementById('quote-box').innerHTML = printQuote();
    document.getElementById('color-change').style.background = randColor();
      clearInterval(intervalId);
      intervalChange();
});

//This function will start the interval timer and grab a new quote and color once called.
function intervalChange() {
  intervalId = setInterval(function(){
    document.getElementById('quote-box').innerHTML = printQuote();
    document.getElementById('color-change').style.background = randColor();
  } , 15000);
}

//This function generates and random number between 0-255, the Math.floor does not allow the random number to be 1
//so it will never be 256. This is passed to the randColor function to randomly create colors in RGB.
function randRGB() {
  var randColor = Math.floor(Math.random() * 256);
    return randColor;
}

//This funciton grabs a random number between 0-255 3 times and builds a random RGB color string.
function randColor() {
  var color = 'rgb(';
    color += randRGB() + ',';
    color += randRGB() + ',';
    color += randRGB() + ')';
      return color;
}

//This function grabs a random number and checks to see if it has already been used by referencing the usedNums array.
//Next it checks to see if the usedNums array is full (meaning it is the same length and the quotes array)
//and if so it removes all data from the array.
//If the number has been used a new number will be chosen and it will continue to get a new number until "-1" is returned,
//which means a number has been chosen that has not been used yet. Then the number will be added to the usedNums array
//and the entire object is returned to the function that called it.
function getRandomQuote() {
  var picked;
  do {
    randNum = Math.floor(Math.random() * quotes.length);
    picked = usedNums.indexOf(randNum);
  if ( usedNums.length === quotes.length ) {
      usedNums = [];
  }
}
  while ( picked !== -1 );
    usedNums.push(randNum);
//I left this in to double check that 2 of the same numbers are not used in usedNums Array.
      console.log('usedNums ' + usedNums.join());
        return quotes[randNum];
}

//This function calls and recieves a random quote object from the random quote function. It then builds
//the string by object property and wraps the data in the appropriate html tags. If the citation, year, and tags
//information is not present the data will not be displayed in the webpage.
function printQuote() {
  var quoteObject = getRandomQuote();
  var quoteHTML;
    quoteHTML = '<p class="quote">' + quoteObject.text + '</p>';
    quoteHTML += '<p class="source">' + quoteObject.source;
      if ( quoteObject.citation ) {
        quoteHTML += '<span class="citation">' + quoteObject.citation + '</span>';
    } if ( quoteObject.year ) {
        quoteHTML += '<span class="year">' + quoteObject.year + '</span>';
    } if ( quoteObject.tags ) {
      quoteHTML += '<span class="tags">' + quoteObject.tags + '</span>';
    }
      quoteHTML += '</p>';
        return quoteHTML;
}
