<?php

include "../../salesManagement/db/auth.php";

// Obtener datos del formulario
$nombre_usuario = $_POST['nombre-usuario'];
$contrasena = $_POST['contrasena'];
$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$email = $_POST['email'];

// Instancia de Register
$registrarse = new Register();

// Intento de registro
$exitoRegistro = $registrarse->registrarUsuario($nombre_usuario, $contrasena, $nombre, $edad, $email);

// Redirigir según el resultado
if ($exitoRegistro == "0") {
    // Registro fallido (por ejemplo, nombre de usuario duplicado)
    header("Location: register.php?error=1");
    exit();
} else {
    // Registro exitoso
    header("Location: index.php?success=1");
    exit();
}

?>
