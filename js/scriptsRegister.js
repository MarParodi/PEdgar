function mostrarContrasena(idCampo) {
    var campo = document.getElementById(idCampo);
    var boton = document.querySelector(`#${idCampo} + .ver-contrasena i`);

    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
}


let nombreForm = "";
let edadForm = "";
let emialForm = "";
let nombreUsuarioForm = "";
let contrasenaForm = "";
let confirmarContrasenaForm = "";



var nombreInput = document.getElementById("nombre");
var nombreRegex = /^[a-zA-Z ]+$/;



var edadInput = document.getElementById("edad");
var edadRegex = /^(1[89]|[2-9][0-9]|100)$/;




var nombreUsuarioInput = document.getElementById("nombre-usuario");
var nombreUsuarioRegex = /^[a-zA-Z0-9]{5,}$/;

var contrasenaInput = document.getElementById("contrasena");
var contrasenaRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

var correo = document.getElementById("email");
var correoRegex  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

var contrasenaInput = document.getElementById("contrasena");
var contrasenaRepetirInput = document.getElementById("contrasena-repetir");






function enviarDatos(){

  if (contrasenaInput.value !== contrasenaRepetirInput.value || contrasenaRepetirInput.value === "" || (!contrasenaRegex.test(contrasenaRepetirInput.value)) ) {
    confirmarContrasenaForm = "Confirmar Contraseña: Las contraseñas no coniciden";
    document.getElementById("contrasena-repetir").style.borderColor = "red";
    document.getElementById("contrasena-repetir").style.borderWidth = "9px";
    setTimeout(function() {
      document.getElementById("contrasena-repetir").style.borderColor = ""; // establecer el color del borde en su valor predeterminado
      document.getElementById("contrasena-repetir").style.borderWidth = "1px";
    } , 5000); // tiempo de espera en milisegundos (en este caso, 5000 ms = 5 segundos)
  }
  
  if (!contrasenaRegex.test(contrasenaInput.value) || contrasenaInput.value === "") {
    contrasenaForm = "Contraseña: La contraseña debe tener al menos 8 caracteres y contener al menos una letra, un número y un símbolo especial";
    document.getElementById("contrasena").style.borderColor = "red";
    document.getElementById("contrasena").style.borderWidth = "9px";
    setTimeout(function() {
      document.getElementById("contrasena").style.borderColor = ""; // establecer el color del borde en su valor predeterminado
      document.getElementById("contrasena").style.borderWidth = "1px";
    } , 5000); // tiempo de espera en milisegundos (en este caso, 5000 ms = 5 segundos)
  }

  if (!nombreUsuarioRegex.test(nombreUsuarioInput.value) || nombreUsuarioInput.value === "") {
    nombreUsuarioForm = "Nombre de Usuario: Solo se permiten letras y números, sin espacios, y debe tener al menos 5 caracteres";
    document.getElementById("nombre-usuario").style.borderColor = "red";
    document.getElementById("nombre-usuario").style.borderWidth = "9px";
    setTimeout(function() {
      document.getElementById("nombre-usuario").style.borderColor = ""; // establecer el color del borde en su valor predeterminado
      document.getElementById("nombre-usuario").style.borderWidth = "1px";
    } , 5000); // tiempo de espera en milisegundos (en este caso, 5000 ms = 5 segundos)

  }

  if (!edadRegex.test(edadInput.value) || edadInput.value === "") {
    edadForm = "Edad: Solo se permiten números enteros no negativos de 18 a 100 años de edad";
    document.getElementById("edad").style.borderColor = "red";
    document.getElementById("edad").style.borderWidth = "9px";
    setTimeout(function() {
      document.getElementById("edad").style.borderColor = ""; // establecer el color del borde en su valor predeterminado
      document.getElementById("edad").style.borderWidth = "1px";
    }, 5000); // tiempo de espera en milisegundos (en este caso, 5000 ms = 5 segundos)
  } 

  if (!nombreRegex.test(nombreInput.value) || nombreInput.value === "") {
    nombreForm ="Nombre: Solo se permiten letras y espacios";
    document.getElementById("nombre").style.borderColor = "red";
    document.getElementById("nombre").style.borderWidth = "9px";
    setTimeout(function() {
      document.getElementById("nombre").style.borderColor = ""; // establecer el color del borde en su valor predeterminado
      document.getElementById("nombre").style.borderWidth = "1px";
    }, 5000); // tiempo de espera en milisegundos (en este caso, 5000 ms = 5 segundos)
  }

  if (!correoRegex.test(correo.value) || correo === "") {
    emialForm = "Email: Ingrese un correo Valido";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.borderWidth = "9px";
    setTimeout(function() {
      document.getElementById("email").style.borderColor = ""; // establecer el color del borde en su valor predeterminado
      document.getElementById("email").style.borderWidth = "1px";
    }, 5000); // tiempo de espera en milisegundos (en este caso, 5000 ms = 5 segundos)
  }



  if (nombreForm === "" && edadForm === "" && emialForm === "" && nombreUsuarioForm === "" && contrasenaForm === "" && confirmarContrasenaForm === "") {

    var password = document.getElementById("contrasena").value;
    var encodedPassword = btoa(password);



    alert("Nombre = " + nombreInput.value + "\n" + "Edad = " + edadInput.value + "\n" + "Email = " + correo.value + "\n" + "Nombre de Usuario = " + nombreUsuarioInput.value + "\n" + "Contraseña = " + contrasenaInput.value + "\n" + "Confirmar Contraseña = " + contrasenaRepetirInput.value + "\n" + "Contraseña Encriptada = " + encodedPassword);
    return "0";
  } else {


    document.getElementById("errores").style.textAlign = "justify";
    document.getElementById("errores").style.width = "20%";
    document.getElementById("errores").style.fontSize = "15px";
    document.getElementById("errores").textContent = nombreForm + ". " + edadForm + ". " + emialForm + ". " +  nombreUsuarioForm + ". " + contrasenaForm + ". " + confirmarContrasenaForm + ".";
  
    setTimeout(function(){
        document.getElementById("errores").textContent = "";
    }, 5000);

    document.querySelector('form').addEventListener('submit', function(event) {
      // Prevenir el envío del formulario
      event.preventDefault();
    });
  }

 nombreForm = "";
 edadForm = "";
 emialForm = "";
 nombreUsuarioForm = "";
 contrasenaForm = "";
 confirmarContrasenaForm = "";
 return "1";
}


function cancelarFormulario(){
  if (confirm("¿Está seguro que desea cancelar el formulario?")) {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nombre-usuario").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("contrasena-repetir").value = "";
  }
}


document.getElementById('formulario-registro').addEventListener('submit', function(event) {

    
    var resul = enviarDatos();
    if (resul === "0") {
        this.submit();
    }else if (resul === "1") {
        event.preventDefault();
    }


});