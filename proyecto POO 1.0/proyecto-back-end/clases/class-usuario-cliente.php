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

        public function __construct($nombreCliente, $apellidoCliente, $usuarioCliente, $emailCliente, $passwordCliente, $actual, $fechaNacimiento, $fotoCliente, $genero, $pais, $companiasFav, $publicacionesFav, $comprasHechas, $comprar, $tipo)
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
                );
                $archivo = fopen('../data/usuariosClientes.json', 'w');
                fwrite($archivo, json_encode($usuariosClientes));
                fclose($archivo);
        }

        public static function obtenerclientes()
        {
                //retornar todos los clientes
                $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
                echo $contenidoArchivo;
        }

        public static function obtenerCliente($nombCliente)
        {
                //retornar el cliente con nombre de cliente 'nombCliente'
                $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
                $usuarios= json_decode($contenidoArchivo, true);
                for ($i=0; $i < sizeof($usuarios); $i++) { 
                        if ($usuarios[$i]['usuarioCliente']==$nombCliente) {
                                echo json_encode($usuarios[$i]);
                        break;
                        }
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
                );

                $contenidoArchivo = file_get_contents('../data/usuariosClientes.json');
                $usuarios= json_decode($contenidoArchivo, true);
                for ($i=0; $i < sizeof($usuarios); $i++) { 
                        if ($usuarios[$i]['usuarioCliente']==$nombCliente) {
                                $usuarios[$i]=$usuarioModif;
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
                $usuarios= json_decode($contenidoArchivo, true);
                for ($i=0; $i < sizeof($usuarios); $i++) { 
                        if ($usuarios[$i]['usuarioCliente']==$nombCliente) {
                                array_splice($usuarios, $i, 1);
                                $archivo = fopen('../data/usuariosClientes.json', 'w');
                                fwrite($archivo, json_encode($usuarios));
                                fclose($archivo);
                        break;
                        }
                }
        }
}

?>