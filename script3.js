

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




var a222 = window.document.getElementById('Mywork')

a222.addEventListener('mouseenter', Entrou222)
a222.addEventListener('mouseout', saiu222)



function Entrou222(){

var Img = window.document.getElementById('imgwork')   


a222.style.background = "#ae00ffa1 "
a222.style.border = "2px solid white "
a222.style.transition = "border 1s, background 1s"
var myVar = setInterval(trocaImg, 1);
function trocaImg() {
   Img.src = "setabaixo.png"
   Img.src.transition = "src 10s"
     Img.style.marginLeft = "8%"

clearInterval(myVar);


}
}
function saiu222(){

var Img = window.document.getElementById('imgwork')   

var myVar = setInterval(trocaImg2, 1);
function trocaImg2() {
   Img.src = "setadireta2.png"
     Img.style.marginLeft = "5%"

clearInterval(myVar);
}
a222.style.background = "#c0c0c003"
a222.style.border = "2px solid white "
a222.style.transition = "border 1s, background 1s"

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






var a = window.document.getElementsByClassName('lateral2')[0];
a.addEventListener('mouseenter', saiu)
var a012 = window.document.getElementsByClassName('lateral1')[0];
a012.addEventListener('mouseenter', Entrou)
var a013 = window.document.getElementsByClassName('lateral3')[0];
a013.addEventListener('mouseenter', saiu)
var a034 = window.document.getElementsByClassName('lateral4')[0];
a034.addEventListener('mouseenter', saiu)
var a035 = window.document.getElementsByClassName('lateral5')[0];
a035.addEventListener('mouseenter', saiu)
var a02222 = window.document.getElementsByClassName('slide')[0,1,2];
a02222.addEventListener('mouseenter', saiu)
var a022223 = window.document.getElementsByClassName('slide')[0,1,2];
a022223.addEventListener('mouseout', saiu)

var a0222232 = window.document.getElementsByClassName('Texto3131')[0];
a0222232.addEventListener('mouseenter', saiu)
function Entrou(){

 


var voteponasideia = document.querySelector('#teste1')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu(){

var voteponasideia = document.querySelector('#teste1')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}



var a2 = window.document.getElementsByClassName('lateral1')[0];
a2.addEventListener('mouseenter', saiu2)

var a212 = window.document.getElementsByClassName('lateral2')[0];
a212.addEventListener('mouseenter', Entrou2)
var a213 = window.document.getElementsByClassName('lateral3')[0];
a213.addEventListener('mouseenter', saiu2)
var a234 = window.document.getElementsByClassName('lateral4')[0];
a234.addEventListener('mouseenter', saiu2)
var a235 = window.document.getElementsByClassName('lateral5')[0];
a235.addEventListener('mouseenter', saiu2)
var a22222 = window.document.getElementsByClassName('slide')[0,1,2];
a22222.addEventListener('mouseenter', saiu2)
var a222223 = window.document.getElementsByClassName('slide')[0,1,2];
a022223.addEventListener('mouseout', saiu2)

var a2222232 = window.document.getElementsByClassName('Texto3132')[0];
a2222232.addEventListener('mouseenter', saiu2)

function Entrou2(){

 


var voteponasideia = document.querySelector('#teste2')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu2(){

var voteponasideia = document.querySelector('#teste2')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}

var a3 = window.document.getElementsByClassName('lateral1')[0];
a3.addEventListener('mouseenter', saiu3)

var a312 = window.document.getElementsByClassName('lateral3')[0];
a312.addEventListener('mouseenter', Entrou3)
var a313 = window.document.getElementsByClassName('lateral2')[0];
a313.addEventListener('mouseenter', saiu3)
var a334 = window.document.getElementsByClassName('lateral4')[0];
a334.addEventListener('mouseenter', saiu3)
var a335 = window.document.getElementsByClassName('lateral5')[0];
a335.addEventListener('mouseenter', saiu3)
var a32222 = window.document.getElementsByClassName('slide')[0,1,2];
a32222.addEventListener('mouseenter', saiu3)


var a3222232 = window.document.getElementsByClassName('Texto3133')[0];
a3222232.addEventListener('mouseenter', saiu3)


function Entrou3(){

 


var voteponasideia = document.querySelector('#teste3')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu3(){

var voteponasideia = document.querySelector('#teste3')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}


var a4 = window.document.getElementsByClassName('lateral2')[0];
a.addEventListener('mouseenter', saiu4)
var a412 = window.document.getElementsByClassName('lateral4')[0];
a412.addEventListener('mouseenter', Entrou4)
var a413 = window.document.getElementsByClassName('lateral3')[0];
a413.addEventListener('mouseenter', saiu4)
var a434 = window.document.getElementsByClassName('lateral1')[0];
a434.addEventListener('mouseenter', saiu4)
var a435 = window.document.getElementsByClassName('lateral5')[0];
a435.addEventListener('mouseenter', saiu4)
var a42222 = window.document.getElementsByClassName('slide')[0,1,2];
a42222.addEventListener('mouseenter', saiu4)


var a4222232 = window.document.getElementsByClassName('Texto3134')[0];
a4222232.addEventListener('mouseenter', saiu)
function Entrou4(){

 


var voteponasideia = document.querySelector('#teste4')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu4(){

var voteponasideia = document.querySelector('#teste4')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}

var a5 = window.document.getElementsByClassName('lateral5')[0];
a5.addEventListener('mouseenter', saiu5)

var a512 = window.document.getElementsByClassName('lateral5')[0];
a512.addEventListener('mouseenter', Entrou5)
var a513 = window.document.getElementsByClassName('lateral2')[0];
a513.addEventListener('mouseenter', saiu5)
var a534 = window.document.getElementsByClassName('lateral3')[0];
a534.addEventListener('mouseenter', saiu5)
var a535 = window.document.getElementsByClassName('lateral4')[0];
a535.addEventListener('mouseenter', saiu5)
var a52222 = window.document.getElementsByClassName('slide')[0,1,2,3];
a52222.addEventListener('mouseenter', saiu5)
var a522223 = window.document.getElementsByClassName('slide')[0,1,2];
a022223.addEventListener('mouseout', saiu5)

var a5222232 = window.document.getElementsByClassName('Texto313')[0];
a5222232.addEventListener('mouseenter', saiu5)
function Entrou5(){

 


var voteponasideia = document.querySelector('#teste5')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu5(){

var voteponasideia = document.querySelector('#teste5')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}
/*
/*
var a6 = window.document.getElementsByClassName('lateral6')[0];
a6.addEventListener('mouseenter', Entrou6)


function Entrou6(){

 


var voteponasideia = document.querySelector('#teste6')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu6(){

var voteponasideia = document.querySelector('#teste6')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}

var a7 = window.document.getElementsByClassName('lateral7')[0];
a7.addEventListener('mouseenter', Entrou7)


function Entrou7(){

 


var voteponasideia = document.querySelector('#teste7')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu7(){

var voteponasideia = document.querySelector('#teste7')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}

var a8 = window.document.getElementsByClassName('lateral8')[0];
a8.addEventListener('mouseenter', Entrou8)


function Entrou8(){

 


var voteponasideia = document.querySelector('#teste8')  
	voteponasideia.style.display = "block"
	
	console.log ("foi")




}
function saiu8(){

var voteponasideia = document.querySelector('#teste8')  
	voteponasideia.style.display = "none"
	
	console.log ("foi")

}
*/



















