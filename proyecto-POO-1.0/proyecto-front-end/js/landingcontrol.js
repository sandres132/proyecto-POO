var selec;
var selecciono;

function redireccionar(seleccion) {
    if (seleccion == "cliente") {
        top.location.href = "html/ganguitasUsuario.html";
    } else {
        top.location.href = "html/ganguitasCompany.html";
    }
}

function actualizarCliente() {
    selec.registroAcciones.push(msjParaRegistro('logIn', selec.usuarioCliente));
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
            url: '../proyecto-back-end/API/usuarios',
            method: 'PUT',
            responseType: 'json',
            data: clienteModif
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(error) {
            console.log(error);
        });
}

function actualizarEmpresa() {
    selec.registroAcciones.push(msjParaRegistro('logIn', selec.nombreUsuario));
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
            url: '../proyecto-back-end/API/empresas',
            method: 'PUT',
            responseType: 'json',
            data: empresaModif
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(error) {
            console.log(error);
        });
}

function colorLogin() {
    document.getElementById("userName").style.borderColor = "green";
    document.getElementById("userName").style.color = "green";
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("password").style.color = "green";
    document.getElementById("alertLog").innerHTML = "";
}

function validar() {
    var verifUser;
    var verifPass;
    let elem1 = document.getElementById('userName');
    let elem2 = document.getElementById('password');

    if (elem1.value.length != 0 && elem2.value.length != 0) {
        axios({
            url: '../proyecto-back-end/API/usuarios.php',
            method: 'get',
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
                        url: '../proyecto-back-end/API/empresas',
                        method: 'get',
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

function fechaActual() {
    var f = new Date();
    if ((f.getMonth() + 1) <= 9 && f.getDate() >= 10) {
        var fecha = f.getFullYear() + "-0" + (f.getMonth() + 1) + "-" + f.getDate();
    } else if ((f.getMonth() + 1) <= 9 && f.getDate() <= 9) {
        var fecha = f.getFullYear() + "-0" + (f.getMonth() + 1) + "-0" + f.getDate();
    } else if ((f.getMonth() + 1) >= 10 && f.getDate() <= 9) {
        var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-0" + f.getDate();
    } else if ((f.getMonth() + 1) >= 10 && f.getDate() >= 10) {
        var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
    }

    return fecha;
}

function msjParaRegistro(descripcion, nombre) {
    let f = new Date();
    let msj;
    if (descripcion == "signIn") {
        msj = {
            registro: "The user " + nombre + " was registered with the date and time of registration: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "logIn") {
        msj = {
            inicioSesion: "User " + nombre + " login with login date: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    }
    return msj;
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="img/logo.png" alt="imagen logo">`;
    } else {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="img/logo-blanco-y-negro.png" alt="imagen logo">`;
    }

});