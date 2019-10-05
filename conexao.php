<?php
define('HOST', 'us-cdbr-iron-east-05.cleardb.net');
define('USUARIO', 'bc6a8c1fb3888a');
define('SENHA', 'ca80bcd0');
define('DB', 'heroku_28b1ceed182c821');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');
