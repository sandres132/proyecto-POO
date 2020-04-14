var localStorage = window.localStorage;
var empresaSeleccionada;
var empresas;
var feActual = "";

function fechaActual() {
    var fecha;
    fecha = new Date();
    feActual = fecha.getFullYear + "-" + fecha.getMonth + "-" + fecha.getDay;
}

function horaAct() {
    let hora = "";
    f = new Date();
    hora = f.getHours() + ":" + f.getMinutes();
}

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
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 30,
                    precio: 999.99,
                    venta: [{
                        cantidad: 1,
                        fechaCompra: '20/06/20'
                    }],
                    comentarios: [{
                        nomCliente: 'ache',
                        comentCliente: '¡Se ve super la promocion!',
                        fechaComment: '20/06/20'
                    }],
                    pubFavoritaDe: []
                },
                {
                    imagenGanga: '../img/diunsa2.jpg',
                    nombreGanga: '¡Hyper Mega Oferta!',
                    descripcionGanga: 'Por la compra de un celular Huawei Nova 5T ¡Te regalamos un televisor LED de 24" GRATIS!',
                    fechaMax: '28/06/20',
                    horaMax: '20:50',
                    ofertasDisponibles: 45,
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 45,
                    precio: 9000.00,
                    venta: [],
                    comentarios: [],
                    pubFavoritaDe: []
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
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 30,
                    precio: 6300.00,
                    venta: [{
                        cantidad: 1,
                        fechaCompra: '12/06/20'
                    }],
                    comentarios: [{
                        nomCliente: 'kikin',
                        comentCliente: '¡A tiempo llego la promocion!',
                        fechaComment: '20/06/20'
                    }],
                    pubFavoritaDe: []
                },
                {
                    imagenGanga: '../img/samsung2.png',
                    nombreGanga: '¿Aburrido de tu celular?',
                    descripcionGanga: '¡Es tiempo de innovar! Por la compra de tu celular Samsung te llevas gratis hasta $200 en productos Samsung',
                    fechaMax: '07/06/20',
                    horaMax: '23:50',
                    ofertasDisponibles: 205,
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 30,
                    precio: 3500.00,
                    venta: [],
                    comentarios: [],
                    pubFavoritaDe: []
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
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 40,
                    precio: 15000.00,
                    venta: [],
                    comentarios: [],
                    pubFavoritaDe: []
                },
                {
                    imagenGanga: '../img/ladylee3.jpg',
                    nombreGanga: 'Juego de Sala',
                    descripcionGanga: '¡Muebles super comodos super baratos! ¡Ven y aprovecha esta súper oferta!',
                    fechaMax: '05/26/20',
                    horaMax: '8:50',
                    ofertasDisponibles: 15,
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 30,
                    precio: 9999.99,
                    venta: [],
                    comentarios: [],
                    pubFavoritaDe: []
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
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 25,
                    precio: 249.99,
                    venta: [],
                    comentarios: [],
                    pubFavoritaDe: []
                },
                {
                    imagenGanga: '../img/comboHamburger.jpg',
                    nombreGanga: '¡Se vino el Econo Combo!',
                    descripcionGanga: '¡Un refresco, orden de papitas, un sundae, y una hamburguesa Danés!',
                    fechaMax: '06/06/20',
                    horaMax: '21:50',
                    ofertasDisponibles: 405,
                    horaInicio: '7:00',
                    fechaInicio: '28/08/20',
                    porcentDesc: 20,
                    precio: 79.99,
                    venta: [],
                    comentarios: [],
                    pubFavoritaDe: []
                },
            ]
        },
    ];
    localStorage.setItem("empresas", JSON.stringify(empresas));
} else {
    empresas = JSON.parse(localStorage.getItem('empresas'));
}

for (let i = 0; i < empresas.length; i++) {
    if (empresas[i].actual == true) {
        empresaSeleccionada = empresas[i];
        generarNombre();
        generarPerfil();
        generarEditPerfil();
        generarAddCard();
    }
}

function generarNombre() {
    document.getElementById("nombreDeEmpresa").innerHTML = "";
    document.getElementById("nombreDeEmpresa").innerHTML =
        `<a class="nav-link" href="#profile" role="tab" data-toggle="tab"><i class="fa fa-institution"></i>${empresaSeleccionada.nombreEmpresa}</a>`;
}

function generarPublicaciones() {
    let cont = 0;

    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < empresaSeleccionada.publicaciones.length; i++) {
        let coments = "";
        for (let k = 0; k < empresaSeleccionada.publicaciones[i].comentarios.length; k++) {
            coments +=
                `
                    <div class="form-control py-1">
                        <div>
                            <h4><b><i class="fa fa-user-circle-o">${empresaSeleccionada.publicaciones[i].comentarios[k].nomCliente}</i></b></h4>
                        </div>
                        <hr>
                        <div>
                            <h4><i class="fa fa-comments-o"> ${empresaSeleccionada.publicaciones[i].comentarios[k].comentCliente}</i></h4>
                        </div>
                    </div>`;

        }

        document.getElementById("publicaciones").innerHTML +=
            `<div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#ganga${cont}" role="tab" data-toggle="tab">Ganga</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#editPub${cont}" role="tab" data-toggle="tab">Edit Post</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane active" role="tabpanel" id="ganga${cont}">
                            <div class="inner">
                                <img class="card-img-top" src="${empresaSeleccionada.publicaciones[i].imagenGanga}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${empresaSeleccionada.publicaciones[i].nombreGanga}</h4>
                                <p>${empresaSeleccionada.publicaciones[i].descripcionGanga}</p><br>
                                <div id="alertDePub${cont}">
                                
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-sm btn-info" id="verMas${cont}" type="button" data-toggle="collapse" data-target="#contCard${cont}" aria-expanded="false" aria-controls="contCard">
                                    <i class="fa fa-eye"> See more</i>
                                </button>
                                <button class="btn btn-sm btn-info"  id="delPub${cont}" type="button" onclick="alertarCompany('alertDePub${cont}', ${i})">
                                    <i class="fa fa-trash"> Delete</i>
                                </button>
                                <div class="collapse" id="contCard${cont}">
                                    <div class="card-body m-0">
                                        <h4 class="form-control "><b>Time remaining:</b> ${empresaSeleccionada.publicaciones[i].horaMax}</h4>
                                        <h4 class="form-control "><b>Available Offers:</b> ${empresaSeleccionada.publicaciones[i].ofertasDisponibles}</h4>
                                        <h4 class="form-control "><b>Price:</b> ${empresaSeleccionada.publicaciones[i].precio}</h4>
                                        <h4 class="form-control "><b>Posted on:</b> ${empresaSeleccionada.publicaciones[i].fechaInicio}</h4>
                                        <hr>
                                        <h4><b><i class="fa fa-comment-o"></i>Comments</b></h4>
                                        <button class="btn btn-sm btn-info" data-toggle="collapse" data-target="#comPub${cont}" aria-expanded="false" aria-controls="commentPub"><i class="fa fa-commenting-o"> Comment</i></button>
                                        <div class="collapse" id="comPub${cont}">
                                            <div class="card-body m-0">
                                                <div class="form-row py-1">
                                                    <label for="comentarPub"><b><i class="fa fa-commenting-o"> Post</i></b></label>
                                                    <textarea type="text" id="comentarPub${cont}" class="form-control" aria-describedby="comentarPubHelp" rows="3" required></textarea>
                                                    <small id="comentarPubHelp" class="text-muted">Answer to the clients</small>
                                                </small>
                                                <div class="container mb-3">
                                                    <button onclick="comentPub('paraComent${cont}','comentarPub${cont}',${i});" class="btn btn-sm btn-info float-right"><i class="fa fa-commenting-o"> Post</i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr> 
                                        <div id="paraComent${cont}">
                                            ${coments}
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="editPub${cont}">
                        <div class="card-body">
                            <div class="form-control">
                                <div class="form-row py-1">
                                    <label for="imaGanga${cont}"><b><i class="fa fa-image"> Ganga Image</i></b></label>
                                    <input type="file" id="imaGanga${cont}" accept class="form-control" aria-describedby="imaGangaHelp${cont}">
                                    <small id="imaGangaHelp${cont}" class="text-muted"> Publication Photo</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="gangNameEditPublication${cont}"><b><i class="fa fa-edit"> Publication Name</i></b></label>
                                    <input type="text" id="gangNameEditPublication${cont}" class="form-control" aria-describedby="gangNameEditPublicationHelp${cont}">
                                    <small id="gangNameEditPublicationHelp${cont}" class="text-muted">Publication Name</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="pubDescrip${cont}"><b><i class="fa fa-edit"> Publication Description</i></b></label>
                                    <textarea name="" id="pubDescrip${cont}" cols="30" rows="3" class="form-control" aria-describedby="pubDescripHelp${cont}"></textarea>
                                    <small id="pubDescripHelp${cont}" class="text-muted">Information of the publication</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="pubMaxDat${cont}"><b><i class="fa fa-edit"> Max date</i></b></label>
                                    <input type="date" id="pubMaxDat${cont}" class="form-control" aria-describedby="pubMaxDatHelp${cont}">
                                    <small id="pubMaxDatHelp${cont}" class="text-muted">Publication max date</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="pubMaxHour${cont}"><b><i class="fa fa-edit"> Max Hour</i></b></label>
                                    <input type="time" id="pubMaxHour${cont}" class="form-control" aria-describedby="pubMaxHourHelp${cont}">
                                    <small id="pubMaxHourHelp${cont}" class="text-muted">Publication max hour</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="oferDisp${cont}"><b><i class="fa fa-edit"> Offers available</i></b></label>
                                    <input type="number" min="0" value="0" name="" id="oferDisp${cont}" class="form-control" aria-describedby="oferDispHelp${cont}">
                                    <small id="oferDispHelp${cont}" class="text-muted">how many offers available you have</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="pricePub${cont}"><b><i class="fa fa-edit"> Price</i></b></label>
                                    <input type="number" min="0.1" value="1.00" steps="0.1" id="pricePub${cont}" class="form-control" aria-describedby="pricePubHelp${cont}">
                                    <small id="pricePubHelp${cont}" class="text-muted">What is the price?</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="porcent${cont}"><b><i class="fa fa-edit">Discount porcentage</i></b></label>
                                    <input type="number" min="0" max="100" value="0" name="" id="porcent${cont}" class="form-control" aria-describedby="porcentHelp${cont}">
                                    <small id="porcentHelp${cont}" class="text-muted">discount rate</small>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button onclick="modifPub(${cont},${i});" class="btn btn-sm btn-info float-right mr-3 mb-3"><i class="fa fa-save"> Save Changes</i></button>
                        </div>
                    </div>
                </div>
            </div>`;
        cont++;

    }
}
generarPublicaciones();

function modifPub(cont, indicePub) {
    if (document.getElementById("gangNameEditPublication" + cont).value.length != 0 && document.getElementById("pubDescrip" + cont).value.length != 0) {
        var modifPub = {
            imagenGanga: '../img/logo.png',
            nombreGanga: document.getElementById("gangNameEditPublication" + cont).value,
            descripcionGanga: document.getElementById("pubDescrip" + cont).value,
            fechaMax: document.getElementById("pubMaxDat" + cont).value,
            horaMax: document.getElementById("pubMaxHour" + cont).value,
            ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
            horaInicio: horaAct(),
            fechaInicio: fechaActual(),
            porcentDesc: document.getElementById("porcent" + cont).value,
            precio: document.getElementById("pricePub" + cont).value,
            venta: [],
            comentarios: [],
            pubFavoritaDe: []
        }

        for (let i = 0; i < clientes.length; i++) {
            for (let j = 0; j < clientes[i].publicacionesFav.length; j++) {
                if (clientes[i].publicacionesFav[j].nombreGan == empresaSeleccionada.publicaciones[indicePub].nombreGanga) {
                    clientes[i].publicacionesFav[j].nombreGan = modifPub.nombreGanga;
                    break;
                }
            }
        }

        empresaSeleccionada.publicaciones[indicePub].imagenGanga = modifPub.imagenGanga;
        empresaSeleccionada.publicaciones[indicePub].nombreGanga = modifPub.nombreGanga;
        empresaSeleccionada.publicaciones[indicePub].descripcionGanga = modifPub.descripcionGanga;
        empresaSeleccionada.publicaciones[indicePub].fechaMax = modifPub.fechaMax;
        empresaSeleccionada.publicaciones[indicePub].horaMax = modifPub.horaMax;
        empresaSeleccionada.publicaciones[indicePub].ofertasDisponibles = modifPub.ofertasDisponibles;
        empresaSeleccionada.publicaciones[indicePub].porcentDesc = modifPub.porcentDesc;
        empresaSeleccionada.publicaciones[indicePub].precio = modifPub.precio;

        localStorage.setItem('empresas', JSON.stringify(empresas));
        localStorage.setItem('clientes', JSON.stringify(clientes));
        top.location.reload();
    } else if (document.getElementById("gangNameEditPublication" + cont).value.length == 0 || document.getElementById("pubDescrip" + cont).value.length == 0) {
        document.getElementById("alertPubNueva" + cont).innerHTML = "";
        document.getElementById("alertPubNueva" + cont).innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Incomplete or wrong information! , </strong>Please check all the fields.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }
}

function generarPerfil() {
    document.getElementById("profile").innerHTML = "";
    document.getElementById("profile").innerHTML =
        `<div class="card my-5">
            <div class="card-header">
                <div class="card-top-img">
                    <img src="${empresaSeleccionada.logoEmpresa}" alt="Imagen Empresa">           
                </div>
            </div> 
            <div class="card-body">
                <div class="form-control py-0">
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-institution"></i><b>Nombre:</b> ${empresaSeleccionada.nombreEmpresa}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-institution"></i><b>Descripción:</b> ${empresaSeleccionada.tipoEmpresa}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-user-o"></i><b>Nombre de Usuario:</b> ${empresaSeleccionada.nombreUsuario}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publicaciones:</b> ${empresaSeleccionada.publicaciones.length}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${empresaSeleccionada.facebook}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${empresaSeleccionada.instagram}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${empresaSeleccionada.twitter}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${empresaSeleccionada.twitch}</h4>
                        </div>
                    </form>
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${empresaSeleccionada.email}</h4>
                        </div>
                    </form>
                </div>
            </div>        
        </div>`;
}

function generarEditPerfil() {
    document.getElementById("editEmpresa").innerHTML = "";
    document.getElementById("editEmpresa").innerHTML +=
        `<div class="card my-4">
            <div class="card-body p-2">
                <div class="container">
                    <form class="form-control py-0 row mx-0">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="form-row py-1">
                                        <label for="institutionName"><b><i class="fa fa-institution"> Company Name</i></b></label>
                                        <input type="text" id="institutionName" class="form-control" aria-describedby="institutionNameHelp" oninput="validacion('institutionName')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required><small id="institutionNameHelp" class="text-muted ">Ganguitas</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="institutionDescription"><b><i class="fa fa-institution"> Company Description</i></b></label>
                                        <input type="text" id="institutionDescription" class="form-control" aria-describedby="institutionDescriptionHelp" oninput="validacion('institutionDescription')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required><small id="institutionDescriptionHelp" class="text-muted ">What describes your company as example "fast food"</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="direcComp"><b><i class="fa fa-institution"> Company Address</i></b></label>
                                        <input type="text" id="direcComp" class="form-control" aria-describedby="direcCompHelp" oninput="validacion('direcComp')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,50}" required><small id="direcCompHelp" class="text-muted ">Put your company address as an example: Col. Miramontes</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="longComp"><b><i class="fa fa-institution"> Company longitude</i></b></label>
                                        <input type="text" id="longComp" class="form-control" aria-describedby="longCompHelp" oninput="validacion('longComp')" pattern="[0-9.]{5,50}" required><small id="longCompHelp" class="text-muted ">Put your company longitude as an example: 41.40338</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="latComp"><b><i class="fa fa-institution"> Company latitude</i></b></label>
                                        <input type="text" id="latComp" class="form-control" aria-describedby="latCompHelp" oninput="validacion('latComp')" pattern="[0-9.]{5,50}" required><small id="latCompHelp" class="text-muted ">Put your company latitude as an example: 2.17403</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="selectPais"><i class="fa fa-flag-checkered"> Select Country</i></label>
                                        <select class="form-control" id="selectPais" onchange="cambiar("selectPais");">
                                            <option value="Elegir" disabled="disabled" id="AF">Elegir País</option>
                                            <option value="Afganistán" id="AF">Afganistán</option>
                                            <option value="Albania" id="AL">Albania</option>
                                            <option value="Alemania" id="DE">Alemania</option>
                                            <option value="Andorra" id="AD">Andorra</option>
                                            <option value="Angola" id="AO">Angola</option>
                                            <option value="Anguila" id="AI">Anguila</option>
                                            <option value="Antártida" id="AQ">Antártida</option>
                                            <option value="Antigua y Barbuda" id="AG">Antigua y Barbuda</option>
                                            <option value="Antillas holandesas" id="AN">Antillas holandesas</option>
                                            <option value="Arabia Saudí" id="SA">Arabia Saudí</option>
                                            <option value="Argelia" id="DZ">Argelia</option>
                                            <option value="Argentina" id="AR">Argentina</option>
                                            <option value="Armenia" id="AM">Armenia</option>
                                            <option value="Aruba" id="AW">Aruba</option>
                                            <option value="Australia" id="AU">Australia</option>
                                            <option value="Austria" id="AT">Austria</option>
                                            <option value="Azerbaiyán" id="AZ">Azerbaiyán</option>
                                            <option value="Bahamas" id="BS">Bahamas</option>
                                            <option value="Bahrein" id="BH">Bahrein</option>
                                            <option value="Bangladesh" id="BD">Bangladesh</option>
                                            <option value="Barbados" id="BB">Barbados</option>
                                            <option value="Bélgica" id="BE">Bélgica</option>
                                            <option value="Belice" id="BZ">Belice</option>
                                            <option value="Benín" id="BJ">Benín</option>
                                            <option value="Bermudas" id="BM">Bermudas</option>
                                            <option value="Bhután" id="BT">Bhután</option>
                                            <option value="Bielorrusia" id="BY">Bielorrusia</option>
                                            <option value="Birmania" id="MM">Birmania</option>
                                            <option value="Bolivia" id="BO">Bolivia</option>
                                            <option value="Bosnia y Herzegovina" id="BA">Bosnia y Herzegovina</option>
                                            <option value="Botsuana" id="BW">Botsuana</option>
                                            <option value="Brasil" id="BR">Brasil</option>
                                            <option value="Brunei" id="BN">Brunei</option>
                                            <option value="Bulgaria" id="BG">Bulgaria</option>
                                            <option value="Burkina Faso" id="BF">Burkina Faso</option>
                                            <option value="Burundi" id="BI">Burundi</option>
                                            <option value="Cabo Verde" id="CV">Cabo Verde</option>
                                            <option value="Camboya" id="KH">Camboya</option>
                                            <option value="Camerún" id="CM">Camerún</option>
                                            <option value="Canadá" id="CA">Canadá</option>
                                            <option value="Chad" id="TD">Chad</option>
                                            <option value="Chile" id="CL">Chile</option>
                                            <option value="China" id="CN">China</option>
                                            <option value="Chipre" id="CY">Chipre</option>
                                            <option value="Ciudad estado del Vaticano" id="VA">Ciudad estado del Vaticano</option>
                                            <option value="Colombia" id="CO">Colombia</option>
                                            <option value="Comores" id="KM">Comores</option>
                                            <option value="Congo" id="CG">Congo</option>
                                            <option value="Corea" id="KR">Corea</option>
                                            <option value="Corea del Norte" id="KP">Corea del Norte</option>
                                            <option value="Costa del Marfíl" id="CI">Costa del Marfíl</option>
                                            <option value="Costa Rica" id="CR">Costa Rica</option>
                                            <option value="Croacia" id="HR">Croacia</option>
                                            <option value="Cuba" id="CU">Cuba</option>
                                            <option value="Dinamarca" id="DK">Dinamarca</option>
                                            <option value="Djibouri" id="DJ">Djibouri</option>
                                            <option value="Dominica" id="DM">Dominica</option>
                                            <option value="Ecuador" id="EC">Ecuador</option>
                                            <option value="Egipto" id="EG">Egipto</option>
                                            <option value="El Salvador" id="SV">El Salvador</option>
                                            <option value="Emiratos Arabes Unidos" id="AE">Emiratos Arabes Unidos</option>
                                            <option value="Eritrea" id="ER">Eritrea</option>
                                            <option value="Eslovaquia" id="SK">Eslovaquia</option>
                                            <option value="Eslovenia" id="SI">Eslovenia</option>
                                            <option value="España" id="ES">España</option>
                                            <option value="Estados Unidos" id="US">Estados Unidos</option>
                                            <option value="Estonia" id="EE">Estonia</option>
                                            <option value="c" id="ET">Etiopía</option>
                                            <option value="Ex-República Yugoslava de Macedonia" id="MK">Ex-República Yugoslava de Macedonia</option>
                                            <option value="Filipinas" id="PH">Filipinas</option>
                                            <option value="Finlandia" id="FI">Finlandia</option>
                                            <option value="Francia" id="FR">Francia</option>
                                            <option value="Gabón" id="GA">Gabón</option>
                                            <option value="Gambia" id="GM">Gambia</option>
                                            <option value="Georgia" id="GE">Georgia</option>
                                            <option value="Georgia del Sur y las islas Sandwich del Sur" id="GS">Georgia del Sur y las islas Sandwich del Sur</option>
                                            <option value="Ghana" id="GH">Ghana</option>
                                            <option value="Gibraltar" id="GI">Gibraltar</option>
                                            <option value="Granada" id="GD">Granada</option>
                                            <option value="Grecia" id="GR">Grecia</option>
                                            <option value="Groenlandia" id="GL">Groenlandia</option>
                                            <option value="Guadalupe" id="GP">Guadalupe</option>
                                            <option value="Guam" id="GU">Guam</option>
                                            <option value="Guatemala" id="GT">Guatemala</option>
                                            <option value="Guayana" id="GY">Guayana</option>
                                            <option value="Guayana francesa" id="GF">Guayana francesa</option>
                                            <option value="Guinea" id="GN">Guinea</option>
                                            <option value="Guinea Ecuatorial" id="GQ">Guinea Ecuatorial</option>
                                            <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                                            <option value="Haití" id="HT">Haití</option>
                                            <option value="Holanda" id="NL">Holanda</option>
                                            <option selected="true" value="Honduras" id="HN">Honduras</option>
                                            <option value="Hong Kong R. A. E" id="HK">Hong Kong R. A. E</option>
                                            <option value="Hungría" id="HU">Hungría</option>
                                            <option value="India" id="IN">India</option>
                                            <option value="Indonesia" id="ID">Indonesia</option>
                                            <option value="Irak" id="IQ">Irak</option>
                                            <option value="Irán" id="IR">Irán</option>
                                            <option value="Irlanda" id="IE">Irlanda</option>
                                            <option value="Isla Bouvet" id="BV">Isla Bouvet</option>
                                            <option value="Isla Christmas" id="CX">Isla Christmas</option>
                                            <option value="Isla Heard e Islas McDonald" id="HM">Isla Heard e Islas McDonald</option>
                                            <option value="Islandia" id="IS">Islandia</option>
                                            <option value="Islas Caimán" id="KY">Islas Caimán</option>
                                            <option value="Islas Cook" id="CK">Islas Cook</option>
                                            <option value="Islas de Cocos o Keeling" id="CC">Islas de Cocos o Keeling</option>
                                            <option value="Islas Faroe" id="FO">Islas Faroe</option>
                                            <option value="Islas Fiyi" id="FJ">Islas Fiyi</option>
                                            <option value="Islas Malvinas Islas Falkland" id="FK">Islas Malvinas Islas Falkland</option>
                                            <option value="Islas Marianas del norte" id="MP">Islas Marianas del norte</option>
                                            <option value="Islas Marshall" id="MH">Islas Marshall</option>
                                            <option value="Islas menores de Estados Unidos" id="UM">Islas menores de Estados Unidos</option>
                                            <option value="Islas Palau" id="PW">Islas Palau</option>
                                            <option value="Islas Salomón" d="SB">Islas Salomón</option>
                                            <option value="Islas Tokelau" id="TK">Islas Tokelau</option>
                                            <option value="Islas Turks y Caicos" id="TC">Islas Turks y Caicos</option>
                                            <option value="Islas Vírgenes EE.UU." id="VI">Islas Vírgenes EE.UU.</option>
                                            <option value="Islas Vírgenes Reino Unido" id="VG">Islas Vírgenes Reino Unido</option>
                                            <option value="Israel" id="IL">Israel</option>
                                            <option value="Italia" id="IT">Italia</option>
                                            <option value="Jamaica" id="JM">Jamaica</option>
                                            <option value="Japón" id="JP">Japón</option>
                                            <option value="Jordania" id="JO">Jordania</option>
                                            <option value="Kazajistán" id="KZ">Kazajistán</option>
                                            <option value="Kenia" id="KE">Kenia</option>
                                            <option value="Kirguizistán" id="KG">Kirguizistán</option>
                                            <option value="Kiribati" id="KI">Kiribati</option>
                                            <option value="Kuwait" id="KW">Kuwait</option>
                                            <option value="Laos" id="LA">Laos</option>
                                            <option value="Lesoto" id="LS">Lesoto</option>
                                            <option value="Letonia" id="LV">Letonia</option>
                                            <option value="Líbano" id="LB">Líbano</option>
                                            <option value="Liberia" id="LR">Liberia</option>
                                            <option value="Libia" id="LY">Libia</option>
                                            <option value="Liechtenstein" id="LI">Liechtenstein</option>
                                            <option value="Lituania" id="LT">Lituania</option>
                                            <option value="Luxemburgo" id="LU">Luxemburgo</option>
                                            <option value="Macao R. A. E" id="MO">Macao R. A. E</option>
                                            <option value="Madagascar" id="MG">Madagascar</option>
                                            <option value="Malasia" id="MY">Malasia</option>
                                            <option value="Malawi" id="MW">Malawi</option>
                                            <option value="Maldivas" id="MV">Maldivas</option>
                                            <option value="Malí" id="ML">Malí</option>
                                            <option value="Malta" id="MT">Malta</option>
                                            <option value="Marruecos" id="MA">Marruecos</option>
                                            <option value="Martinica" id="MQ">Martinica</option>
                                            <option value="Mauricio" id="MU">Mauricio</option>
                                            <option value="Mauritania" id="MR">Mauritania</option>
                                            <option value="Mayotte" id="YT">Mayotte</option>
                                            <option value="México" id="MX">México</option>
                                            <option value="Micronesia" id="FM">Micronesia</option>
                                            <option value="Moldavia" id="MD">Moldavia</option>
                                            <option value="Mónaco" id="MC">Mónaco</option>
                                            <option value="Mongolia" id="MN">Mongolia</option>
                                            <option value="Montserrat" id="MS">Montserrat</option>
                                            <option value="Mozambique" id="MZ">Mozambique</option>
                                            <option value="Namibia" id="NA">Namibia</option>
                                            <option value="Nauru" id="NR">Nauru</option>
                                            <option value="Nepal" id="NP">Nepal</option>
                                            <option value="Nicaragua" id="NI">Nicaragua</option>
                                            <option value="Níger" id="NE">Níger</option>
                                            <option value="Nigeria" id="NG">Nigeria</option>
                                            <option value="Niue" id="NU">Niue</option>
                                            <option value="Norfolk" id="NF">Norfolk</option>
                                            <option value="Noruega" id="NO">Noruega</option>
                                            <option value="Nueva Caledonia" id="NC">Nueva Caledonia</option>
                                            <option value="Nueva Zelanda" id="NZ">Nueva Zelanda</option>
                                            <option value="Omán" id="OM">Omán</option>
                                            <option value="Panamá" id="PA">Panamá</option>
                                            <option value="Papua Nueva Guinea" id="PG">Papua Nueva Guinea</option>
                                            <option value="Paquistán" id="PK">Paquistán</option>
                                            <option value="Paraguay" id="PY">Paraguay</option>
                                            <option value="Perú" id="PE">Perú</option>
                                            <option value="Pitcairn" id="PN">Pitcairn</option>
                                            <option value="Polinesia francesa" id="PF">Polinesia francesa</option>
                                            <option value="Polonia" id="PL">Polonia</option>
                                            <option value="Portugal" id="PT">Portugal</option>
                                            <option value="Puerto Rico" id="PR">Puerto Rico</option>
                                            <option value="Qatar" id="QA">Qatar</option>
                                            <option value="Reino Unido" id="UK">Reino Unido</option>
                                            <option value="República Centroafricana" id="CF">República Centroafricana</option>
                                            <option value="República Checa" id="CZ">República Checa</option>
                                            <option value="República de Sudáfrica" id="ZA">República de Sudáfrica</option>
                                            <option value="República Democrática del Congo Zaire" id="CD">República Democrática del Congo Zaire</option>
                                            <option value="República Dominicana" id="DO">República Dominicana</option>
                                            <option value="Reunión" id="RE">Reunión</option>
                                            <option value="Ruanda" id="RW">Ruanda</option>
                                            <option value="Rumania" id="RO">Rumania</option>
                                            <option value="Rusia" id="RU">Rusia</option>
                                            <option value="Samoa" id="WS">Samoa</option>
                                            <option value="Samoa occidental" id="AS">Samoa occidental</option>
                                            <option value="San Kitts y Nevis" id="KN">San Kitts y Nevis</option>
                                            <option value="San Marino" id="SM">San Marino</option>
                                            <option value="San Pierre y Miquelon" id="PM">San Pierre y Miquelon</option>
                                            <option value="San Vicente e Islas Granadinas" id="VC">San Vicente e Islas Granadinas</option>
                                            <option value="Santa Helena" id="SH">Santa Helena</option>
                                            <option value="Santa Lucía" id="LC">Santa Lucía</option>
                                            <option value="Santo Tomé y Príncipe" id="ST">Santo Tomé y Príncipe</option>
                                            <option value="Senegal" id="SN">Senegal</option>
                                            <option value="Serbia y Montenegro" id="YU">Serbia y Montenegro</option>
                                            <option value="Sychelles" id="SC">Seychelles</option>
                                            <option value="Sierra Leona" id="SL">Sierra Leona</option>
                                            <option value="Singapur" id="SG">Singapur</option>
                                            <option value="Siria" id="SY">Siria</option>
                                            <option value="Somalia" id="SO">Somalia</option>
                                            <option value="Sri Lanka" id="LK">Sri Lanka</option>
                                            <option value="Suazilandia" id="SZ">Suazilandia</option>
                                            <option value="Sudán" id="SD">Sudán</option>
                                            <option value="Suecia" id="SE">Suecia</option>
                                            <option value="Suiza" id="CH">Suiza</option>
                                            <option value="Surinam" id="SR">Surinam</option>
                                            <option value="Svalbard" id="SJ">Svalbard</option>
                                            <option value="Tailandia" id="TH">Tailandia</option>
                                            <option value="Taiwán" id="TW">Taiwán</option>
                                            <option value="Tanzania" id="TZ">Tanzania</option>
                                            <option value="Tayikistán" id="TJ">Tayikistán</option>
                                            <option value="Territorios británicos del océano Indico" id="IO">Territorios británicos del océano Indico</option>
                                            <option value="Territorios franceses del sur" id="TF">Territorios franceses del sur</option>
                                            <option value="Timor Oriental" id="TP">Timor Oriental</option>
                                            <option value="Togo" id="TG">Togo</option>
                                            <option value="Tonga" id="TO">Tonga</option>
                                            <option value="Trinidad y Tobago" id="TT">Trinidad y Tobago</option>
                                            <option value="Túnez" id="TN">Túnez</option>
                                            <option value="Turkmenistán" id="TM">Turkmenistán</option>
                                            <option value="Turquía" id="TR">Turquía</option>
                                            <option value="Tuvalu" id="TV">Tuvalu</option>
                                            <option value="Ucrania" id="UA">Ucrania</option>
                                            <option value="Uganda" id="UG">Uganda</option>
                                            <option value="Uruguay" id="UY">Uruguay</option>
                                            <option value="Uzbekistán" id="UZ">Uzbekistán</option>
                                            <option value="Vanuatu" id="VU">Vanuatu</option>
                                            <option value="Venezuela" id="VE">Venezuela</option>
                                            <option value="Vietnam" id="VN">Vietnam</option>
                                            <option value="Wallis y Futuna" id="WF">Wallis y Futuna</option>
                                            <option value="Yemen" id="YE">Yemen</option>
                                            <option value="Zambia" id="ZM">Zambia</option>
                                            <option value="Zimbabue" id="ZW">Zimbabue</option>
                                        </select>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="emailComp"><b><i class="fa fa-envelope"> Email</i></b></label>
                                        <input type="email" id="emailComp" class="form-control" aria-describedby="emailHelp" oninput="validacion('emailComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="emailHelp" class="text-muted ">ganguitas@gmail.com</small>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-row py-1">
                                        <label for="facebookComp"><b><i class="fa fa-facebook"> Facebook</i></b></label>
                                        <input type="email" id="facebookComp" class="form-control" aria-describedby="facebookHelp" oninput="validacion('facebookComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="facebookHelp" class="text-muted ">ganguitas_facebook@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="instagramComp"><b><i class="fa fa-instagram"> Instagram</i></b></label>
                                        <input type="email" id="instagramComp" class="form-control" aria-describedby="instagramHelp" oninput="validacion('instagramComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="instagramHelp" class="text-muted ">ganguitas_instagram@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="twitterComp"><b><i class="fa fa-twitter"> Twitter</i></b></label>
                                        <input type="email" id="twitterComp" class="form-control" aria-describedby="twitterHelp" oninput="validacion('twitterComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="twitterHelp" class="text-muted ">ganguitas_twitter@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="twitchComp"><b><i class="fa fa-twitch"> Twitch</i></b></label>
                                        <input type="email" id="twitchComp" class="form-control" aria-describedby="twitchHelp" oninput="validacion('twitchComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="twitchHelp" class="text-muted ">ganguitas_twitch@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1 ">
                                        <label for="userComp"><b><i class="fa fa-user"> User Name</i></b></label>
                                        <input type="text" id="userComp" class="form-control" aria-describedby="userCompHelp" oninput="validarUser('userComp','compañia')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
                                        <small id="userCompHelp" class="text-muted"> Put the name you want as a user</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="passwordComp"><b><i class="fa fa-lock"> Password</i></b></label>
                                        <input type="password" id="passwordComp" class="form-control" aria-describedby="passwordHelp" oninput="validacion('passwordComp')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                        <small id="passwordHelp" class="text-muted">Must be 8-20 characters long, choose a password with at least one capital letter and a number at the end as example Ganguitas1.</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="confirmPassComp"><b><i class="fa fa-lock"> Confirm your password</i></b></label>
                                        <input type="password" id="confirmPassComp" class="form-control" aria-describedby="confirmHelp" oninput="alertar('passwordComp','confirmPassComp');" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                        <small id="confirmHelp" class="text-muted">Repeat your password.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-footer">
                <button onclick="savePerfil();" class="btn btn-sm btn-info float-right mr-2"><i class="fa fa-save"> Save Chanches</i></button>
            </div>
        </div>`;
}

function savePerfil() {
    var modifPerfil = {
        nombreEmpresa: document.getElementById("institutionName"),
        logoEmpresa: '../img/logo.png',
        banner: '../img/logo.png',
        pais: document.getElementById("selectPais"),
        direccion: document.getElementById("direcComp"),
        longitud: document.getElementById("longComp"),
        latitud: document.getElementById("latComp"),
        tipoEmpresa: document.getElementById("institutionDescription"),
        nombreUsuario: document.getElementById("userComp"),
        password: document.getElementById("passwordComp"),
        facebook: document.getElementById("facebookComp"),
        instagram: document.getElementById("instagramComp"),
        twitter: document.getElementById("twitterComp"),
        twitch: document.getElementById("twitchComp"),
        email: document.getElementById("emailComp"),
        actual: true,
        publicaciones: []
    }
    for (let i = 0; i < clientes.length; i++) {
        for (let j = 0; j < clientes[i].companiasFav.length; j++) {
            if (clientes[i].companiasFav[j].nombreEmp == empresaSeleccionada.nombreEmpresa) {
                clientes[i].companiasFav[j].nombreEmp = modifPerfil.nombreEmpresa;
                break;
            }
        }
    }

    empresaSeleccionada.nombreEmpresa = modifPerfil.nombreEmpresa;
    empresaSeleccionada.pais = modifPerfil.pais;
    empresaSeleccionada.direccion = modifPerfil.direccion;
    empresaSeleccionada.longitud = modifPerfil.longitud;
    empresaSeleccionada.latitud = modifPerfil.latitud;
    empresaSeleccionada.tipoEmpresa = modifPerfil.tipoEmpresa;
    empresaSeleccionada.nombreUsuario = modifPerfil.nombreUsuario;
    empresaSeleccionada.password = modifPerfil.password;
    empresaSeleccionada.facebook = modifPerfil.facebook;
    empresaSeleccionada.instagram = modifPerfil.instagram;
    empresaSeleccionada.twitter = modifPerfil.twitter;
    empresaSeleccionada.twitch = modifPerfil.twitch;
    empresaSeleccionada.email = modifPerfil.email;

    localStorage.setItem('empresas', JSON.stringify(empresas));
    localStorage.setItem('clientes', JSON.stringify(clientes));
    top.location.reload();
}

function generarAddCard() {
    document.getElementById("addCard").innerHTML = "";
    document.getElementById("addCard").innerHTML +=
        `<div class="card">
            <div class="card-body my-5">
                <div class="form-control">
                    <div class="form-row py-1">
                        <label for="imaGanga"><b><i class="fa fa-image"> Ganga Image</i></b></label>
                        <input type="file" id="imaGanga" accept class="form-control" aria-describedby="imaGangaHelp">
                        <small id="imaGangaHelp" class="text-muted"> Publication Photo</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="gangaNameCard"><b><i class="fa fa-edit"> Publication Name</i></b></label>
                        <input type="text" id="gangaNameCard" class="form-control" aria-describedby="gangaNameCardHelp" oninput="validacion('gangaNameCard')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9-]+)*$" required>
                        <small id="gangaNameCardHelp" class="text-muted">Publication Name</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="pubDescripAdd"><b><i class="fa fa-edit"> Publication Description</i></b></label>
                        <textarea name="" id="pubDescripAdd" cols="30" rows="3" class="form-control" aria-describedby="pubDescripAddHelp" oninput="validacion('pubDescripAdd')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9-]+)*$" required></textarea>
                        <small id="pubDescripAddHelp" class="text-muted">Information of the publication</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="pubMaxDat"><b><i class="fa fa-edit"> Max date</i></b></label>
                        <input type="date" id="pubMaxDat" value="${feActual}" min="${feActual}" class="form-control" aria-describedby="pubMaxDatHelp" onfocus="validacion('pubMaxDat')" required>
                        <small id="pubMaxDatHelp" class="text-muted">Publication max date</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="pubMaxHour"><b><i class="fa fa-edit"> Max Hour</i></b></label>
                        <input type="time" id="pubMaxHour" value="01:00" min="01:00"class="form-control" aria-describedby="pubMaxHourHelp" onfocus="validacion('pubMaxHour')" required>
                        <small id="pubMaxHourHelp" class="text-muted">Publication max hour</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="oferDisp"><b><i class="fa fa-edit"> Offers available</i></b></label>
                        <input type="number" min="1" value="1" name="" id="oferDisp" class="form-control" aria-describedby="oferDispHelp" onfocus="validacion('oferDisp')" required>
                        <small id="oferDispHelp" class="text-muted">how many offers available you have</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="porcent"><b><i class="fa fa-edit">Discount porcentage</i></b></label>
                        <input type="number" min="1" max="100" value="1" name="" id="porcent" class="form-control" aria-describedby="porcentHelp" onfocus="validacion('porcen')" required>
                        <small id="porcentHelp" class="text-muted">discount rate</small>
                    </div>
                    <div class="form-row py-1">
                        <label for="pubPrecio"><b><i class="fa fa-edit"> Price</i></b></label>
                        <input type="number" id="pubPrecio" value="1.00" min="0.1" step="0.1" class="form-control" aria-describedby="pubPrecioHelp" oninput="validacion('pubPrecio')" pattern="[0-9.]" required></input>
                        <small id="pubPrecioHelp" class="text-muted">Publication Price</small>
                    </div>
                </div>
            </div>
            <div id="alertPubNueva">
            
            </div>
            <div class="card-footer">
                <button onclick="saveCard();" class="btn btn-sm btn-info float-right"><i class="fa fa-save"> post offer</i></button>
            </div>
        </div>`;
}

function alertarCompany(idMsj, indicePub) {
    document.getElementById(idMsj).innerHTML = "";
    document.getElementById(idMsj).innerHTML +=
        `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Are you sure to DELETE this publication?</strong>
            <div class="row">
                <button type="button" class="btn btn-success" data-dismiss="alert" aria-label="Close"></button>
                <button type="button" class="btn btn-danger" onclick="erasePub(${indicePub})" data-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>`;
}

function erasePub(indicePub) {
    for (let i = 0; i < clientes.length; i++) {
        for (let j = 0; j < clientes[i].publicacionesFav.length; j++) {
            if (clientes[i].publicacionesFav[j].nombreGan == empresaSeleccionada.publicaciones[indicePub].nombreGanga) {
                clientes[i].publicacionesFav.splice(j, 1);
                break;
            }
        }
    }

    document.getElementById(idMsj).innerHTML = "";
    empresaSeleccionada.publicaciones.splice(indicePub, 1);
    localStorage.setItem('empresas', JSON.stringify(empresas));
    localStorage.setItem('clientes', JSON.stringify(clientes));
    top.location.reload();
}

function saveCard() {
    if (document.getElementById("gangaNameCard").value.length != 0 && document.getElementById("pubDescripAdd").value.length != 0) {
        var nuevaPub = {
            imagenGanga: '../img/logo.png',
            nombreGanga: document.getElementById("gangaNameCard").value,
            descripcionGanga: document.getElementById("pubDescripAdd").value,
            fechaMax: document.getElementById("pubMaxDat").value,
            horaMax: document.getElementById("pubMaxHour").value,
            ofertasDisponibles: document.getElementById("oferDisp").value,
            horaInicio: horaAct(),
            fechaInicio: fechaActual(),
            porcentDesc: document.getElementById("porcent").value,
            precio: document.getElementById("pubPrecio").value,
            venta: [],
            comentarios: [],
            pubFavoritaDe: []
        }
        empresaSeleccionada.publicaciones.push(nuevaPub);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        top.location.reload();
    } else if (document.getElementById("gangaNameCard").value.length == 0 || document.getElementById("pubDescripAdd").value.length == 0) {
        document.getElementById("alertPubNueva").innerHTML = "";
        document.getElementById("alertPubNueva").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Incomplete or wrong information! , </strong>Please check all the fields.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }
}

function validacion(id) {
    document.getElementById("alertPubNueva").innerHTML = "";
    var elem = document.getElementById(id);
    if (elem.checkValidity()) {
        elem.style.borderColor = "green";
        elem.style.color = "green";
    } else {
        elem.style.borderColor = "red";
        elem.style.color = "red";
    }
}

function cambiar(id) {
    var elem = document.getElementById(id);
    elem.style.borderColor = "green";
    elem.style.color = "green";
}

function validarUser(id, descripcion) {
    var elem = document.getElementById(id);
    if (descripcion == 'cliente') {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].usuarioCliente == elem.value) {
                elem.style.borderColor = "red";
                elem.style.color = "red";
                break;
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
    } else if (descripcion == 'compañia') {
        for (let i = 0; i < empresas.length; i++) {
            if (empresas[i].nombreUsuario == elem.value) {
                elem.style.borderColor = "red";
                elem.style.color = "red";
                break;
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
    }
}

function alertar(id1, id2) {
    var elem1 = document.getElementById(id1);
    var elem2 = document.getElementById(id2);
    if (elem1.value == elem2.value) {
        if (elem2.checkValidity()) {
            elem2.style.borderColor = "green";
            elem2.style.color = "green";
        } else {
            elem2.style.borderColor = "red";
            elem2.style.color = "red";
        }
    } else {
        elem2.style.borderColor = "red";
        elem2.style.color = "red";
    }

}

function logOut() {
    empresaSeleccionada.actual = false;
    localStorage.setItem("empresas", JSON.stringify(empresas));
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