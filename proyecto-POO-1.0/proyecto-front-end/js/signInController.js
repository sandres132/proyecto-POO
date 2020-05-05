var selec;
var selecciono;
var verifPassSign = null;
var verifUserSign = null;

function checkInput(id) {
    let elem = document.getElementById(id).checked;
    if (elem) {
        generarSignInComp();
    } else {
        generarSignInUser();
    }
}
checkInput('boton');

function generarSignInUser() {
    document.getElementById("Comp").style.display = "none";
    document.getElementById("User").style.display = "block";
}

function generarSignInComp() {
    document.getElementById("User").style.display = "none";
    document.getElementById("Comp").style.display = "block";
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
                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas',
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
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
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

function cambiar(id) {
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.color = "green";
}

function validacion(id) {
    var elem = document.getElementById(id);
    if (id == 'dateUser') {
        limpiarAlertas('alertSignUser');
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        }
    } else if (id == 'passwordUser') {
        document.getElementById('confirmPassUser').value = "";
        alertar("passwordUser", "confirmPassUser");
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        } else {
            elem.style.borderColor = "red";
            elem.style.color = "red";
        }
    } else if (id == 'passwordComp') {
        document.getElementById('confirmPassComp').value = "";
        alertar("passwordComp", "confirmPassComp");
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        } else {
            elem.style.borderColor = "red";
            elem.style.color = "red";
        }
    } else {
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        } else {
            elem.style.borderColor = "red";
            elem.style.color = "red";
        }
    }

}

function alertar(id1, id2) {
    var elem1 = document.getElementById(id1);
    var elem2 = document.getElementById(id2);
    if (elem1.value == elem2.value) {
        if (elem2.checkValidity()) {
            elem2.style.borderColor = "green";
            elem2.style.color = "green";
            verifPassSign = true;
        } else {
            elem2.style.borderColor = "red";
            elem2.style.color = "red";
            verifPassSign = false;
        }
    } else {
        elem2.style.borderColor = "red";
        elem2.style.color = "red";
        verifPassSign = false;
    }

}

function validarUser(id, descripcion) {
    var elem = document.getElementById(id);
    if (descripcion == 'cliente') {
        axios({
                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios',
                method: 'get',
                responseType: 'json',
                params: {
                    tipo: descripcion,
                }
            })
            .then(function(res) {
                var clientes = res.data;
                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuarioCliente == elem.value) {
                        elem.style.borderColor = "red";
                        elem.style.color = "red";
                        verifUserSign = false;
                        break;
                    } else {
                        if (elem.checkValidity()) {
                            elem.style.borderColor = "green";
                            elem.style.color = "green";
                            verifUserSign = true;

                        } else {
                            elem.style.borderColor = "red";
                            elem.style.color = "red";
                            verifUserSign = false;
                        }
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            });

    } else if (descripcion == 'empresa') {

        axios({
                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas',
                method: 'get',
                responseType: 'json',
                params: {
                    tipo: descripcion,
                }
            })
            .then(function(res) {
                var empresas = res.data;
                var empresasLength = 0;
                empresas.map(item => {
                    empresasLength++;
                });
                for (let i = 0; i < empresasLength; i++) {
                    if (empresas[i].nombreUsuario == elem.value) {
                        elem.style.borderColor = "red";
                        elem.style.color = "red";
                        verifUserSign = false;
                        break;
                    } else {
                        if (elem.checkValidity()) {
                            elem.style.borderColor = "green";
                            elem.style.color = "green";
                            verifUserSign = true;

                        } else {
                            elem.style.borderColor = "red";
                            elem.style.color = "red";
                            verifUserSign = false;
                        }
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            });
        console.log("dentro de verifUser " + verifUserSign);

    }
}

function limpiarAlertas(id) {
    document.getElementById(id).innerHTML = "";
}

function signInUser() {
    if (document.getElementById('imagenUs').value != null) {
        var frm = $('#form1');
        let formData = new FormData(frm[0]);
        console.log(frm[0]);

        axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube.php', formData)
            .then(res => {
                console.log(res.data);
                if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUserSign && verifPassSign) {
                    var nuevoCliente = {
                        nombreCliente: document.getElementById("firstName").value,
                        apellidoCliente: document.getElementById("lastName").value,
                        usuarioCliente: document.getElementById("usName").value,
                        emailCliente: document.getElementById("emailUser").value,
                        passwordCliente: document.getElementById("passwordUser").value,
                        actual: true,
                        fechaNacimiento: document.getElementById("dateUser").value,
                        fotoCliente: "../" + res.data,
                        genero: document.getElementById("genero").value,
                        pais: document.getElementById("selectPaisCliente").value,
                        companiasFav: [],
                        publicacionesFav: [],
                        comprasHechas: [],
                        comprar: [],
                        tipo: "cliente",
                        fechaSignIn: fechaActual(),
                        registroAcciones: [msjParaRegistro('signIn', document.getElementById("usName").value)]

                    }
                    axios({
                            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
                            method: 'POST',
                            responseType: 'json',
                            data: nuevoCliente
                        })
                        .then(function() {
                            redireccionar('cliente');
                        })
                        .catch(function(error) {
                            console.error(error);
                        });
                } else if (verifUsersign == false && document.getElementById("usName").value.length >= 3) {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>User is already in use!, </strong>Please try with another user name.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (verifPassSign == false && document.getElementById("passwordUser").value.length >= 8) {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Passwords do not match!, </strong>Please check the passwords.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;

                } else if (document.getElementById("firstName").style.color == "red" || document.getElementById("lastName").style.color == "red" || document.getElementById("emailUser").style.color == "red" || document.getElementById("usName").style.color == "red" || document.getElementById("passwordUser").style.color == "red" || document.getElementById("confirmPassUser").style.color == "red") {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (document.getElementById("firstName").value.length == 0 || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("usName").value.length == 0 || document.getElementById("passwordUser").value.length == 0 || document.getElementById("confirmPassUser").value.length == 0) {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Form incomplete!, </strong>Please fill all the fields.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                }

            }).catch(err => {
                console.error(err);
            });

    } else {
        if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUserSign && verifPassSign) {
            var nuevoCliente = {
                nombreCliente: document.getElementById("firstName").value,
                apellidoCliente: document.getElementById("lastName").value,
                usuarioCliente: document.getElementById("usName").value,
                emailCliente: document.getElementById("emailUser").value,
                passwordCliente: document.getElementById("passwordUser").value,
                actual: true,
                fechaNacimiento: document.getElementById("dateUser").value,
                fotoCliente: "../user-logo-png-4.png",
                genero: document.getElementById("genero").value,
                pais: document.getElementById("selectPaisCliente").value,
                companiasFav: [],
                publicacionesFav: [],
                comprasHechas: [],
                comprar: [],
                tipo: "cliente",
                fechaSignIn: fechaActual(),
                registroAcciones: [msjParaRegistro('signIn', document.getElementById("usName").value)]

            }
            axios({
                    url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
                    method: 'POST',
                    responseType: 'json',
                    data: nuevoCliente
                })
                .then(function() {
                    redireccionar('cliente');
                })
                .catch(function(error) {
                    console.error(error);
                });
        } else if (verifUsersign == false && document.getElementById("usName").value.length >= 3) {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>User is already in use!, </strong>Please try with another user name.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (verifPassSign == false && document.getElementById("passwordUser").value.length >= 8) {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Passwords do not match!, </strong>Please check the passwords.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;

        } else if (document.getElementById("firstName").style.color == "red" || document.getElementById("lastName").style.color == "red" || document.getElementById("emailUser").style.color == "red" || document.getElementById("usName").style.color == "red" || document.getElementById("passwordUser").style.color == "red" || document.getElementById("confirmPassUser").style.color == "red") {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (document.getElementById("firstName").value.length == 0 || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("usName").value.length == 0 || document.getElementById("passwordUser").value.length == 0 || document.getElementById("confirmPassUser").value.length == 0) {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Form incomplete!, </strong>Please fill all the fields.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        }
    }
}

function signInComp() {
    console.log("dentro de signInComp " + verifUserSign);
    if (document.getElementById('imagenCompany').value != null) {
        var frm = $('#form2');
        let formData = new FormData(frm[0]);
        axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', formData)
            .then(res => {
                //console.log(res);
                if (document.getElementById('bannerCompany').value != null) {
                    var frm1 = $('#form3');
                    let frmData = new FormData(frm1[0]);
                    axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', frmData)
                        .then(resa => {
                            //console.log(res);
                            if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUserSign && verifPassSign) {
                                var nuevaComp = {
                                    nombreEmpresa: document.getElementById("institutionName").value,
                                    logoEmpresa: '../' + res.data,
                                    banner: '../' + resa.data,
                                    pais: document.getElementById("selectPaisEmpresa").value,
                                    direccion: document.getElementById("direcComp").value,
                                    longitud: document.getElementById("longComp").value,
                                    latitud: document.getElementById("latComp").value,
                                    tipoEmpresa: document.getElementById("institutionDescription").value,
                                    nombreUsuario: document.getElementById("userComp").value,
                                    password: document.getElementById("passwordComp").value,
                                    facebook: document.getElementById("facebookComp").value,
                                    instagram: document.getElementById("instagramComp").value,
                                    twitter: document.getElementById("twitterComp").value,
                                    twitch: document.getElementById("twitchComp").value,
                                    email: document.getElementById("emailComp").value,
                                    actual: true,
                                    publicaciones: [],
                                    calificacionEmpresaDe: [],
                                    tipo: "empresa",
                                    fechaSignIn: fechaActual(),
                                    registroAcciones: [msjParaRegistro("signIn", document.getElementById("userComp").value)]
                                }

                                axios({
                                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                                        method: 'POST',
                                        responseType: 'json',
                                        data: nuevaComp
                                    })
                                    .then(function() {
                                        redireccionar('empresa');
                                    })
                                    .catch(function(error) {
                                        console.error(error);
                                    });
                            } else if (verifUserSign == false && document.getElementById("userComp").value.length >= 3) {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>User is already in use!, </strong>Please try with another user name.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Passwords do not match!, </strong>Please check the passwords.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;

                            } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                                document.getElementById("passwordComp").value == 0) {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Form incomplete!, </strong>Please fill all the fields.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            }
                        }).catch(err => {
                            console.error(err);
                        });
                } else {
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUserSign && verifPassSign) {
                        var nuevaComp = {
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: '../' + res.data,
                            banner: '../img/logo.png',
                            pais: document.getElementById("selectPaisEmpresa").value,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: document.getElementById("passwordComp").value,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: true,
                            publicaciones: [],
                            calificacionEmpresaDe: [],
                            tipo: "empresa",
                            fechaSignIn: fechaActual(),
                            registroAcciones: [msjParaRegistro("signIn", document.getElementById("userComp").value)]
                        }

                        axios({
                                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                                method: 'POST',
                                responseType: 'json',
                                data: nuevaComp
                            })
                            .then(function() {
                                redireccionar('empresa');
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (verifUserSign == false && document.getElementById("userComp").value.length >= 3) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>User is already in use!, </strong>Please try with another user name.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Passwords do not match!, </strong>Please check the passwords.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

                    } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                        document.getElementById("passwordComp").value == 0) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Form incomplete!, </strong>Please fill all the fields.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    }
                }

            }).catch(err => {
                console.error(err);
            });

    } else {
        if (document.getElementById('bannerCompany').value != null) {
            var frm1 = $('#form3');
            let frmData = new frmData(frm1[0]);
            axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', formData)
                .then(resa => {
                    //console.log(res);
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUserSign && verifPassSign) {
                        var nuevaComp = {
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: '../logo.png',
                            banner: '../' + resa.data,
                            pais: document.getElementById("selectPaisEmpresa").value,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: document.getElementById("passwordComp").value,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: true,
                            publicaciones: [],
                            calificacionEmpresaDe: [],
                            tipo: "empresa",
                            fechaSignIn: fechaActual(),
                            registroAcciones: [msjParaRegistro("signIn", document.getElementById("userComp").value)]
                        }

                        axios({
                                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                                method: 'POST',
                                responseType: 'json',
                                data: nuevaComp
                            })
                            .then(function() {
                                redireccionar('empresa');
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (verifUserSign == false && document.getElementById("userComp").value.length >= 3) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>User is already in use!, </strong>Please try with another user name.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Passwords do not match!, </strong>Please check the passwords.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

                    } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                        document.getElementById("passwordComp").value == 0) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Form incomplete!, </strong>Please fill all the fields.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    }
                }).catch(err => {
                    console.error(err);
                });
        } else {
            if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUserSign && verifPassSign) {
                var nuevaComp = {
                    nombreEmpresa: document.getElementById("institutionName").value,
                    logoEmpresa: '../logo.png',
                    banner: '../img/logo.png',
                    pais: document.getElementById("selectPaisEmpresa").value,
                    direccion: document.getElementById("direcComp").value,
                    longitud: document.getElementById("longComp").value,
                    latitud: document.getElementById("latComp").value,
                    tipoEmpresa: document.getElementById("institutionDescription").value,
                    nombreUsuario: document.getElementById("userComp").value,
                    password: document.getElementById("passwordComp").value,
                    facebook: document.getElementById("facebookComp").value,
                    instagram: document.getElementById("instagramComp").value,
                    twitter: document.getElementById("twitterComp").value,
                    twitch: document.getElementById("twitchComp").value,
                    email: document.getElementById("emailComp").value,
                    actual: true,
                    publicaciones: [],
                    calificacionEmpresaDe: [],
                    tipo: "empresa",
                    fechaSignIn: fechaActual(),
                    registroAcciones: [msjParaRegistro("signIn", document.getElementById("userComp").value)]
                }

                axios({
                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                        method: 'POST',
                        responseType: 'json',
                        data: nuevaComp
                    })
                    .then(function() {
                        redireccionar('empresa');
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else if (verifUserSign == false && document.getElementById("userComp").value.length >= 3) {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>User is already in use!, </strong>Please try with another user name.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Passwords do not match!, </strong>Please check the passwords.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;

            } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                document.getElementById("passwordComp").value == 0) {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Form incomplete!, </strong>Please fill all the fields.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            }
        }
    }
}

function fechaActual() {
    var f = new Date();
    var fecha = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();
    return fecha;
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