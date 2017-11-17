var textContainer = document.getElementById('tweets');
var boxTweet = document.getElementById('box-tweet');
var camTweet = document.getElementById("camera");
var postTweet = document.getElementsByClassName('text-tweet');
var buton = document.getElementsByClassName('white right');


// evento click para cambiar el input por un textarea
var change = document.getElementById('input-tweet');
change.addEventListener('click', changeForText);

// funcion que remueve el input y es reemplazado por un text area
function changeForText() {
  boxTweet.removeChild(change);
  boxTweet.removeChild(camTweet);
  createText(event);
}

// funcion que crea un text area con su respectivo boton
function createText() {
  var textTweet = document.createElement('textarea');
  var buttonTweet = document.createElement('button');
  textTweet.setAttribute('class','text-tweet');
  buttonTweet.textContent = "Tweetear";
  buttonTweet.setAttribute('class','white right');
  boxTweet.appendChild(textTweet);
  boxTweet.setAttribute('class', 'txta-input');
  boxTweet.appendChild(buttonTweet);
  buton[0].addEventListener('click', createTweets);
}

// evento para los tweets
function createTweets (event){
  console.log('holi');
    if(postTweet[0].value) {
        var p = document.createElement('p');
        p.textContent = postTweet[0].value;
        p.setAttribute('class','text-tweet');
        textContainer.appendChild(p);
        postTweet[0].value = '';
    }
}
