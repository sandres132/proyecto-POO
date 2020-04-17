<?php

//header("content-Type: application/json");
include_once ("../clases/class-usuario-cliente.php");
include_once ("../clases/class-usuario-empresa.php");
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'), true);
        if ($_POST['tipo'] == 'cliente') {
            $usuario = new Cliente(
                $_POST['nombreCliente'],
                $_POST['apellidoCliente'],
                $_POST['usuarioCliente'],
                $_POST['emailCliente'],
                $_POST['passwordCliente'],
                $_POST['actual'],
                $_POST['fechaNacimiento'],
                $_POST['fotoCliente'],
                $_POST['genero'],
                $_POST['pais'],
                $_POST['companiasFav'],
                $_POST['publicacionesFav'],
                $_POST['comprasHechas'],
                $_POST['comprar'],
                $_POST['tipo']
            );
            $usuario->guardarCliente();
            echo "guardado";

        } else if ($_POST['tipo'] == 'empresa') {
            $empresa = new Empresa(
                $_POST['nombreEmpresa'],
                $_POST['logoEmpresa'],
                $_POST['banner'],
                $_POST['pais'],
                $_POST['direccion'],
                $_POST['longitud'],
                $_POST['latitud'],
                $_POST['tipoEmpresa'],
                $_POST['nombreUsuario'],
                $_POST['password'],
                $_POST['facebook'],
                $_POST['instagram'],
                $_POST['twitter'],
                $_POST['twitch'],
                $_POST['email'],
                $_POST['actual'],
                $_POST['publicaciones'],
                $_POST['calificacionEmpresaDe'],
                $_POST['tipo']
            );
            $empresa->guardarEmpresa();
            echo "guardado";
        }
        break;

    case 'GET':
        if ($_GET['tipo'] == 'cliente') {
            if (isset($_GET['usuarioCliente'])) {
                return Cliente::obtenerCliente($_GET['usuarioCliente']);
            } else {
                return Cliente::obtenerclientes();
            }
        } else if ($_GET['tipo'] == 'empresa'){
            if (isset($_GET['nombreUsuario'])) {
                return Empresa::obtenerEmpresa($_GET['nombreUsuario']);
            } else {
                return Empresa::obtenerEmpresas();
            }
        }
        break;

    case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input'), true);
        if ($_PUT['tipo'] == 'cliente') {
            if (isset($_PUT['usuarioCliente'])) {
                $usuario = new Cliente(
                    $_PUT['nombreCliente'],
                    $_PUT['apellidoCliente'],
                    $_PUT['usuarioCliente'],
                    $_PUT['emailCliente'],
                    $_PUT['passwordCliente'],
                    $_PUT['actual'],
                    $_PUT['fechaNacimiento'],
                    $_PUT['fotoCliente'],
                    $_PUT['genero'],
                    $_PUT['pais'],
                    $_PUT['companiasFav'],
                    $_PUT['publicacionesFav'],
                    $_PUT['comprasHechas'],
                    $_PUT['comprar'],
                    $_PUT['tipo']
                );
                $usuario->actualizarCliente($_PUT['usuarioCliente']);
                echo "actualizado";
            }
        } else if ($_PUT['tipo'] == 'empresa') {
            if (isset($_PUT['nombreUsuario'])) {
                $empresa = new Empresa(
                    $_PUT['nombreEmpresa'],
                    $_PUT['logoEmpresa'],
                    $_PUT['banner'],
                    $_PUT['pais'],
                    $_PUT['direccion'],
                    $_PUT['longitud'],
                    $_PUT['latitud'],
                    $_PUT['tipoEmpresa'],
                    $_PUT['nombreUsuario'],
                    $_PUT['password'],
                    $_PUT['facebook'],
                    $_PUT['instagram'],
                    $_PUT['twitter'],
                    $_PUT['twitch'],
                    $_PUT['email'],
                    $_PUT['actual'],
                    $_PUT['publicaciones'],
                    $_PUT['calificacionEmpresaDe'],
                    $_PUT['tipo']
                );
                $empresa->actualizarEmpresa($_PUT['nombreUsuario']);
                echo "actualizado";
            }
        }
        break;

    case 'DELETE':
        $_GET=json_decode(file_get_contents('php://input'), true);
        if ($_GET['tipo'] == 'cliente') {
            if (isset($_GET['usuarioCliente'])) {
                Cliente::eliminarCliente($_GET['usuarioCliente']);
                echo "eliminado";
            }
        } else if ($_GET['tipo'] == 'empresa'){
            if (isset($_GET['nombreUsuario'])) {
                Empresa::eliminarEmpresa($_GET['nombreUsuario']);
                echo "eliminado";
            }
        }
        break;

}
