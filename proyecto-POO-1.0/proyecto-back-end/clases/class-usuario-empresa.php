 <?php

class Empresa
{
    private $nombreEmpresa;
    private $logoEmpresa;
    private $banner;
    private $pais;
    private $direccion;
    private $longitud;
    private $latitud;
    private $tipoEmpresa;
    private $nombreUsuario;
    private $password;
    private $facebook;
    private $instagram;
    private $twitter;
    private $twitch;
    private $email;
    private $actual;
    private $publicaciones;
    private $calificacionEmpresaDe;
    private $tipo;
    private $fechaSignIn;

    public function __construct($nombreEmpresa, $logoEmpresa, $banner, $pais, $direccion, $longitud, $latitud, $tipoEmpresa, $nombreUsuario, $password, $facebook, $instagram, $twitter, $twitch, $email, $actual, $publicaciones, $calificacionEmpresaDe, $tipo, $fechaSignIn)
    {
        $this->nombreEmpresa = $nombreEmpresa;
        $this->logoEmpresa = $logoEmpresa;
        $this->banner = $banner;
        $this->pais = $pais;
        $this->direccion = $direccion;
        $this->longitud = $longitud;
        $this->latitud = $latitud;
        $this->tipoEmpresa = $tipoEmpresa;
        $this->nombreUsuario = $nombreUsuario;
        $this->password = $password;
        $this->facebook = $facebook;
        $this->instagram = $instagram;
        $this->twitter = $twitter;
        $this->twitch = $twitch;
        $this->email = $email;
        $this->actual = $actual;
        $this->publicaciones = $publicaciones;
        $this->calificacionEmpresaDe = $calificacionEmpresaDe;
        $this->tipo = $tipo;
        $this->fechaSignIn=$fechaSignIn;
    }

    public function getNombreEmpresa()
    {
        return $this->nombreEmpresa;
    }

    public function setNombreEmpresa($nombreEmpresa)
    {
        $this->nombreEmpresa = $nombreEmpresa;

        return $this;
    }

    public function getLogoEmpresa()
    {
        return $this->logoEmpresa;
    }

    public function setLogoEmpresa($logoEmpresa)
    {
        $this->logoEmpresa = $logoEmpresa;

        return $this;
    }

    public function getBanner()
    {
        return $this->banner;
    }

    public function setBanner($banner)
    {
        $this->banner = $banner;

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

    public function getDireccion()
    {
        return $this->direccion;
    }

    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }

    public function getLongitud()
    {
        return $this->longitud;
    }

    public function setLongitud($longitud)
    {
        $this->longitud = $longitud;

        return $this;
    }

    public function getLatitud()
    {
        return $this->latitud;
    }

    public function setLatitud($latitud)
    {
        $this->latitud = $latitud;

        return $this;
    }

    public function getTipoEmpresa()
    {
        return $this->tipoEmpresa;
    }

    public function setTipoEmpresa($tipoEmpresa)
    {
        $this->tipoEmpresa = $tipoEmpresa;

        return $this;
    }

    public function getNombreUsuario()
    {
        return $this->nombreUsuario;
    }

    public function setNombreUsuario($nombreUsuario)
    {
        $this->nombreUsuario = $nombreUsuario;

        return $this;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    public function getFacebook()
    {
        return $this->facebook;
    }

    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;

        return $this;
    }

    public function getInstagram()
    {
        return $this->instagram;
    }

    public function setInstagram($instagram)
    {
        $this->instagram = $instagram;

        return $this;
    }

    public function getTwitter()
    {
        return $this->twitter;
    }

    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    public function getTwitch()
    {
        return $this->twitch;
    }

    public function setTwitch($twitch)
    {
        $this->twitch = $twitch;

        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;

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

    public function getPublicaciones()
    {
        return $this->publicaciones;
    }

    public function setPublicaciones($publicaciones)
    {
        $this->publicaciones = $publicaciones;

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

    public function getCalificacionEmpresaDe()
    {
        return $this->calificacionEmpresaDe;
    }

    public function setCalificacionEmpresaDe($calificacionEmpresaDe)
    {
        $this->calificacionEmpresaDe = $calificacionEmpresaDe;

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

    public function guardarEmpresa()
    {
        //guardar Empresa
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $usuariosEmpresas = json_decode($contenidoArchivo, true);
        $usuariosEmpresas[] = array(
            "nombreEmpresa" => $this->nombreEmpresa,
            "logoEmpresa" => $this->logoEmpresa,
            "banner" => $this->banner,
            "pais" => $this->pais,
            "direccion" => $this->direccion,
            "longitud" => $this->longitud,
            "latitud" => $this->latitud,
            "tipoEmpresa" => $this->tipoEmpresa,
            "nombreUsuario" => $this->nombreUsuario,
            "password" => $this->password,
            "facebook" => $this->facebook,
            "instagram" => $this->instagram,
            "twitter" => $this->twitter,
            "twitch" => $this->twitch,
            "email" => $this->email,
            "actual" => $this->actual,
            "publicaciones" => $this->publicaciones,
            "calificacionEmpresaDe" => $this->calificacionEmpresaDe,
            "tipo" => $this->tipo,
            "fechaSignIn"=> $this-> fechaSignIn
        );
        $archivo = fopen('../data/usuariosEmpresas.json', 'w');
        fwrite($archivo, json_encode($usuariosEmpresas));
        fclose($archivo);
    }

    public static function obtenerEmpresas()
    {
        //retornar todas las empresas
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        echo json_encode($contenidoArchivo);
    }

    public static function obtenerEmpresa($nombEmpresa)
    {
        $verif=false;
        //retornar la empresa con nombre de empresa 'nombEmpresa'
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                echo json_encode($empresas[$i]);
                $verif=false;
                break;
            } else {
                $verif=true;
            }
        }
        if ($verif) {
                $resultado["nombreUsuario"] = "no se encontro";
                echo json_encode($resultado);
        }
    }

    public function actualizarEmpresa($nombEmpresa)
    {
        //actualizar la empresa con nombre de empresa 'nombEmpresa'
        $empresaModif = array(
            "nombreEmpresa" => $this->nombreEmpresa,
            "logoEmpresa" => $this->logoEmpresa,
            "banner" => $this->banner,
            "pais" => $this->pais,
            "direccion" => $this->direccion,
            "longitud" => $this->longitud,
            "latitud" => $this->latitud,
            "tipoEmpresa" => $this->tipoEmpresa,
            "nombreUsuario" => $this->nombreUsuario,
            "password" => $this->password,
            "facebook" => $this->facebook,
            "instagram" => $this->instagram,
            "twitter" => $this->twitter,
            "twitch" => $this->twitch,
            "email" => $this->email,
            "actual" => $this->actual,
            "publicaciones" => $this->publicaciones,
            "calificacionEmpresaDe" => $this->calificacionEmpresaDe,
            "tipo" => $this->tipo,
            "fechaSignIn"=> $this-> fechaSignIn
        );

        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                $empresas[$i] = $empresaModif;
                $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                fwrite($archivo, json_encode($empresas));
                fclose($archivo);
                break;
            }
        }
    }

    public static function eliminarEmpresa($nombEmpresa)
    {
        //eliminar la empresa con nombre de empresa 'nombEmpresa'
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                array_splice($empresas, $i, 1);
                $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                fwrite($archivo, json_encode($empresas));
                fclose($archivo);
                break;
            }
        }
    }

    public static function obtenerPublicacionesDeEmpresa($nombEmpresa)
    {
        $publicaciones = array();
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);

        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($nombEmpresa == $empresas[$i]['nombreUsuario']) {
                for ($j = 0; $j < sizeof($empresas[$i]['publicaciones']); $j++) {
                    $publicaciones[] = $empresas[$i]['publicaciones'][$j];
                }
            }

        }
        echo json_encode($publicaciones);
    }

}

?>