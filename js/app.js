var textContainer = document.getElementById('tweets');
var box_tweet = document.getElementById("box-tweet");
var cam_tweet = document.getElementById("camera");


var change = document.getElementById('input-tweet');
change.addEventListener('click', changeForText);

function changeForText() {
  box_tweet.removeChild(change);
  box_tweet.removeChild(cam_tweet);
  createText(event);
}

function createText() {
  var textTweet = document.createElement('textarea');
  var buttonTweet = document.createElement('button');
  textTweet.setAttribute('class','text-tweet');
  buttonTweet.textContent = "Tweetear";
  buttonTweet.setAttribute('class','white right');
  box_tweet.appendChild(textTweet);
  box_tweet.setAttribute('class', 'txta-input');
  box_tweet.appendChild(buttonTweet);
}
