var textContainer = document.getElementById('tweets');

var change = document.getElementById('input-tweet');
change.addEventListener('click', createText);

function createText() {
  var textTweet = document.createElement('textarea');
  var buttonTweet = document.createElement('a');
  buttonTweet.textContent = "Tweetear";
  buttonTweet.setAttribute('href','#');
  textContainer.appendChild(textTweet);
  textContainer.appendChild(buttonTweet);
}
