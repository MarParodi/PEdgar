<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/stylesRegistro.css">
</head>
<body>

    <!-- Resto del contenido de la página -->
    <header class="titulo">
        Registrarse
    </header>

    <div class="centrado-empresa">
        <h1>Gestor de Pedidos</h1>
    </div>



<div class="contenedor-form" >

    <div class="formulario">

        <form action="processRegister.php" method="post" id="formulario-registro">
    <div class="registro">

            <h2 class="titulo-form">Formulario de Registro</h2>

            <section class="form-section">
                <input class="entrada" type="text" name="nombre" id="nombre" placeholder="Nombre">
            </section>

            <section class="form-section">
                <input class="entrada" type="number" name="edad" id="edad" placeholder="Edad">
            </section> 

            <section class="form-section">
                <input class="entrada" type="text" name="email" id="email" placeholder="Email">
            </section>   
                
            <section class="form-section">  
                <input class="entrada" type="text" name="nombre-usuario" id="nombre-usuario" placeholder="Nombre de Usuario">
            </section>
        
            <section class="form-section">
                <input class="entrada-pass" type="password" name="contrasena" id="contrasena" placeholder="Contraseña">
                <button class="ver-contrasena" type="button" onclick="mostrarContrasena('contrasena')">
                    <i class="far-fa-eye">Cambiar</i>
                </button>
            </section>
    
            <section class="form-section">
                <input class="entrada-pass" type="password" name="contrasena-repetir" id="contrasena-repetir" placeholder="Confirmar Contraseña">
                <button class="ver-contrasena" type="button" onclick="mostrarContrasena('contrasena-repetir')">
                    <i class="far-fa-eye">Cambiar</i>
                </button>
            </section> 
        
            <section class="form-section">

                <input class="btn-form" type="submit" value="Enviar">   
            </section>

        </form> <!-- Fin del formulario de registro -->

    </div> <!-- Fin del div registro --> 

    </div>
    
</div>




<script src="../js/scriptsRegister.js"></script>
</body>
<footer>Elaborado por: Equipo 6</footer>
</html>