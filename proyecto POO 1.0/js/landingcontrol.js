var localStorage = window.localStorage;
var empresas;
var clientes;
var selec;
var selecciono;
var verifUser = false;
var verifPass = false;

if (localStorage.getItem("clientes") == null) {
    clientes = [{
            nombreCliente: 'Hugo Alonso',
            apellidoCliente: 'Barahona Amador',
            usuarioCliente: 'ache',
            emailCliente: 'hugoamador@gmail.com',
            passwordCliente: 'Barca1234',
            actual: false,
            fechaNacimiento: "02/08/1999",
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: [],
            comprasHechas: [],
            comprar: []
        },
        {
            nombreCliente: 'Cristian Alejandro',
            apellidoCliente: 'Mena Olivares',
            usuarioCliente: 'kikin',
            emailCliente: 'kikansama@gmail.com',
            passwordCliente: 'kirito145',
            actual: false,
            fechaNacimiento: "02/08/1997",
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: [],
            comprasHechas: [],
            comprar: []
        },
        {
            nombreCliente: 'Sarol Michel',
            apellidoCliente: 'Rodriguez Urbina',
            usuarioCliente: 'michi',
            emailCliente: 'solrodriguez@gmail.com',
            passwordCliente: 'solecito',
            actual: false,
            fechaNacimiento: "22/01/2000",
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: [],
            comprasHechas: [],
            comprar: []
        },
        {
            nombreCliente: 'Fany Julisa',
            apellidoCliente: 'Pinot Rodriguez',
            usuarioCliente: 'flaca',
            emailCliente: 'flacamil@gmail.com',
            passwordCliente: 'instagram',
            actual: false,
            fechaNacimiento: "02/08/2001",
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: [],
            comprasHechas: [],
            comprar: []
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
            banner: "../img/logo.png",
            pais: "Honduras",
            direccion: 'Col. Miraflores',
            longitud: '8.17403',
            latitud: '2.17403',
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
                    ofertasDisponibles: 5,
                    fechaInicio: '7:00',
                    precio: 999.99,
                    venta: [{
                        cantidad: 1,
                        fechaCompra: '20/06/20'
                    }],
                    comentarios: [{
                        nomCliente: 'ache',
                        comentCliente: '¡Se ve super la promocion!',
                        fechaComment: '20/06/20'
                    }]
                },
                {
                    imagenGanga: '../img/diunsa2.jpg',
                    nombreGanga: '¡Hyper Mega Oferta!',
                    descripcionGanga: 'Por la compra de un celular Huawei Nova 5T ¡Te regalamos un televisor LED de 24" GRATIS!',
                    fechaMax: '28/06/20',
                    horaMax: '20:50',
                    ofertasDisponibles: 45,
                    fechaInicio: '7:00',
                    precio: 9000.00,
                    venta: [],
                    comentarios: []
                },
            ]
        },
        {
            nombreEmpresa: 'Samsung',
            logoEmpresa: '../img/logo-samsung.jpg',
            banner: "../img/logo.png",
            pais: "Honduras",
            direccion: 'Col. Miraflores',
            longitud: '8.17403',
            latitud: '2.17403',
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
                    ofertasDisponibles: 15,
                    fechaInicio: '7:00',
                    precio: 6300.00,
                    venta: [{
                        cantidad: 1,
                        fechaCompra: '12/06/20'
                    }],
                    comentarios: [{
                        nomCliente: 'kikin',
                        comentCliente: '¡A tiempo llego la promocion!',
                        fechaComment: '20/06/20'
                    }]
                },
                {
                    imagenGanga: '../img/samsung2.png',
                    nombreGanga: '¿Aburrido de tu celular?',
                    descripcionGanga: '¡Es tiempo de innovar! Por la compra de tu celular Samsung te llevas gratis hasta $200 en productos Samsung',
                    fechaMax: '07/06/20',
                    horaMax: '23:50',
                    ofertasDisponibles: 205,
                    fechaInicio: '7:00',
                    precio: 3500.00,
                    venta: [],
                    comentarios: []
                },
            ]
        },
        {
            nombreEmpresa: 'Lady Lee',
            logoEmpresa: '../img/logo-lady-lee.jpg',
            banner: "../img/logo.png",
            pais: "Honduras",
            direccion: 'Col. Miraflores',
            longitud: '8.17403',
            latitud: '2.17403',
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
                    descripcionGanga: '¿Aburrido de ver televisión en pantalla pequena? ¡Ven y aprovecha esta súper oferta!, televisor SMART Samsung de 65"',
                    fechaMax: '05/06/20',
                    horaMax: '5:50',
                    ofertasDisponibles: 5,
                    fechaInicio: '7:00',
                    precio: 15000.00,
                    venta: [],
                    comentarios: []
                },
                {
                    imagenGanga: '../img/ladylee3.jpg',
                    nombreGanga: 'Juego de Sala',
                    descripcionGanga: '¡Muebles super comodos super baratos! ¡Ven y aprovecha esta súper oferta!',
                    fechaMax: '05/26/20',
                    horaMax: '8:50',
                    ofertasDisponibles: 15,
                    fechaInicio: '7:00',
                    precio: 9999.99,
                    venta: [],
                    comentarios: []
                },
            ]
        },
        {
            nombreEmpresa: 'Burger King',
            logoEmpresa: '../img/Burger-King-Logo.png',
            banner: "../img/logo.png",
            pais: "Honduras",
            direccion: 'Col. Miraflores',
            longitud: '8.17403',
            latitud: '6.17403',
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
                    ofertasDisponibles: 255,
                    fechaInicio: '7:00',
                    precio: 249.99,
                    venta: [],
                    comentarios: []
                },
                {
                    imagenGanga: '../img/comboHamburger.jpg',
                    nombreGanga: '¡Se vino el Econo Combo!',
                    descripcionGanga: '¡Un refresco, orden de papitas, un sundae, y una hamburguesa Danés!',
                    fechaMax: '06/06/20',
                    horaMax: '21:50',
                    ofertasDisponibles: 405,
                    fechaInicio: '7:00',
                    precio: 79.99,
                    venta: [],
                    comentarios: []
                },
            ]
        },
    ];
    localStorage.setItem("empresas", JSON.stringify(empresas));
} else {
    empresas = JSON.parse(localStorage.getItem('empresas'));
}

function validar(id) {
    document.getElementById("alertLog").innerHTML = "";
    var elem = document.getElementById(id);
    if (id == "userName") {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].usuarioCliente === elem.value) {
                selec = clientes[i];
                selecciono = "clientes";
                verifUser = false;
                break;
            } else {
                verifUser = true;
            }
        }
        if (verifUser) {
            for (let i = 0; i < empresas.length; i++) {
                if (empresas[i].nombreUsuario === elem.value) {
                    selec = empresas[i];
                    selecciono = "empresas";
                    verifUser = false;
                    break;
                } else {
                    verifUser = true;
                }
            }
        }
    } else {
        if (selecciono == "clientes") {
            if (selec.passwordCliente == elem.value) {
                console.log("entro a pascli" + elem.value);
                for (let j = 0; j < clientes.length; j++) {
                    clientes[j].actual = false;
                }
                selec.actual = true;
                localStorage.setItem("clientes", JSON.stringify(clientes));
                verifPass = false;
            } else {
                verifPass = true;
            }
        } else if (selecciono == "empresas") {
            if (selec.password == elem.value) {
                console.log("entro a pascomp" + elem.value);
                for (let j = 0; j < empresas.length; j++) {
                    empresas[j].actual = false;
                }
                empresas[i].actual = true;
                localStorage.setItem("empresas", JSON.stringify(empresas));
                selecciono = "empresas";
                verifPass = false;
                verifUser = false;
            } else {
                verifPass = true;
            }
        }
    }
}

function actual() {
    if (verifUser) {
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("userName").style.color = "red";
        document.getElementById("alertLog").innerHTML = "";
        document.getElementById("alertLog").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong name , </strong>The username you used it doesn't exist.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    } else if (verifPass) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.color = "red";
        document.getElementById("alertLog").innerHTML = "";
        document.getElementById("alertLog").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong Password!, </strong>Please make sure that is your password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    } else if (verifUser === false && verifPass === false) {
        redireccionar(selecciono);
    }
}

function redireccionar(selec) {
    if (selec == "clientes") {
        top.location.href = "html/ganguitasUsuario.html";
    } else {
        top.location.href = "html/ganguitasCompany.html";
    }
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