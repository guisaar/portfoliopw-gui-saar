<?php
session_start();
include('verifica_login.php');
?>

<h2>Olá, <?php echo $_SESSION['usuario'];?></h2>
<h2> <?php echo $_SESSION['usuario'];?>Tudo bem,queres configurauma melhor experiencia?</h2>
<h2><a href="logout.php">Sair</a></h2>
