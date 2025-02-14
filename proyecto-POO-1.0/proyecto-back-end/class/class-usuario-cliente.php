<?php

class Cliente
{
    private $nombreCliente;
    private $apellidoCliente;
    private $usuarioCliente;
    private $emailCliente;
    private $passwordCliente;
    private $actual;
    private $fechaNacimiento;
    private $fotoCliente;
    private $genero;
    private $pais;
    private $companiasFav;
    private $publicacionesFav;
    private $comprasHechas;
    private $comprar;
    private $tipo;
    private $fechaSignIn;
    private $registroAcciones;

    public function __construct($nombreCliente, $apellidoCliente, $usuarioCliente, $emailCliente, $passwordCliente, $actual, $fechaNacimiento, $fotoCliente, $genero, $pais, $companiasFav, $publicacionesFav, $comprasHechas, $comprar, $tipo, $fechaSignIn, $registroAcciones)
    {
        $this->nombreCliente = $nombreCliente;
        $this->apellidoCliente = $apellidoCliente;
        $this->usuarioCliente = $usuarioCliente;
        $this->emailCliente = $emailCliente;
        $this->passwordCliente = $passwordCliente;
        $this->actual = $actual;
        $this->fechaNacimiento = $fechaNacimiento;
        $this->fotoCliente = $fotoCliente;
        $this->genero = $genero;
        $this->pais = $pais;
        $this->companiasFav = $companiasFav;
        $this->publicacionesFav = $publicacionesFav;
        $this->comprasHechas = $comprasHechas;
        $this->comprar = $comprar;
        $this->tipo = $tipo;
        $this->fechaSignIn = $fechaSignIn;
        $this->registroAcciones=$registroAcciones;
    }

    public function guardarCliente()
    {
        //guardar cliente
        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        $usuariosClientes = json_decode($contenidoArchivo, true);
        $usuariosClientes[] = array(
            "nombreCliente" => $this->nombreCliente,
            "apellidoCliente" => $this->apellidoCliente,
            "usuarioCliente" => $this->usuarioCliente,
            "emailCliente" => $this->emailCliente,
            "passwordCliente" => $this->passwordCliente,
            "actual" => $this->actual,
            "fechaNacimiento" => $this->fechaNacimiento,
            "fotoCliente" => $this->fotoCliente,
            "genero" => $this->genero,
            "pais" => $this->pais,
            "companiasFav" => $this->companiasFav,
            "publicacionesFav" => $this->publicacionesFav,
            "comprasHechas" => $this->comprasHechas,
            "comprar" => $this->comprar,
            "tipo" => $this->tipo,
            "fechaSignIn" => $this-> fechaSignIn,
            "registroAcciones" => $this-> registroAcciones
        );
        $archivo = fopen('../data/usuariosClientes.json', 'w');
        fwrite($archivo, json_encode($usuariosClientes));
        fclose($archivo);
    }

    public static function obtenerclientes()
    {
        //retornar todos los clientes
        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        echo json_encode($contenidoArchivo);
    }

    public static function obtenerCliente($nombCliente)
    {
        $verif=false;
        //retornar el cliente con nombre de cliente 'nombCliente'
        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        $usuarios = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($usuarios); $i++) {
            if ($usuarios[$i]['usuarioCliente'] == $nombCliente) {
                echo json_encode($usuarios[$i]);
                $verif=false;
                break;
            } else {
                $verif=true;
            }
        }
        if ($verif) {
                $resultado["usuarioCliente"] = "no se encontro";
                echo json_encode($resultado);
        }
    }

    public static function obtenerClienteActual()
    {
        $verif = false;
        //retornar la empresa con el atributo actual igual que true
        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        $clientes = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($clientes); $i++) {
            if ($clientes[$i]['actual'] == true) {
                echo json_encode($clientes[$i]);
                $verif = false;
                break;
            } else {
                $verif = true;
            }
        }
        if ($verif) {
            $resultado["actual"] = "no se encontro";
            echo json_encode($resultado);
        }
    }

    public function actualizarCliente($nombCliente)
    {
        //actualizar el cliente con nombre de cliente 'nombCliente'
        $usuarioModif = array(
            "nombreCliente" => $this->nombreCliente,
            "apellidoCliente" => $this->apellidoCliente,
            "usuarioCliente" => $this->usuarioCliente,
            "emailCliente" => $this->emailCliente,
            "passwordCliente" => $this->passwordCliente,
            "actual" => $this->actual,
            "fechaNacimiento" => $this->fechaNacimiento,
            "fotoCliente" => $this->fotoCliente,
            "genero" => $this->genero,
            "pais" => $this->pais,
            "companiasFav" => $this->companiasFav,
            "publicacionesFav" => $this->publicacionesFav,
            "comprasHechas" => $this->comprasHechas,
            "comprar" => $this->comprar,
            "tipo" => $this->tipo,
            "fechaSignIn" => $this-> fechaSignIn,
            "registroAcciones" => $this-> registroAcciones
        );

        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        $usuarios = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($usuarios); $i++) {
            if ($usuarios[$i]['usuarioCliente'] == $nombCliente) {
                $usuarios[$i] = $usuarioModif;
                $archivo = fopen('../data/usuariosClientes.json', 'w');
                fwrite($archivo, json_encode($usuarios));
                fclose($archivo);
                break;
            }
        }
    }

    public static function eliminarCliente($nombCliente)
    {
        //eliminar el cliente con nombre de cliente 'nombCliente'
        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        $usuarios = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($usuarios); $i++) {
            if ($usuarios[$i]['usuarioCliente'] == $nombCliente) {
                array_splice($usuarios, $i, 1);
                $archivo = fopen('../data/usuariosClientes.json', 'w');
                fwrite($archivo, json_encode($usuarios));
                fclose($archivo);
                break;
            }
        }
    }

    public static function buscarIdUser($nomb){
        $verif=false;
        $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
        $clientes = json_decode($contenidoArchivo, true);
        for ($i=0; $i < sizeof($clientes); $i++) { 
            if ($clientes[$i]['usuarioCliente'] == $nomb) {
                $resultado["resultado"] = "encontrado";
                $resultado["nomb"] = $clientes[$i]['usuarioCliente'];
                echo json_encode($resultado);
                $verif=true;
            break;
            }
        }
        if($verif==false){
            $resultado["resultado"] = "noEncontrado";
            $resultado["nomb"] = $nomb;
            echo json_encode($resultado);
        }
    }

    public function getNombreCliente()
    {
        return $this->nombreCliente;
    }

    public function setNombreCliente($nombreCliente)
    {
        $this->nombreCliente = $nombreCliente;

        return $this;
    }

    public function getApellidoCliente()
    {
        return $this->apellidoCliente;
    }

    public function setApellidoCliente($apellidoCliente)
    {
        $this->apellidoCliente = $apellidoCliente;

        return $this;
    }

    public function getUsuarioCliente()
    {
        return $this->usuarioCliente;
    }

    public function setUsuarioCliente($usuarioCliente)
    {
        $this->usuarioCliente = $usuarioCliente;

        return $this;
    }

    public function getEmailCliente()
    {
        return $this->emailCliente;
    }

    public function setEmailCliente($emailCliente)
    {
        $this->emailCliente = $emailCliente;

        return $this;
    }

    public function getPasswordCliente()
    {
        return $this->passwordCliente;
    }

    public function setPasswordCliente($passwordCliente)
    {
        $this->passwordCliente = $passwordCliente;

        return $this;
    }

    public function getActual()
    {
        return $this->actual;
    }

    public function setActual($actual)
    {
        $this->actual = $actual;

        return $this;
    }

    public function getFechaNacimiento()
    {
        return $this->fechaNacimiento;
    }

    public function setFechaNacimiento($fechaNacimiento)
    {
        $this->fechaNacimiento = $fechaNacimiento;

        return $this;
    }

    public function getFotoCliente()
    {
        return $this->fotoCliente;
    }

    public function setFotoCliente($fotoCliente)
    {
        $this->fotoCliente = $fotoCliente;

        return $this;
    }

    public function getPublicacionesFav()
    {
        return $this->publicacionesFav;
    }

    public function setPublicacionesFav($publicacionesFav)
    {
        $this->publicacionesFav = $publicacionesFav;

        return $this;
    }

    public function getCompaniasFav()
    {
        return $this->companiasFav;
    }

    public function setCompaniasFav($companiasFav)
    {
        $this->companiasFav = $companiasFav;

        return $this;
    }

    public function getComprar()
    {
        return $this->comprar;
    }

    public function setComprar($comprar)
    {
        $this->comprar = $comprar;

        return $this;
    }

    public function getComprasHechas()
    {
        return $this->comprasHechas;
    }

    public function setComprasHechas($comprasHechas)
    {
        $this->comprasHechas = $comprasHechas;

        return $this;
    }

    public function getGenero()
    {
        return $this->genero;
    }

    public function setGenero($genero)
    {
        $this->genero = $genero;

        return $this;
    }

    public function getPais()
    {
        return $this->pais;
    }

    public function setPais($pais)
    {
        $this->pais = $pais;

        return $this;
    }

    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

        return $this;
    }

    public function getFechaSignIn()
    {
        return $this->fechaSignIn;
    }

    public function setFechaSignIn($fechaSignIn)
    {
        $this->fechaSignIn = $fechaSignIn;

        return $this;
    }

    public function getRegistroAcciones()
    {
        return $this->registroAcciones;
    }

    public function setRegistroAcciones($registroAcciones)
    {
        $this->registroAcciones = $registroAcciones;

        return $this;
    }
}
