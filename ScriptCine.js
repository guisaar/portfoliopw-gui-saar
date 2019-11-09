

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



var a = window.document.getElementsByClassName('lateral1')[0];
a.addEventListener('mouseenter', Entrou)


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

var a2 = window.document.getElementsByClassName('lateral2')[0];
a2.addEventListener('mouseenter', Entrou2)


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

var a3 = window.document.getElementsByClassName('lateral3')[0];
a3.addEventListener('mouseenter', Entrou3)


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

var a4 = window.document.getElementsByClassName('lateral4')[0];
a4.addEventListener('mouseenter', Entrou4)


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
a5.addEventListener('mouseenter', Entrou5)


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
