var textContainer = document.getElementById('tweets');

var change = document.getElementById('input-tweet');
change.addEventListener('click', changeForText);

function changeForText() {
  createText(event);
}

function createText() {
  var textTweet = document.createElement('textarea');
  var buttonTweet = document.createElement('button');
  textTweet.setAttribute('class','text-tweet');
  buttonTweet.textContent = "Tweetear";
  buttonTweet.setAttribute('class','white right');
  textContainer.appendChild(textTweet);
  textContainer.appendChild(buttonTweet);
}
