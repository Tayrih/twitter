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

// funcion que crea un text area y un boton
function createText() {
  var textTweet = document.createElement('textarea');
  var buttonTweet = document.createElement('button');

  textTweet.setAttribute('class','text-tweet');
  textTweet.setAttribute('placeholder','¿Qué está pasando?');
  textTweet.setAttribute('rows','2');
  textTweet.setAttribute('value','text');
  buttonTweet.textContent = "Tweetear";
  buttonTweet.setAttribute('class','white right');

  boxTweet.appendChild(textTweet);
  boxTweet.setAttribute('class', 'txta-input');
  boxTweet.appendChild(buttonTweet);
  //DESHABILITA EL BOTON AL CREARSE
  buton[0].disabled = true;
  buton[0].style.backgroundColor = '#b8e1fa';
  postTweet[0].focus();

// evento para verificar que no se ingrese texto vacio, anida una funcion vacia
  postTweet[0].addEventListener('keyup', function (event) {
     if (postTweet[0].value.substr(0,1) === " ") { // LEEMOS SI LO QUE PRESIONO AL INICIO ES UN ESPACIO
      postTweet[0].value = postTweet[0].value.substr(1); // BORRAMOS O REGRESAMOS AL ESTADO INICIAL
      buton[0].disabled = true;
      buton[0].style.backgroundColor = '#b8e1fa';

    } else {
      buton[0].disabled = false;
	    buton[0].style.backgroundColor = '#50b6f5';
      //countTweets(event); funcion qque no funciona 
      resizeTextArea(event);
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

function countTweets(event) {

	var count = postTweet[0].value.length;
  var span = document.createElement('span');
	var show = 140 - count;
	span.textContent = show;
  boxTweet.appendChild(span);
	if (count > 0 && count < 119) {
		span.style.color = '#50b6f5';
	} else if (count >= 120 && count <= 130) {
		span.style.color = "#f7b101";
	} else if (count > 130 && count <= 140) {
		span.style.color = "#d70908";
	} else {
    buton[0].disabled = true;
    buton[0].style.backgroundColor = '#b8e1fa';
	}
}

function resizeTextArea(event) {
	var colsIn = postTweet[0].getAttribute('cols');
	var rowsIn = postTweet[0].getAttribute('rows');
	if (postTweet[0].value.length !== 0) {
		if (event.keyCode == 13) {
			var rowsFinal = parseInt(rowsIn) + 1;
			postTweet[0].setAttribute('rows', rowsFinal);
		}
	} else {
		postTweet[0].setAttribute('rows', 2);
	}
}
