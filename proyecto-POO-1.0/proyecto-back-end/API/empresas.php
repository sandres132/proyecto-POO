<?php

header("content-Type: application/json");
include_once ("../class/class-usuario-empresa.php");
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'), true);
        if ($_POST['tipo'] == 'empresa') {
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
                $_POST['tipo'],
                $_POST['fechaSignIn'],
                $_POST['registroAcciones']
            );
            $empresa->guardarEmpresa();
            $resultado["mensaje"] = "La empresa se guardo exitosamente";
            echo json_encode($resultado);
        }else if($_POST['tipo'] == 'pub') {
            Empresa::nuevaPub($_POST);
        }
        break;

    case 'GET':
        if ($_GET['tipo'] == 'empresa'){
            if(isset($_GET['nombUs'])){
                Empresa::buscarIdUser($_GET['nombUs']);
            }else if(isset($_GET['pubs'])){
                Empresa::obtenerPublicaciones();

            }else if(isset($_GET['actual'])){
                Empresa::obtenerEmpresaActual();
                
            } else if(isset($_GET['nombreUsuario'])){
                if(isset($_GET['peticion'])){
                    Empresa::obtenerPublicacionesDeEmpresa($_GET['nombreUsuario']);
                }else{
                    Empresa::obtenerEmpresa($_GET['nombreUsuario']);
                }
            } else {
                Empresa::obtenerEmpresas();
            }
        }
        break;

    case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input'), true);
        if ($_PUT['tipo'] == 'empresa') {
            if (isset($_PUT['nombreUsuarioModif'])) {
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
                    $_PUT['tipo'],
                    $_PUT['fechaSignIn'],
                    $_PUT['registroAcciones']
                );
                $empresa->actualizarEmpresa($_PUT['nombreUsuarioModif']);
            }else if (isset($_PUT['accion'])){
                if ($_PUT['accion']=="guardar"){
                    Empresa::guardarEmpFav($_PUT);
                }else if ($_PUT['accion']=="borrar"){
                    Empresa::borrarEmpFav($_PUT);
                }
            }
        }else if($_PUT['tipo'] == 'pub') {
            if(isset($_PUT['indice'])) {
                Empresa::actualizarPub($_PUT);
            }else if (isset($_PUT['accion'])){
                if ($_PUT['accion']=="guardar"){
                    Empresa::guardarPubFav($_PUT);
                }else if ($_PUT['accion']=="borrar"){
                    Empresa::borrarPubFav($_PUT);
                }
            }
        }
        break;

    case 'DELETE':
        if ($_GET['tipo'] == 'empresa'){
            if (isset($_GET['nombreUsuario'])) {
                Empresa::eliminarEmpresa($_GET['nombreUsuario']);
            }
        }else if($_GET['tipo'] == 'pub') {
            if(isset($_GET['indice'])) {
                if(isset($_GET['nombreUsuario'])) {
                    Empresa::eliminarPub($_GET['nombreUsuario'], $_GET['indice']);
                }
            }
        }
        break;

}