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
    private $empFavoritaDe;
    private $calificacionEmpresaDe;
    private $tipo;
    private $fechaSignIn;
    private $registroAcciones;

    public function __construct($nombreEmpresa, $logoEmpresa, $banner, $pais, $direccion, $longitud, $latitud, $tipoEmpresa, $nombreUsuario, $password, $facebook, $instagram, $twitter, $twitch, $email, $actual, $publicaciones, $calificacionEmpresaDe, $tipo, $fechaSignIn, $registroAcciones)
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
        $this->fechaSignIn = $fechaSignIn;
        $this->registroAcciones = $registroAcciones;
    }

    public function guardarEmpresa()
    {
        //guardar Empresa
        $verif=false;
        $contenidoArchivoRegistro = file_get_contents('../data/registroEmpresas.json');
        $registro = json_decode($contenidoArchivoRegistro, true);

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
            "fechaSignIn" => $this->fechaSignIn,
            "registroAcciones" => $this->registroAcciones,
        );

        for ($k=0; $k < sizeof($registro); $k++) { 
            if($registro[$k]['nombreUsuario']==$this->nombreUsuario){
                $registro[$k]['registroAcciones']=$this->registroAcciones;
                $verif=true;
            break;
            }
        }
        if($verif==false){
            $registro[]=array(
                "nombreUsuario" => $this->nombreUsuario,
                "registroAcciones" => $this->registroAcciones
            );
        }

        $archivoReg = fopen('../data/registroEmpresas.json', 'w');
        fwrite($archivoReg, json_encode($registro));
        fclose($archivoReg);

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
        $verif = false;
        //retornar la empresa con nombre de empresa 'nombEmpresa'
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                echo json_encode($empresas[$i]);
                $verif = false;
                break;
            } else {
                $verif = true;
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
            "fechaSignIn" => $this->fechaSignIn,
            "registroAcciones" => $this->registroAcciones,
        );

        $verif=false;
        $contenidoArchivoRegistro = file_get_contents('../data/registroEmpresas.json');
        $registro = json_decode($contenidoArchivoRegistro, true);

        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                $empresas[$i] = $empresaModif;
                
                for ($k=0; $k < sizeof($registro); $k++) { 
                    if($registro[$k]['nombreUsuario']==$nombEmpresa){
                        $registro[$k]['registroAcciones']=$empresas[$i]['registroAcciones'];
                        $verif=true;
                    break;
                    }
                }
                if($verif==false){
                    $registro[]=array(
                        "nombreUsuario" => $nombEmpresa,
                        "registroAcciones" => $empresas[$i]['registroAcciones']
                    );
                }

                $archivoReg = fopen('../data/registroEmpresas.json', 'w');
                fwrite($archivoReg, json_encode($registro));
                fclose($archivoReg);

                $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                fwrite($archivo, json_encode($empresas));
                fclose($archivo);
                echo json_encode($empresas[$i]);
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

    public static function obtenerPublicaciones()
    {
        $publicaciones = array();
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);

        for ($i = 0; $i < sizeof($empresas); $i++) {
            for ($j = 0; $j < sizeof($empresas[$i]['publicaciones']); $j++) {
                $empresas[$i]['publicaciones'][$j]['logoEmpresa'] = $empresas[$i]['logoEmpresa'];
                $empresas[$i]['publicaciones'][$j]['tipoEmpresa'] = $empresas[$i]['tipoEmpresa'];
                $empresas[$i]['publicaciones'][$j]['pais'] = $empresas[$i]['pais'];
                $empresas[$i]['publicaciones'][$j]['direccion'] = $empresas[$i]['direccion'];
                $empresas[$i]['publicaciones'][$j]['cantPubs'] = sizeof($empresas[$i]['publicaciones']);
                $empresas[$i]['publicaciones'][$j]['facebook'] = $empresas[$i]['facebook'];
                $empresas[$i]['publicaciones'][$j]['instagram'] = $empresas[$i]['instagram'];
                $empresas[$i]['publicaciones'][$j]['twitter'] = $empresas[$i]['twitter'];
                $empresas[$i]['publicaciones'][$j]['twitch'] = $empresas[$i]['twitch'];
                $empresas[$i]['publicaciones'][$j]['email'] = $empresas[$i]['email'];
                $empresas[$i]['publicaciones'][$j]['empFavoritaDe'] = $empresas[$i]['empFavoritaDe'];
                $publicaciones[] = $empresas[$i]['publicaciones'][$j];
            }

        }
        echo json_encode($publicaciones);
    }

    public static function obtenerEmpresaActual()
    {
        $verif = false;
        //retornar la empresa con el atributo actual igual que true
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['actual'] == true) {
                echo json_encode($empresas[$i]);
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

    public static function guardarPubFav($pub)
    {
        //retornar la empresa con el atributo actual igual que true
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            for ($j=0; $j < sizeof($empresas[$i]['publicaciones']); $j++) { 
                if ($empresas[$i]['publicaciones'][$j]['id']==$pub['indiceDePub']) {
                    $empresas[$i]['publicaciones'][$j]['pubFavoritaDe'][]=array(
                        "empresa"=>$pub['empresa'],
                        "cliente"=>$pub['cliente'],
                        "fechaSelecFav"=>$pub['fechaSelecFav'],
                        "indiceDePub"=>$pub['indiceDePub']
                    );
                    $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                    fwrite($archivo, json_encode($empresas));
                    fclose($archivo);
                break;
                }
            }
        }
    }

    public static function borrarPubFav($pub)
    {
        //retornar la empresa con el atributo actual igual que true
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            for ($j=0; $j < sizeof($empresas[$i]['publicaciones']); $j++) { 
                if ($empresas[$i]['publicaciones'][$j]['id']==$pub['indiceDePub']) {
                    for ($k=0; $k < $empresas[$i]['publicaciones'][$j]['pubFavoritaDe']; $k++) { 
                        if ($empresas[$i]['publicaciones'][$j]['pubFavoritaDe'][$k]['indiceDePub']==$pub['indiceDePub']) {
                            if ($empresas[$i]['publicaciones'][$j]['pubFavoritaDe'][$k]['nomPub']==$pub['nomPub']) {
                                array_splice($empresas[$i]['publicaciones'][$j]['pubFavoritaDe'], $k, 1);
                            }
                        }
                    }
                    
                    $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                    fwrite($archivo, json_encode($empresas));
                    fclose($archivo);
                break;
                }
            }
        }
    }

    
    public static function guardarEmpFav($pub)
    {
        //retornar la empresa con el atributo actual igual que true
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario']==$pub['empresa']) {
                $empresas[$i]['empFavoritaDe'][]=array(
                    "empresa"=>$pub['empresa'],
                    "cliente"=>$pub['cliente'],
                    "fechaSelecFav"=>$pub['fechaSelecFav']
                );
                $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                fwrite($archivo, json_encode($empresas));
                fclose($archivo);
            break;
            }
        }
    }

    public static function borrarEmpFav($pub)
    {
        //retornar la empresa con el atributo actual igual que true
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            for ($j=0; $j < sizeof($empresas[$i]['empFavoritaDe']); $j++) { 
                if ($empresas[$i]['empFavoritaDe'][$j]['empresa']==$pub['empresa']) {
                    if ($empresas[$i]['empFavoritaDe'][$j]['cliente']==$pub['cliente']) {
                        array_splice($empresas[$i]['empFavoritaDe'][$j], $j, 1);
                    }
                    
                    $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                    fwrite($archivo, json_encode($empresas));
                    fclose($archivo);
                break;
                }
            }
        }
    }

    public static function actualizarPub($pub)
    {
        $verif=false;
        $contenidoArchivoRegistro = file_get_contents('../data/registroEmpresas.json');
        $registro = json_decode($contenidoArchivoRegistro, true);

        $contenidoArchivoEmpresas = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivoEmpresas, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $pub['nombreEmpresa']) {
                for ($j = 0; $j < sizeof($empresas[$i]['publicaciones']); $j++) {
                    if ($j == $pub['indice']) {
                        $modifPub = array(
                            "nombreEmpresa" => $pub['nombreEmpresa'],
                            "imagenGanga" => $pub['imagenGanga'],
                            "nombreGanga" => $pub['nombreGanga'],
                            "descripcionGanga" => $pub['descripcionGanga'],
                            "fechaMax" => $pub['fechaMax'],
                            "horaMax" => $pub['horaMax'],
                            "ofertasDisponibles" => $pub['ofertasDisponibles'],
                            "horaInicio" => $pub['horaInicio'],
                            "fechaInicio" => $pub['fechaInicio'],
                            "porcentDesc" => $pub['porcentDesc'],
                            "precio" => $pub['precio'],
                            "venta" => $pub['venta'],
                            "pubFavoritaDe" => $pub['pubFavoritaDe'],
                            "calificacionPublicacionDe" => $pub['calificacionPublicacionDe'],
                        );
                        $empresas[$i]['publicaciones'][$j] = $modifPub;

                        for ($k=0; $k < sizeof($registro); $k++) { 
                            if($registro[$k]['nombreUsuario']==$pub['nombreEmpresa']){
                                $registro[$k]['registroAcciones']=$empresas[$i]['registroAcciones'];
                                $verif=true;
                            break;
                            }
                        }
                        if($verif==false){
                            $registro[]=array(
                                "nombreUsuario" => $pub['nombreEmpresa'],
                                "registroAcciones" => $empresas[$i]['registroAcciones']
                            );
                        }

                        $archivoEmp = fopen('../data/usuariosEmpresas.json', 'w');
                        fwrite($archivoEmp, json_encode($empresas));
                        fclose($archivoEmp);
                        echo json_encode($empresas[$i]);
                        break;
                    }
                }
            }
        }
    }

    public static function nuevaPub($pub)
    {
        $verif=false;
        $contenidoArchivoRegistro = file_get_contents('../data/registroEmpresas.json');
        $registro = json_decode($contenidoArchivoRegistro, true);

        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $pub['nombreEmpresa']) {
                $nuevaPub = array(
                    "nombreEmpresa" => $pub['nombreEmpresa'],
                    "imagenGanga" => $pub['imagenGanga'],
                    "nombreGanga" => $pub['nombreGanga'],
                    "descripcionGanga" => $pub['descripcionGanga'],
                    "fechaMax" => $pub['fechaMax'],
                    "horaMax" => $pub['horaMax'],
                    "ofertasDisponibles" => $pub['ofertasDisponibles'],
                    "horaInicio" => $pub['horaInicio'],
                    "fechaInicio" => $pub['fechaInicio'],
                    "porcentDesc" => $pub['porcentDesc'],
                    "precio" => $pub['precio'],
                    "venta" => $pub['venta'],
                    "pubFavoritaDe" => $pub['pubFavoritaDe'],
                    "calificacionPublicacionDe" => $pub['calificacionPublicacionDe'],
                );
                $empresas[$i]['publicaciones'][] = $nuevaPub;

                for ($k=0; $k < sizeof($registro); $k++) { 
                    if($registro[$k]['nombreUsuario']==$pub['nombreEmpresa']){
                        $registro[$k]['registroAcciones']=$empresas[$i]['registroAcciones'];
                        $verif=true;
                    break;
                    }
                }
                if($verif==false){
                    $registro[]=array(
                        "nombreUsuario" => $pub['nombreEmpresa'],
                        "registroAcciones" => $empresas[$i]['registroAcciones']
                    );
                }

                $archivoReg = fopen('../data/registroEmpresas.json', 'w');
                fwrite($archivoReg, json_encode($registro));
                fclose($archivoReg);
                $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                fwrite($archivo, json_encode($empresas));
                fclose($archivo);
                echo json_encode($empresas[$i]);
                break;
            }
        }
    }

    public static function eliminarEmpresa($nombEmpresa)
    {
        //eliminar la empresa con nombre de empresa 'nombEmpresa'

        $verif=false;
        $contenidoArchivoRegistro = file_get_contents('../data/registroEmpresas.json');
        $registro = json_decode($contenidoArchivoRegistro, true);

        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                for ($k=0; $k < sizeof($registro); $k++) { 
                    if($registro[$k]['nombreUsuario']==$nombEmpresa){
                        $registro[$k]['registroAcciones']=$empresas[$i]['registroAcciones'];
                        $verif=true;
                    break;
                    }
                }
                if($verif==false){
                    $registro[]=array(
                        "nombreUsuario" => $nombEmpresa,
                        "registroAcciones" => $empresas[$i]['registroAcciones']
                    );
                }

                $archivoReg = fopen('../data/registroEmpresas.json', 'w');
                fwrite($archivoReg, json_encode($registro));
                fclose($archivoReg);

                array_splice($empresas, $i, 1);
                $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                fwrite($archivo, json_encode($empresas));
                fclose($archivo);
                echo "Se Elimino";
                break;
            }
        }
    }

    public static function eliminarPub($nombEmpresa, $indicePub)
    {
        //eliminar la publicacion con indice 'indicePub'
        $verifPub=false;
        $verifEmp=false;
        $verif=false;
        $contenidoArchivoRegistro = file_get_contents('../data/registroEmpresas.json');
        $registro = json_decode($contenidoArchivoRegistro, true);

        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nombEmpresa) {
                $verifEmp=true;
                for ($j = 0; $j < sizeof($empresas[$i]['publicaciones']); $j++) {
                    if ($j == $indicePub) {
                        for ($k=0; $k < sizeof($registro); $k++) { 
                            if($registro[$k]['nombreUsuario']==$nombEmpresa){
                                $registro[$k]['registroAcciones']=$empresas[$i]['registroAcciones'];
                                $verif=true;
                            break;
                            }
                        }
                        if($verif==false){
                            $registro[]=array(
                                "nombreUsuario" => $nombEmpresa,
                                "registroAcciones" => $empresas[$i]['registroAcciones']
                            );
                        }

                        $archivoReg = fopen('../data/registroEmpresas.json', 'w');
                        fwrite($archivoReg, json_encode($registro));
                        fclose($archivoReg);

                        array_splice($empresas[$i]['publicaciones'], $j, 1);
                        $archivo = fopen('../data/usuariosEmpresas.json', 'w');
                        fwrite($archivo, json_encode($empresas));
                        fclose($archivo);
                        echo json_encode($empresas[$i]);
                        $verifPub=true;
                        break;
                    }
                }
            }
        }
        if ($verifEmp==false || $verifPub==false) {
            $resul[]=array(
                "verifPub"=>$verifPub,
                "verifEmp"=>$verifEmp,
                "indicePub"=>$indicePub,
                "nombEmpresa"=>$nombEmpresa
            );
            echo json_encode($resul);
        }
    }

    public static function buscarIdUser($nomb)
    {
        $verif = false;
        $contenidoArchivo = file_get_contents('../data/usuariosEmpresas.json');
        $empresas = json_decode($contenidoArchivo, true);
        $resultado=array();
        for ($i = 0; $i < sizeof($empresas); $i++) {
            if ($empresas[$i]['nombreUsuario'] == $nomb) {
                $resultado["resultado"] = "encontrado";
                $resultado["nomb"] = $empresas[$i]['nombreUsuario'];
                echo json_encode($resultado);
                $verif = true;
                break;
            }
        }
                
        if ($verif == false) {
            $resultado["resultado"] = "noEncontrado";
            $resultado["nomb"] = $nomb;
            echo json_encode($resultado);
        }
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

    public function getRegistroAcciones()
    {
        return $this->registroAcciones;
    }

    public function setRegistroAcciones($registroAcciones)
    {
        $this->registroAcciones = $registroAcciones;

        return $this;
    }

    function getEmpFavoritaDe() { 
        return $this->empFavoritaDe; 
   } 

   function setEmpFavoritaDe($empFavoritaDe) {  
       $this->empFavoritaDe = $empFavoritaDe; 
       return $this;
   } 
}

?>