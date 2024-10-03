<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/stylesLogin.css">
</head>
<body>

    <header class="titulo">
        Iniciar Sesión
    </header>

    <div class="nav-bg">
        
            <div class="centrado-empresa">
                <h1>Gestor de Pedidos</h1>
            </div>


    </div>


    <div class="contenedor-form" >
        <form action="processLogin.php" method="post" class="formulario" id="formulario">
            <input type="text" name="usuario" id="usuario" placeholder="Nombre de usuario" class="input" >
            <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" class="input" >
            <input type="submit" value="Iniciar sesión" class="btn">
            <div class="registro">
                <a class="enlace-btn" onclick="limpiarCampos()">Limpiar Campos</a>
                <p>¿No tienes cuenta? </p>
                <a class="enlace-btn" href="../views/register.php">Registrarse</a>
            </div>
        </form>
    </div>




    <script src="../js/scriptsLogin.js"></script>
</body>
<footer>Elaborado por: Equipo 6</footer>
</html>