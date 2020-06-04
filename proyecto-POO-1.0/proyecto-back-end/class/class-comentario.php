<?php
class Comentario
{
    private $tipo;
    private $nombre;
    private $titulo;
    private $text;

    public function __construct($tipo, $nombre, $titulo, $text)
    {
        $this->tipo = $tipo;
        $this->nombre = $nombre;
        $this->titulo = $titulo;
        $this->text = $text;
    }

    public function guardarComentario()
    {
        //guardar Empresa

        $contenidoArchivo = file_get_contents('../data/comentarioFinal.json');
        $comentarios = json_decode($contenidoArchivo, true);
        $comentarios[] = array(
            "nombreEmpresa" => $this->nombreEmpresa,
            "logoEmpresa" => $this->logoEmpresa,
            "banner" => $this->banner,
            "pais" => $this->pais,
        );

        $archivo = fopen('../data/comentarioFinal.json', 'w');
        fwrite($archivo, json_encode($comentarios));
        fclose($archivo);
    }

    public static function obtenerComentariosEmpresas($tipo)
    {
        //retornar todas las empresas
        $contenidoArchivo = file_get_contents('../data/comentarioFinal.json');
        $comentarios = json_decode($contenidoArchivo, true);
        $resultado = array();
        for ($i = 0; $i < sizeof($comentarios); $i++) {
            if ($comentarios[$i]['tipo'] == $tipo) {
                $resultado[] = $comentarios[$i];
            }
        }
        echo json_encode($resultado);
    }

    public static function obtenerComentariosClientes($tipo)
    {
        //retornar todas las empresas
        $contenidoArchivo = file_get_contents('../data/comentarioFinal.json');
        $comentarios = json_decode($contenidoArchivo, true);
        $resultado = array();
        for ($i = 0; $i < sizeof($comentarios); $i++) {
            if ($comentarios[$i]['tipo'] == $tipo) {
                $resultado[] = $comentarios[$i];
            }
        }
        echo json_encode($resultado);
    }
    
}