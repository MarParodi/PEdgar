<?php 
include_once "../../salesManagement/db/connection.php";

class Register{
    private $conexion;

    public function __construct(){
        $this->conexion = new Conexion();
    }

    public function registrarUsuario($usuario, $contrasena, $nombre, $edad, $email){
        try {
            $stmt = $this->conexion->getConexion()->prepare("INSERT INTO usuarios(nombreUsuario, contrasena, Nombre, Edad, Email, estadoUsuarios ) VALUES (?, ?, ?, ?, ?, '1')");
            $stmt->bind_param("sssss", $usuario, $contrasena, $nombre, $edad, $email);
            $stmt->execute();

            // Verifica si la inserción fue exitosa
            if ($stmt->affected_rows == 1) {
                $stmt->close();
                return "1";  // Registro exitoso
            } else {
                $stmt->close();
                return "0";  // Fallo en el registro
            }
        } catch (mysqli_sql_exception $e) {
            // Atrapa la excepción si hay un error en la inserción (por ejemplo, duplicados)
            error_log($e->getMessage());  // Puedes registrar el error en un archivo de log
            return "0";  // Maneja el error y devuelve "0" para indicar el fallo
        }
    }
}


class Login{

    // return 2 si el email aun no ha sido validado
    // return 1 si el usuario y la contraseña son correctos
    // return 0 si el usuario es incorrecto

    public function login($usuario, $contrasena): string
    {
        $con = new Conexion();        
        $resultado = $con->getConexion()->query("SELECT nombreUsuario,contrasena FROM usuarios WHERE nombreUsuario = '$usuario' AND contrasena = '$contrasena'");
        
        if ($resultado->num_rows > 0) {

            return "1";
        }
    
        return "0";
        
    }
    
}

?>