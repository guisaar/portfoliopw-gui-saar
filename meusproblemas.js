function qza(){
// varWindow = window.open ('zaa.html', 'pagina','width=350', 'height=255', 'top=100', 'left=110', 'scrollbars=no')
// newpopupWindow = window.open ('zaa.html', 'pagina', "width=25% ,height=25%,left=100%, location= yes ,titlebar=yes ,status=yes , scrollbars=yes ");

location.href = "#openModal" // chama o ,meu css do pop up


 
 }

  n2000 = 0
  
function Cadastrar() {
n2000 = 0

}
function Senvia() {
	
n2000 = 1

passwo = document.getElementById('passw') 
alert(passwo)
}
function Entrar() {
n2000 = 2
alert("Obrigado pela sua colaboração")
}

function qzaa(){
// varWindow = window.open ('zaa.html', 'pagina','width=350', 'height=255', 'top=100', 'left=110', 'scrollbars=no')
// newpopupWindow = window.open ('zaa.html', 'pagina', "width=25% ,height=25%,left=100%, location= yes ,titlebar=yes ,status=yes , scrollbars=yes ");
if(n2000 > 0 && n2000 < 2){
 location.href = "#openModal3" // chama o ,meu css do pop up}

}
else if(n2000 < 1){
	n2000 = 1
 location.href = "#openModal2" // chama o ,meu css do pop up}
	
}
else if (n2000 > 1 ) {
	
	alert("Obrigado pela sua colaboração")
	
}
}


var myVar = setInterval(AgoraHora, 60);
	
function AgoraHora() {
var fundo = document.getElementById('body') 
var pwallpapaer = 0
var hora = 0
var Sec = 0
var min = 0
var agora = new Date()
var hora1 = agora.getHours()
var min1 = agora.getMinutes()
var Sec1 = agora.getSeconds()
if (hora1 <= 9) {
hora = `0${hora1}`

}
else if(hora1 >= 10) {
hora = hora1

}  
if (min1 <= 9) {
min = `0${min1}`
}
else if (min1 >= 10){

min = min1
}
if (Sec1 <= 9) {
Sec = `0${Sec1}`
}
else if (Sec1 >= 10){

Sec = Sec1
}

if (hora1 > 0  &&hora1 <= 12 ) {

fundo.style.background = "url('a4.jpg')"
fundo.style.backgroundSize = "contain "
fundo.style.backgroundSize = "100%"
}
else if (hora1 > 12 && hora1 <= 18 ) {


fundo.style.background = "url('a5.jpg')"
fundo.style.backgroundSize = "contain "
fundo.style.backgroundSize = "100%"
}
else if (hora1 > 18 && hora1 <= 24 ) {


fundo.style.background = "url('a2.jpg')"
fundo.style.backgroundSize = "contain "
fundo.style.backgroundSize = "100%"
  
}
var ou = document.getElementById('Hora') 
 ou.innerHTML = ( 'Agora é: ' + hora + ':' + min + ':' + Sec ) 

}
/* a partir da qui slideshow  */
document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream');
  var items = document.querySelectorAll('.gallery__item');
  var prev = document.querySelector('.gallery__prev');
  var next = document.querySelector('.gallery__next');

  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
  });

  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
  });
});