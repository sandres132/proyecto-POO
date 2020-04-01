var localStorage = window.localStorage;
var empresas;
var clientes;
var selecciono;

if (localStorage.getItem("clientes") == null) {
    clientes = [{
            nombreCliente: 'Hugo Alonso',
            apellidoCliente: 'Barahona Amador',
            usuarioCliente: 'ache',
            emailCliente: 'hugoamador@gmail.com',
            passwordCliente: 'Barca1234',
            actual: false,
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: []
        },
        {
            nombreCliente: 'Cristian Alejandro',
            apellidoCliente: 'Mena Olivares',
            usuarioCliente: 'kikin',
            emailCliente: 'kikansama@gmail.com',
            passwordCliente: 'kirito145',
            actual: false,
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: []
        },
        {
            nombreCliente: 'Sarol Michel',
            apellidoCliente: 'Rodriguez Urbina',
            usuarioCliente: 'michi',
            emailCliente: 'solrodriguez@gmail.com',
            passwordCliente: 'solecito',
            actual: false,
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: []
        },
        {
            nombreCliente: 'Fany Julisa',
            apellidoCliente: 'Pinot Rodriguez',
            usuarioCliente: 'flaca',
            emailCliente: 'flacamil@gmail.com',
            passwordCliente: 'instagram',
            actual: false,
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: []
        },
    ];
    localStorage.setItem("clientes", JSON.stringify(clientes));
} else {
    clientes = JSON.parse(localStorage.getItem('clientes'));
}

if (localStorage.getItem("empresas") == null) {
    empresas = [{
            nombreEmpresa: 'Diunsa',
            logoEmpresa: '../img/Diunsa-logo.png',
            tipoEmpresa: 'Comercial',
            nombreUsuario: 'diunsahn',
            password: 'password',
            facebook: 'diunsa@yahoo.com',
            instagram: 'diunsainstagram@yahoo.com',
            twitter: 'diunsatwitter@yahoo.com',
            twitch: 'diunsatwitch@yahoo.com',
            email: 'diunsahn@gmail.hn',
            actual: false,
            publicaciones: [{
                    imagenGanga: '../img/diunsa3.jpg',
                    nombreGanga: 'Camisa Deportiva',
                    descripcionGanga: '¡Vamos a apoyar al Motagua por la compra de una camiseta deportiva del Motagua te regalamos un pase doble en localidad sombra sur!',
                    fechaMax: '25/06/20',
                    horaMax: '3:50',
                    ofertasDisponibles: '5',
                    fechaInicio: '7:00'
                },
                {
                    imagenGanga: '../img/diunsa2.jpg',
                    nombreGanga: '¡Hyper Mega Oferta!',
                    descripcionGanga: 'Por la compra de un celular Huawei Nova 5T ¡Te regalamos un televisor LED de 24" GRATIS!',
                    fechaMax: '05/16/20',
                    horaMax: '20:50',
                    ofertasDisponibles: '45',
                    fechaInicio: '7:00'
                },
            ]
        },
        {
            nombreEmpresa: 'Samsung',
            logoEmpresa: '../img/logo-samsung.jpg',
            tipoEmpresa: 'Tecnologia',
            nombreUsuario: 'samsunghn',
            password: 'password',
            facebook: 'samsung@yahoo.com',
            instagram: 'samsunginstagram@yahoo.com',
            twitter: 'samsungtwitter@yahoo.com',
            twitch: 'samsungtwitch@yahoo.com',
            email: 'samsunghn@gmail.hn',
            actual: false,
            publicaciones: [{
                    imagenGanga: '../img/samsung.png',
                    nombreGanga: 'Samsung A30 O A30s',
                    descripcionGanga: '¡Aprovecha y lleva a tu persona querida al cine por la compra de un Samsung A30 o A30s te regalamos entradas al cine!',
                    fechaMax: '',
                    horaMax: '16:50',
                    ofertasDisponibles: '15',
                    fechaInicio: '7:00'
                },
                {
                    imagenGanga: '../img/samsung2.png',
                    nombreGanga: '¿Aburrido de tu celular?',
                    descripcionGanga: '¡Es tiempo de innovar! Por la compra de tu celular Samsung te llevas gratis hasta $200 en productos Samsung',
                    fechaMax: '07/06/20',
                    horaMax: '23:50',
                    ofertasDisponibles: '205',
                    fechaInicio: '7:00'
                },
            ]
        },
        {
            nombreEmpresa: 'Lady Lee',
            logoEmpresa: '../img/logo-lady-lee.jpg',
            tipoEmpresa: 'Electrodomesticos',
            nombreUsuario: 'ladyLeehn',
            password: 'password',
            facebook: 'ladylee@yahoo.com',
            instagram: 'ladyleeinstagram@yahoo.com',
            twitter: 'ladyleetwitter@yahoo.com',
            twitch: 'ladyleetwitch@yahoo.com',
            email: 'ladyleehn@gmail.hn',
            actual: false,
            publicaciones: [{
                    imagenGanga: '../img/ladylee1.jpg',
                    nombreGanga: 'Televisor Samsung',
                    descripcionGanga: '¿Aburrido de ver televisión en pantalla pequeña? ¡Ven y aprovecha esta súper oferta!, televisor SMART Samsung de 65"',
                    fechaMax: '05/06/20',
                    horaMax: '5:50',
                    ofertasDisponibles: '5',
                    fechaInicio: '7:00'
                },
                {
                    imagenGanga: '../img/ladylee3.jpg',
                    nombreGanga: 'Juego de Sala',
                    descripcionGanga: '¡Muebles super comodos super baratos! ¡Ven y aprovecha esta súper oferta!',
                    fechaMax: '05/26/20',
                    horaMax: '8:50',
                    ofertasDisponibles: '15',
                    fechaInicio: '7:00'
                },
            ]
        },
        {
            nombreEmpresa: 'Burger King',
            logoEmpresa: '../img/Burger-King-Logo.png',
            tipoEmpresa: 'Comidas Rapidas',
            nombreUsuario: 'burgerkinghn',
            password: 'password',
            facebook: 'burgerking@yahoo.com',
            instagram: 'burgerkinginstagram@yahoo.com',
            twitter: 'burgerkingtwitter@yahoo.com',
            twitch: 'burgerkingtwitch@yahoo.com',
            email: 'burgerkinghn@gmail.hn',
            actual: false,
            publicaciones: [{
                    imagenGanga: '../img/comboHamburger2.jpg',
                    nombreGanga: 'Combo #2',
                    descripcionGanga: '¿Deseas comer en familia? Llego el combo #2 de Burguer King para que disfrutes en familia.',
                    fechaMax: '05/06/20',
                    horaMax: '15:50',
                    ofertasDisponibles: '255',
                    fechaInicio: '7:00'
                },
                {
                    imagenGanga: '../img/comboHamburger.jpg',
                    nombreGanga: '¡Se vino el Econo Combo!',
                    descripcionGanga: '¡Un refresco, orden de papitas, un sundae, y una hamburguesa Danés!',
                    fechaMax: '06/06/20',
                    horaMax: '21:50',
                    ofertasDisponibles: '405',
                    fechaInicio: '7:00'
                },
            ]
        },
    ];
    localStorage.setItem("empresas", JSON.stringify(empresas));
} else {
    empresas = JSON.parse(localStorage.getItem('empresas'));
}

function generarPublicaciones() {
    let cont = 0;
    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < empresas.length; i++) {
        for (let j = 0; j < empresas[i].publicaciones.length; j++) {
            document.getElementById("publicaciones").innerHTML +=
                `<div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#ganga${cont}" role="tab" data-toggle="tab">Ganga</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#detalles${cont}" role="tab" data-toggle="tab">Detalles</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#empresa${cont}" role="tab" data-toggle="tab">Empresa</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane active" role="tabpanel" id="ganga${cont}">
                                <div class="inner">
                                    <img class="card-img-top" src="${empresas[i].publicaciones[j].imagenGanga}" alt="">
                                </div>
                                <div class="card-body">
                                    <h4>${empresas[i].publicaciones[j].nombreGanga}</h4>
                                    <p>${empresas[i].publicaciones[j].descripcionGanga}</p><br> Calificar: <br>
                                    <div class="rw-ui-container" data-title="product rating"></div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-sm btn-info"><i
                                            class="fa fa-heart fa-1x"></i></button>
                                    <button class="btn btn-sm btn-info"><i
                                            class="fa fa-cart-plus fa-1x"></i></button>
                                    <button class="btn btn-sm btn-info" id="verMas${cont}" type="button" data-toggle="collapse" data-target="#contCard${cont}" aria-expanded="false" aria-controls="contCard">
                                        <i class="fa fa-eye">Ver Mas</i>
                                    </button>
                                    <div class="collapse" id="contCard${cont}">
                                        <div class="card-body m-0">
                                            <h4 class="form-control "><b>Tiempo restante:</b> ${empresas[i].publicaciones[j].horaMax}</h4>
                                            <h4 class="form-control "><b>Ofertas Disponibles:</b> ${empresas[i].publicaciones[j].ofertasDisponibles}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" role="tabpanel" id="detalles${cont}">
                                <div class="inner">
                                    <img class="card-QR" src="../img/QR.png" alt="">
                                    <img class="card-QR" src="${empresas[i].publicaciones[j].imagenGanga}" alt="">
                                </div>
                                <div class="card-body">
                                    <div class="form-control">
                                        <h4 class="form-control"><b>Titulo:</b> ${empresas[i].publicaciones[j].nombreGanga}</h4>
                                        <h4 class="form-control"><b>Descripción:</b> ${empresas[i].publicaciones[j].descripcionGanga}</h4>
                                        <h4 class="form-control"><b>Fecha Inicio:</b> ${empresas[i].publicaciones[j].fechaInicio}</h4>
                                        <h4 class="form-control"><b>Fecha Max:</b> ${empresas[i].publicaciones[j].fechaMax}</h4>
                                        <h4 class="form-control"><b>Hora Max:</b> ${empresas[i].publicaciones[j].horaMax}</h4>
                                        <h4 class="form-control"><b>Empresa:</b> ${empresas[i].publicaciones[j].nombreEmpresa}</h4>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input class="btn btn-info" type="button" value="Guardar Tarjeta">
                                </div>
                            </div>
                            <div class="tab-pane" role="tabpanel" id="empresa${cont}">
                                <div class="inner">
                                    <img class="card-img-top" src="${empresas[i].logoEmpresa}" alt="">
                                </div>
                                <div class="card-body">
                                    <div class="form-control">
                                        <h4 class="form-control"><i class="fa fa-institution"></i><b>Nombre:</b> ${empresas[i].nombreEmpresa}</h4>
                                        <h4 class="form-control"><i class="fa fa-institution"></i><b>Descripción:</b> ${empresas[i].tipoEmpresa}</h4>
                                        <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publicaciones:</b> ${empresas[i].publicaciones.length}</h4>
                                        <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${empresas[i].facebook}</h4>
                                        <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${empresas[i].instagram}</h4>
                                        <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${empresas[i].twitter}</h4>
                                        <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${empresas[i].twitch}</h4>
                                        <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${empresas[i].email}</h4>
                                        <div class="rw-ui-container" data-title="company rating"></div>
                                    <div class="form-control">
                                </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="log form-control" data-toggle="modal" data-target="#logIn"><i class="fa fa-map-marker fa-2x"></i> Locales
                                        Cercanos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            cont++;
        }

    }
}
generarPublicaciones();

function actual() {
    var verifUser = false;
    var verifPass = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].usuarioCliente == document.getElementById("userName").value) {
            if (clientes[i].passwordCliente == document.getElementById("password").value) {
                for (let j = 0; j < clientes.length; j++) {
                    clientes[j].actual = false;
                }
                clientes[i].actual = true;
                selecciono = "cliente";
                localStorage.setItem("clientes", JSON.stringify(clientes));
                verifPass = false;
                verifUser = false;
                break;
            } else {
                verifPass = true
            }
        } else {
            verifUser = true;
        }
    }

    if (verifUser || verifPass) {
        for (let i = 0; i < empresas.length; i++) {
            if (empresas[i].nombreUsuario == document.getElementById("userName").value) {
                if (empresas[i].password == document.getElementById("password").value) {
                    for (let j = 0; j < empresas.length; j++) {
                        empresas[j].actual = false;
                    }
                    empresas[i].actual = true;
                    localStorage.setItem("empresas", JSON.stringify(empresas));
                    selecciono = "empresa";
                    verifPass = false;
                    verifUser = false;
                    break;
                } else {
                    verifPass = true
                }
            } else {
                verifUser = true;
            }
        }
        if (verifUser || verifPass) {
            alert("Usuario o Contraseña Invalido");
        } else if (verifUser == false || verifPass == false) {
            redireccionar();
        }

    } else if (verifUser == false || verifPass == false) {
        redireccionar();
    }
}

function redireccionar() {
    if (selecciono == "cliente") {
        top.location.href = "../html/ganguitasUsuario.html";
    } else {
        top.location.href = "../html/ganguitasCompany.html";
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo.png" alt="imagen logo">`;
    } else {
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo-blanco-y-negro.png" alt="imagen logo">`;
    }

})

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