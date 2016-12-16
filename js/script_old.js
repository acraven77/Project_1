



//Array 
var usedNums = new Array();
var initQuote = '';
var button = '';

function intervalQuote() {
  document.getElementById('quote-box').innerHTML = printQuote();
  document.getElementById('color-change').style.background = randColor();
}

function intervalChange() {
  setInterval(function(){ intervalQuote(); }, 15000);
}

function getNum() {
    var num = Math.floor(Math.random() * quote.length);
      return num;
}

function randRGB() {
  var randColor = Math.floor(Math.random() * 256);
    return randColor;
}

function randColor() {
  var color = 'rgb(';
    color += randRGB() + ',';
    color += randRGB() + ',';
    color += randRGB() + ')';
      return color;
}

function getRandomQuote(tags) {
  var randNum = getNum();
  var picked = usedNums.indexOf(randNum);
    if ( picked !== -1 ) {
      while ( picked !== -1 ) {
        randNum = getNum();
        picked = usedNums.indexOf(randNum);
      }
    }
  usedNums.push(randNum);
    if ( usedNums.length === quote.length ) {
      usedNums = [];
    }
      return randNum;
    }

function printQuote() {
  var quoteObject = getRandomQuote();
  var quoteHTML = "";
    quoteObject = quote[quoteObject];
    quoteHTML = '<p class="quote">' + quoteObject.text + '</p>';
    quoteHTML += '<p class="source">' + quoteObject.source;
      if ( quoteObject.citation ) {
        quoteHTML += '<span class="citation">' + quoteObject.citation + '</span>';
    } if ( quoteObject.year ) {
        quoteHTML += '<span class="year">' + quoteObject.year + '</span>';
    } if ( quoteObject.tags ) {
      quoteHTML += '<span class="year">' + quoteObject.tags + '</span>';
    }
      quoteHTML += '</p>';
        return quoteHTML;
}

button += document.getElementById('loadQuote').addEventListener("click", function() {
          document.getElementById('quote-box').innerHTML = printQuote();
          document.getElementById('color-change').style.background = randColor();
});

initQuote += window.addEventListener("load", function(){
    intervalQuote();
    intervalChange();
});

initQuote;
button;
