var localStorage = window.localStorage;
var empresas;
var clientes;

if (localStorage.getItem("clientes") == null) {
    clientes = [{
            nombreCliente: 'Hugo Alonso',
            apellidoCliente: 'Barahona Amador',
            usuarioCliente: 'ache',
            emailCliente: 'hugoamador@gmail.com',
            passwordCliente: 'Barca1234',
            actual: false,
            compañiasFav: [{}, {}],
            publicacionesFav: [{}, {}]
        },
        {
            nombreCliente: 'Cristian Alejandro',
            apellidoCliente: 'Mena Olivares',
            usuarioCliente: 'kikin',
            emailCliente: 'kikansama@gmail.com',
            passwordCliente: 'kirito145',
            actual: false,
            compañiasFav: [{}, {}],
            publicacionesFav: [{}, {}]
        },
        {
            nombreCliente: 'Sarol Michel',
            apellidoCliente: 'Rodriguez Urbina',
            usuarioCliente: 'michi',
            emailCliente: 'solrodriguez@gmail.com',
            passwordCliente: 'solecito',
            actual: false,
            compañiasFav: [{}, {}],
            publicacionesFav: [{}, {}]
        },
        {
            nombreCliente: 'Fany Julisa',
            apellidoCliente: 'Pinot Rodriguez',
            usuarioCliente: 'flaca',
            emailCliente: 'flacamil@gmail.com',
            passwordCliente: 'instagram',
            actual: false,
            compañiasFav: [{}, {}],
            publicacionesFav: [{}, {}]
        },
    ];
    localStorage.setItem("clientes", JSON.stringify(clientes));
} else {
    clientes = JSON.parse(localStorage.getItem('clientes'));
}

if (localStorage.getItem("empresas") == null) {
    empresas = [{
            nombreEmpresa: 'Diunsa',
            logoEmpresa: 'Diunsa-logo.png',
            tipoEmpresa: 'Comercial',
            nombreUsuario: 'diunsahn',
            password: 'password',
            facebook: 'diunsa@yahoo.com',
            instagram: 'diunsainstagram@yahoo.com',
            twitter: 'diunsatwitter@yahoo.com',
            twitch: 'diunsatwitch@yahoo.com',
            email: 'diunsahn@gmail.hn',
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
            logoEmpresa: 'logo-samsung.jpg',
            tipoEmpresa: 'Tecnologia',
            nombreUsuario: 'samsunghn',
            password: 'password',
            facebook: 'samsung@yahoo.com',
            instagram: 'samsunginstagram@yahoo.com',
            twitter: 'samsungtwitter@yahoo.com',
            twitch: 'samsungtwitch@yahoo.com',
            email: 'samsunghn@gmail.hn',
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
            logoEmpresa: 'logo-lady-lee.jpg',
            tipoEmpresa: 'Electrodomesticos',
            nombreUsuario: 'ladyLeehn',
            password: 'password',
            facebook: 'ladylee@yahoo.com',
            instagram: 'ladyleeinstagram@yahoo.com',
            twitter: 'ladyleetwitter@yahoo.com',
            twitch: 'ladyleetwitch@yahoo.com',
            email: 'ladyleehn@gmail.hn',
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
            logoEmpresa: 'Burger-King-Logo.png',
            tipoEmpresa: 'Comidas Rapidas',
            nombreUsuario: 'burgerkinghn',
            password: 'password',
            facebook: 'burgerking@yahoo.com',
            instagram: 'burgerkinginstagram@yahoo.com',
            twitter: 'burgerkingtwitter@yahoo.com',
            twitch: 'burgerkingtwitch@yahoo.com',
            email: 'burgerkinghn@gmail.hn',
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

function actual() {
    var verifUser = false;
    var verifPass = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].usuarioCliente == document.getElementById("userName").value) {
            if (clientes[i].passwordCliente == document.getElementById("password").value) {
                clientes[i].actual = true;
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
                    empresas[i].actual = true;
                    localStorage.setItem("empresas", JSON.stringify(empresas));

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
            alert("Usuario o Contraseña Valido");
        }

    } else if (verifUser == false || verifPass == false) {
        alert("Usuario o Contraseña Valido");
    }
}

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
})