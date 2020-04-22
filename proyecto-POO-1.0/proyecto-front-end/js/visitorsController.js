var selec;
var selecciono;

function ObtenerPublicaciones() {
    axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
            method: 'GET',
            responseType: 'json',
            params: {
                tipo: "empresa",
            }
        })
        .then(function(res) {
            var empresas;
            empresas = res.data;
            generarPublicaciones(empresas);
        })
        .catch(function(err) {
            console.log(err);
        });
}
ObtenerPublicaciones();

function generarPublicaciones(empresas) {
    var cont = 0;
    var empresasLenght = 0;
    empresas.map(item => {
        empresasLenght++;
    });
    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < empresasLenght; i++) {
        for (let j = 0; j < empresas[i].publicaciones.length; j++) {
            imprimirPublicaciones(empresas[i].publicaciones[j], empresas[i], cont);
            cont++;
        }
    }
}

function imprimirPublicaciones(publicacion, empresa, contadorPubs) {
    document.getElementById("publicaciones").innerHTML +=
        `<div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="card">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#ganga${contadorPubs}" role="tab" data-toggle="tab">Ganga</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#detalles${contadorPubs}" role="tab" data-toggle="tab">Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#empresa${contadorPubs}" role="tab" data-toggle="tab">Company</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active" role="tabpanel" id="ganga${contadorPubs}">
                        <div class="inner">
                            <img class="card-top-img" src="${publicacion.imagenGanga}" alt="">
                        </div>
                        <div class="card-body">
                            <h4>${publicacion.nombreGanga}</h4>
                            <p>${publicacion.descripcionGanga}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-sm btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-heart fa-1x"></i></a>
                            <a href="#" class="btn btn-sm btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-cart-plus fa-1x"></i></a>
                            <button class="btn btn-sm btn-info" id="verMas${contadorPubs}" type="button" data-toggle="collapse" data-target="#contCard${contadorPubs}" aria-expanded="false" aria-controls="contCard">
                                <i class="fa fa-eye">See more</i>
                            </button>
                            <div class="collapse" id="contCard${contadorPubs}">
                                <div class="card-body m-0">
                                    <h4 class="form-control "><b>Max date:</b> ${publicacion.fechaMax}</h4>
                                    <h4 class="form-control "><b>Time remaining:</b> ${publicacion.horaMax}</h4>
                                    <h4 class="form-control "><b>Available Offers:</b> ${publicacion.ofertasDisponibles}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="detalles${contadorPubs}">
                        <div class="inner">
                            <img class="card-QR" src="../img/QR.png" alt="">
                            <img class="card-adv" src="${publicacion.imagenGanga}" alt="">
                        </div>
                        <div class="card-body">
                            <div class="form-control">
                                <h4 class="form-control"><b>Title:</b> ${publicacion.nombreGanga}</h4>
                                <h4 class="form-control"><b>Description:</b> ${publicacion.descripcionGanga}</h4>
                                <h4 class="form-control"><b>Start date:</b> ${publicacion.fechaInicio}</h4>
                                <h4 class="form-control"><b>Max Date:</b> ${publicacion.fechaMax}</h4>
                                <h4 class="form-control"><b>Max hour:</b> ${publicacion.horaMax}</h4>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-save fa-2x"></i> Save Card</a>
                        </div>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="empresa${contadorPubs}">
                        <div class="inner">
                            <img class="card-img-top" src="${empresa.logoEmpresa}" alt="">
                        </div>
                        <div class="card-body">
                            <div class="form-control">
                                <h4 class="form-control"><i class="fa fa-institution"></i><b>Name:</b> ${empresa.nombreEmpresa}</h4>
                                <h4 class="form-control"><i class="fa fa-institution"></i><b>Description:</b> ${empresa.tipoEmpresa}</h4>
                                <h4 class="form-control"><i class="fa fa-flag"></i><b>Country:</b> ${empresa.pais}</h4>
                                <h4 class="form-control"><i class="fa fa-map-marker"></i><b>Address:</b> ${empresa.direccion}</h4>
                                <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publications:</b> ${empresa.publicaciones.length}</h4>
                                <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${empresa.facebook}</h4>
                                <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${empresa.instagram}</h4>
                                <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${empresa.twitter}</h4>
                                <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${empresa.twitch}</h4>
                                <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${empresa.email}</h4>
                            <div class="form-control">
                        </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="log form-control" data-toggle="modal" data-target="#logIn"><i class="fa fa-map-marker fa-2x"></i> Nearby Premises</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

function validar() {
    var verifUser;
    var verifPass;
    let elem1 = document.getElementById('userName');
    let elem2 = document.getElementById('password');
    console.log(elem1.value.length + " && " + elem2.value.length);

    if (elem1.value.length != 0 && elem2.value.length != 0) {
        axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios',
            method: 'GET',
            responseType: 'json',
            params: {
                tipo: "cliente",
                usuarioCliente: elem1.value
            }
        }).then(function(res) {
            if (res.data.usuarioCliente === elem1.value) {
                selec = res.data;
                selecciono = 'cliente';
                verifUser = false;

                if (selec.passwordCliente == elem2.value) {
                    console.log("entro con password" + elem2.value);
                    selec.actual = true;
                    actualizarCliente();
                    verifPass = false;
                    console.log(verifPass);
                    revisionFinal(verifUser, verifPass);
                } else {
                    verifPass = true;
                    revisionFinal(verifUser, verifPass);
                }
            } else {
                verifUser = true;
            }
            if (verifUser) {
                axios({
                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios',
                        method: 'GET',
                        responseType: 'json',
                        params: {
                            tipo: "empresa",
                            nombreUsuario: elem1.value
                        }
                    })
                    .then(function(res) {
                        if (res.data.nombreUsuario === elem1.value) {
                            selec = res.data;
                            verifUser = false;

                            if (selec.password == elem2.value) {
                                console.log("entro con password" + elem2.value);
                                selec.actual = true;
                                actualizarEmpresa();
                                selecciono = "empresa";
                                verifUser = false;
                                verifPass = false;
                                revisionFinal(verifUser, verifPass);
                            } else {
                                verifPass = true;
                                revisionFinal(verifUser, verifPass);
                            }
                        } else {
                            verifUser = true;
                            revisionFinal(verifUser, verifPass);
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        }).catch(function(err) {
            console.log(err);
        });
    } else {
        verifPass = true;
        verifUser = true;
        revisionFinal(verifUser, verifPass);
    }
}

function revisionFinal(verifUser, verifPass) {
    document.getElementById("alertLog").innerHTML = "";

    console.log("veriff pass en actual " + verifPass);

    if (verifUser || verifPass) {
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("userName").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.color = "red";
        document.getElementById("alertLog").innerHTML = "";
        document.getElementById("alertLog").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong User or Password!, </strong>Please make sure that is your user name and your password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    } else if (verifUser === false && verifPass === false) {
        redireccionar(selecciono);
    }
}

function actualizarCliente() {
    selec.registroAcciones.push(msjParaRegistro("logIn", selec.usuarioCliente));
    let clienteModif = {
        usuarioClienteModif: selec.usuarioCliente,
        nombreCliente: selec.nombreCliente,
        usuarioCliente: selec.usuarioCliente,
        apellidoCliente: selec.apellidoCliente,
        emailCliente: selec.emailCliente,
        passwordCliente: selec.passwordCliente,
        actual: selec.actual,
        fechaNacimiento: selec.fechaNacimiento,
        fotoCliente: selec.fotoCliente,
        genero: selec.genero,
        pais: selec.pais,
        companiasFav: selec.companiasFav,
        publicacionesFav: selec.publicacionesFav,
        comprasHechas: selec.comprasHechas,
        comprar: selec.comprar,
        tipo: selec.tipo,
        fechaSignIn: selec.fechaSignIn,
        registroAcciones: selec.registroAcciones
    }

    axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
            method: 'PUT',
            responseType: 'json',
            data: clienteModif
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(error) {
            console.error(error);
        });
}

function actualizarEmpresa() {
    selec.registroAcciones.push(msjParaRegistro("logIn", selec.nombreUsuario));
    let empresaModif = {
        nombreUsuarioModif: selec.nombreUsuario,
        nombreEmpresa: selec.nombreEmpresa,
        logoEmpresa: selec.logoEmpresa,
        banner: selec.banner,
        pais: selec.pais,
        direccion: selec.direccion,
        longitud: selec.longitud,
        latitud: selec.latitud,
        tipoEmpresa: selec.tipoEmpresa,
        nombreUsuario: selec.nombreUsuario,
        password: selec.password,
        facebook: selec.facebook,
        instagram: selec.instagram,
        twitter: selec.twitter,
        twitch: selec.twitch,
        email: selec.email,
        actual: selec.actual,
        publicaciones: selec.publicaciones,
        calificacionEmpresaDe: selec.calificacionEmpresaDe,
        tipo: selec.tipo,
        fechaSignIn: selec.fechaSignIn,
        registroAcciones: selec.registroAcciones
    }

    axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
            method: 'PUT',
            responseType: 'json',
            data: empresaModif
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(error) {
            console.error(error);
        });
}

function redireccionar(seleccion) {
    if (seleccion == "cliente") {
        top.location.href = "../html/ganguitasUsuario.html";
    } else {
        top.location.href = "../html/ganguitasCompany.html";
    }
}

function colorLogin() {
    document.getElementById("userName").style.borderColor = "green";
    document.getElementById("userName").style.color = "green";
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("password").style.color = "green";
    document.getElementById("alertLog").innerHTML = "";
}

function msjParaRegistro(descripcion, nombre) {
    let f = new Date();
    let msj;
    if (descripcion == "signIn") {
        msj = {
            registro: "The user " + nombre + " was registered with the date and time of registration: " + f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "logIn") {
        msj = {
            inicioSesion: "User " + nombre + " login with login date: " + f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    }
    return msj;
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo.png" alt="imagen logo">`;
    } else {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo-blanco-y-negro.png" alt="imagen logo">`;
    }

});

(function(d, t, e, m) {
    window.RW_Async_Init = function() {
        RW.init({
            huid: "453443",
            uid: "1396e7f80026788831c751ca7eb8843a",
            source: "website",
            options: {
                "advanced": {
                    "font": {
                        "type": "\"Comic Sans MS\""
                    }
                },
                "size": "medium",
                "style": "oxygen",
                "isDummy": false
            }
        });
        RW.render();
    };

    var rw, s = d.getElementsByTagName(e)[0],
        id = "rw-js",
        l = d.location,
        ck = "Y" + t.getFullYear() +
        "M" + t.getMonth() + "D" + t.getDate(),
        p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;
    rw = d.createElement(e);
    rw.id = id;
    rw.async = true;
    rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
}(document, new Date(), "script", "rating-widget.com/"));