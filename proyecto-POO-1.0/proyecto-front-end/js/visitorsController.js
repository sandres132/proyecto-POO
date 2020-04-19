var arregloPublicaciones;
var selec;
var selecciono;

function ObtenerPublicaciones() {
    axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
            method: 'GET',
            responseType: 'json',
            params: {
                tipo: "empresa",
                peticion: "publicaciones"
            }
        })
        .then(function(res) {
            arregloPublicaciones = res.data;
            console.log(arregloPublicaciones.length);

        })
        .catch(function(err) {
            console.log(err);
        });
}
ObtenerPublicaciones();

function generarPublicaciones() {
    var empresa;
    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < arregloPublicaciones.length; i++) {
        axios({
                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
                method: 'GET',
                responseType: 'json',
                params: {
                    tipo: "empresa",
                    nombreUsuario: arregloPublicaciones.nombreEmpresa
                }
            })
            .then(function(res) {
                empresa = res.data;
            })
            .catch(function(err) {
                console.log(err);
            });

        document.getElementById("publicaciones").innerHTML +=
            `<div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#ganga${i}" role="tab" data-toggle="tab">Ganga</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#detalles${i}" role="tab" data-toggle="tab">Details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#empresa${i}" role="tab" data-toggle="tab">Company</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane active" role="tabpanel" id="ganga${i}">
                            <div class="inner">
                                <img class="card-top-img" src="${arregloPublicaciones[i].imagenGanga}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${arregloPublicaciones[i].nombreGanga}</h4>
                                <p>${arregloPublicaciones[i].descripcionGanga}</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-sm btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-heart fa-1x"></i></a>
                                <a href="#" class="btn btn-sm btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-cart-plus fa-1x"></i></a>
                                <button class="btn btn-sm btn-info" id="verMas${i}" type="button" data-toggle="collapse" data-target="#contCard${i}" aria-expanded="false" aria-controls="contCard">
                                    <i class="fa fa-eye">See more</i>
                                </button>
                                <div class="collapse" id="contCard${i}">
                                    <div class="card-body m-0">
                                        <h4 class="form-control "><b>Max date:</b> ${arregloPublicaciones[i].fechaMax}</h4>
                                        <h4 class="form-control "><b>Time remaining:</b> ${arregloPublicaciones[i].horaMax}</h4>
                                        <h4 class="form-control "><b>Available Offers:</b> ${arregloPublicaciones[i].ofertasDisponibles}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="detalles${i}">
                            <div class="inner">
                                <img class="card-QR" src="../img/QR.png" alt="">
                                <img class="card-adv" src="${arregloPublicaciones[i].imagenGanga}" alt="">
                            </div>
                            <div class="card-body">
                                <div class="form-control">
                                    <h4 class="form-control"><b>Title:</b> ${arregloPublicaciones[i].nombreGanga}</h4>
                                    <h4 class="form-control"><b>Description:</b> ${arregloPublicaciones[i].descripcionGanga}</h4>
                                    <h4 class="form-control"><b>Start date:</b> ${arregloPublicaciones[i].fechaInicio}</h4>
                                    <h4 class="form-control"><b>Max Date:</b> ${arregloPublicaciones[i].fechaMax}</h4>
                                    <h4 class="form-control"><b>Max hour:</b> ${arregloPublicaciones[i].horaMax}</h4>
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-save fa-2x"></i> Save Card</a>
                            </div>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="empresa${i}">
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
        cont++;
    }
}
generarPublicaciones();

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
        //redireccionar(selecciono);
        /*let pubs = "";
        for (let i = 0; i < selec.publicacionesFav.length; i++) {
            pubs += JSON.stringify(selec.publicacionesFav[i]) + ", ";

        }
        console.log(pubs);*/
        console.log("llego aki");
    }
}

function actualizarCliente() {
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
        tipo: selec.tipo
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
        tipo: selec.tipo
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
    if (seleccion == "clientes") {
        top.location.href = "../html/ganguitasUsuario.html";
    } else {
        top.location.href = "../html/ganguitasCompany.html";
    }
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

function colorLogin() {
    document.getElementById("userName").style.borderColor = "green";
    document.getElementById("userName").style.color = "green";
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("password").style.color = "green";
    document.getElementById("alertLog").innerHTML = "";
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