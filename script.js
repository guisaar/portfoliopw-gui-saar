

function scrollBanner() {
  scrollPos = window.scrollY;
  var headerText = document.querySelector('.header-paralax h1')
  headerText.style.marginTop = -(scrollPos/3)+"px";
  headerText.style.opacity = 1-(scrollPos/480);
}

window.addEventListener('scroll', scrollBanner);

window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top >  848 ) {
 var headerText = document.querySelector('.menu2')
  headerText.style.visibility = "visible";
  headerText.style.opacity = 1;
   }
   else if (top <= 848) {
	  var headerText = document.querySelector('.menu2')  
	     headerText.style.opacity = -2;
	    headerText.style.visibility = "hidden";
   }
}

function quantotestemeu(){
	
var myVar = setInterval(descendo, 50);
  function descendo(){
	document.documentElement.scrollTop += 100
	let top = window.pageYOffset || document.documentElement.scrollTop
  
	if(top > 849) {
		clearInterval(myVar);
		
	}   
  }
	
	
	
}


var myVar = setInterval(AgoraHora, 60);
	
function AgoraHora() {
var fundo = document.getElementById('body') 
var fundotop = document.getElementById('topo') 
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



var a9090 = window.document.getElementById('Mywork')

a9090.addEventListener('mouseenter', Entrou9090)
a9090.addEventListener('mouseout', saiu9090)



function Entrou9090(){

var Img = window.document.getElementById('imgwork')   


a9090.style.background = "#ae00ffa1 "
a9090.style.border = "2px solid white "
a9090.style.transition = "border 1s, background 1s"
var myVar = setInterval(trocaImg, 1);
function trocaImg() {
   Img.src = "setabaixo.png"
   Img.src.transition = "src 10s"
     Img.style.marginLeft = "8%"

clearInterval(myVar);


}
}
function saiu9090(){

var Img = window.document.getElementById('imgwork')   

var myVar = setInterval(trocaImg2, 1);
function trocaImg2() {
   Img.src = "setadireta2.png"
     Img.style.marginLeft = "5%"

clearInterval(myVar);
}
a9090.style.background = "#c0c0c003"
a9090.style.border = "2px solid white "
a9090.style.transition = "border 1s, background 1s"

}





/*

window.onload = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img, 0, 0,c.width/3,c.height/3);
  
    c.width =  (window.innerWidth);
    c.height = (window.innerHeight);
	
		ctx.clearRect(0,0,c.width,c.height);
		ctx.drawImage(img,0,0,c.width/3,c.height/3);
  

  img.style.display = "none"
}




   <p>Image to use:</p>
<img id="scream" width="220" height="277" src="egito.png" alt="The Scream">

<p>Canvas:</p>
<canvas id="myCanvas" >
Your browser does not support the HTML5 canvas tag.
</canvas>



<p><strong>Note:</strong> The canvas tag is not supported in Internet 
Explorer 8 and earlier versions.</p>
#myCanvas {
	
	
	width:100%;
	height:800px;
	border:1px solid #d3d3d3
	
}
#myCanvas img{
	
	width:48%;
	max-width:50%;

	
	
}
*/








