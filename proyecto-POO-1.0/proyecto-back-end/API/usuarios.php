<?php

header("content-Type: application/json");
include_once ("../class/class-usuario-cliente.php");
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
                $_POST['tipo'],
                $_POST['fechaSignIn'],
                $_POST['registroAcciones']
            );
            $usuario->guardarCliente();
        } 
        break;

    case 'GET':
        if ($_GET['tipo'] == 'cliente') {
            if (isset($_GET['usuarioCliente'])) {
                Cliente::obtenerCliente($_GET['usuarioCliente']);
            } else {
                Cliente::obtenerclientes();
            }
        }
        break;

    case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input'), true);
        if ($_PUT['tipo'] == 'cliente') {
            if (isset($_PUT['usuarioClienteModif'])) {
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
                    $_PUT['tipo'],
                    $_PUT['fechaSignIn'],
                    $_PUT['registroAcciones']
                );
                $usuario->actualizarCliente($_PUT['usuarioClienteModif']);
                $resultado["mensaje"] = "El cliente se actualizo exitosamente";
                echo json_encode($resultado);
            }
        }
        break;

    case 'DELETE':
        $_GET=json_decode(file_get_contents('php://input'), true);
        if ($_GET['tipo'] == 'cliente') {
            if (isset($_GET['usuarioCliente'])) {
                Cliente::eliminarCliente($_GET['usuarioCliente']);
                $resultado["mensaje"] = "El cliente se elimino exitosamente";
                echo json_encode($resultado);
            }
        }
        break;

}
