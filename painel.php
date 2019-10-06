<?php
session_start();
include('verifica_login.php');
?>
<html lang="pt-br" >
		<head>
		
		
		<meta charset="UTF-8"/>
		<meta name="descrição" content="Ecobike">
			<meta name="palavrasChaves" content=" ">
		<title> Portifolio </title> 
		
		<link rel="stylesheet" type="text/css" href="formatacaoHome.css"/>
	
		
		<style>	
		</style>
		<script src="meusproblemas.js">
</script >
		</head>
		
	<body id="body" > 
	<div id="Gza">
<!-- Colocar uma cor de hover em a: AZUL com as letras em Prateado... window.open('zaa.html','_blank','width=500,height=500')-->
		<div class="menu2">
		<ul>

    <li><a href="" class="active3">Home</a></li>
  <li><a class="active3" onclick="qzaa()" >Login</a></li>
 
   
   
   <li><a class="active" href="">Sobre</a></li>
   
 
</ul>

	   </div>
		<header id="topo">
		
     


	
	
	
<div id="qza"><img src="nome5.png" width="100%"></div>
		<div class="menu">
		<ul>

  
  <li><a href="">Home</a></li>
   <li><a class="active" href="">Filmes</a></li>
   <li><a class="active" href="">Sessões</a></li>
 <li><a href="">Conta</a></li>
  <li><a class="active2" href="">Lanches</a></li>
</ul>

	   </div> </header>	
	   <div id="meio">
	   <div id="meio3"></div>
	   <div id="Titulo"><h1 class="T1">Até a proximaaaa</h1><br></div>
	   <div id="meio31"></div><div id="Gzaa">
	   <div id="meio4">
	   <article id="conteudo">
<!-- aqui começa o meu problema-->
<div class="gallery">
  <div class="gallery__prev"></div>
  <div class="gallery__next"></div>
  <div class="gallery__stream">
   <div class="gallery__item bg-1" onclick="qza()"></div>
    <div class="gallery__item bg-2" ></div>
    <div class="gallery__item bg-3"></div>
    <div class="gallery__item bg-4"></div>
    <div class="gallery__item bg-5"></div>
    <div class="gallery__item bg-6"></div>
    <div class="gallery__item bg-7"></div>
  </div>
</div>

	<br>
	<!-- Pop-Up Começa aqui-->
<div id="openModal" class="modalDialog">
  <div id="Popup">
    <a href="#close" title="Close" class="close">X</a>
    <p><img src="nome5.png" width="100%"></p>

  </div></div>
 
 <h2>Olá, <?php echo $_SESSION['usuario'];?></h2>
<!-- aqui termina o meu problema-->
 
	   </article>
	
	    </div> 
	</div>
	

	  <div id="meio31"></div>
	
	<footer id="rodape">
<div style="">
<h1>Sobre o Grupo</h1><br>

 Desenvolvido por:Guilherme Saar <br><br>
 Proibido a distribuição ou reprodução do produto sem autorização
  <div id="Hora" style="margin-left:25%;margin-right:25%;margin-top:1%;"></div>
</div>
	
<div style="">	
<h1 class="Texto" >Atendimento ao Cliente</h1><br>
<p><strong style="color:rgb(104, 190, 232)">E-Mail</strong>:Guisaardossantos@gmail.com</p>
<p><strong style="color:rgb(104, 190, 232)">Telefone/WhatsApp:</strong>+55 (11) 95783-2723</p>
<p>Atendimento de Segunda a Sexta</p>


	</footer>
	</div></div>
	
	</body>
	




<h2><a href="logout.php">Sair</a></h2>
