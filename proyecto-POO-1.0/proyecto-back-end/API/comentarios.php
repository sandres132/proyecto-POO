<?php

header("content-Type: application/json");
include_once ("../class/class-comentario.php");
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'), true);
        $com = new Comentario(
            $_POST['nombreEmpresa'],
            $_POST['logoEmpresa'],
            $_POST['banner'],
            $_POST['pais'],
        );
        $com->guardarComentario();
        break;

    case 'GET':
        if ($_GET['tipo'] == 'empresa'){
           Comentario::obtenerComentariosEmpresas($_GET['tipo']);
        }else if ($_GET['tipo'] == 'cliente'){
            Comentario::obtenerComentariosClientes($_GET['tipo']);
        }
        break;

    case 'PUT':
        //Actualizar
        break;

    case 'DELETE':
        //Borrar
        break;

}