<?php

include "../../salesManagement/db/auth.php";

    
    $usuario = $_POST["usuario"];
    $contrasena = $_POST["contrasena"];

    echo phpversion();

    $iniciarSesion = new Login();
    $resultado = $iniciarSesion->login($usuario, $contrasena); 


    if ($resultado == "1") {
        session_start();
        $_SESSION['usuario'] = $usuario;
        header("Location: ../views/index.php");  

    } else{
        header("Location: ../views/login.php");  
    }




?>
