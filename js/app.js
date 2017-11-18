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
  textTweet.setAttribute('placeholder','¿Qué está pasando?');
  textTweet.setAttribute('value','text');
  buttonTweet.textContent = "Tweetear";
  buttonTweet.setAttribute('class','white right');

  boxTweet.appendChild(textTweet);
  boxTweet.setAttribute('class', 'txta-input');
  boxTweet.appendChild(buttonTweet);

  postTweet[0].addEventListener('click', function (event) {

      buton[0].disabled = true;
      buton[0].style.backgroundColor = '#b8e1fa';

  });
  postTweet[0].addEventListener('keydown', function (event) {
    if ((event.keyCode) === 32) {
      buton[0].disabled = true;
      buton[0].style.backgroundColor = '#b8e1fa';

    } else {
      buton[0].disabled = false;
	    buton[0].style.backgroundColor = '#50b6f5';
      buton[0].addEventListener('click', createTweets);
    }

  });
}

// evento para crear  tweets y agregarlos al html
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
