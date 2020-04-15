<?php

    header("content-Type: application/json");
    include_once("../clases/class-usuario-cliente.php");
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            $_POST= json_decode(file_get_contents('php://input'), true);
            if ($_POST['tipo']=='cliente') {
                $usuario=new Cliente(
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
                $resultado["mensaje"]= "informacion". json_encode($_POST);
                echo json_encode($resultado);
            }
            break;

        case 'GET':
            if ($_GET['tipo']=='cliente') {
                if (isset($_GET['usuarioCliente'])) {
                    Cliente::obtenerCliente($_GET['usuarioCliente']);
                }else{
                    Cliente::obtenerclientes();
                }
            }
            break;

        case 'PUT':
            $_PUT= json_decode(file_get_contents('php://input'), true);
            if ($_GET['tipo']=='cliente') {
                if (isset($_GET['usuarioCliente'])) {
                    $usuario=new Cliente(
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
                    $usuario->actualizarCliente($_GET['usuarioCliente']);
                }
            }
            break;
            
        case 'DELETE':
            if (isset($_GET['usuarioCliente'])) {
                Cliente::eliminarCliente($_GET['usuarioCliente']);
            }
            
            break;

    }
?>