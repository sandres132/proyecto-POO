var localStorage = window.localStorage;
var publicacionSeleccionada;
var clienteSeleccionado;
var clientes;
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

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].actual == true) {
        clienteSeleccionado = clientes[i];
        generarNombre();
        generarModalPerfil();
    }
}

function generarNombre() {
    document.getElementById("nombreDeUsuario").innerHTML = "";
    document.getElementById("nombreDeUsuario").innerHTML =
        `<a href="#" class="nav-link text-white superText" data-target="#profile" data-toggle="modal"><i class="fa fa-user fa-2x"></i> ${clienteSeleccionado.usuarioCliente}</a>`;
}

function generarPublicaciones() {
    let cont = 0;

    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < empresas.length; i++) {
        for (let j = 0; j < empresas[i].publicaciones.length; j++) {
            let coments = "";
            for (let k = 0; k < empresas[i].publicaciones[j].comentarios.length; k++) {
                coments +=
                    `
                    <div class="form-control py-1">
                        <div>
                            <h4><b><i class="fa fa-user-circle-o">${empresas[i].publicaciones[j].comentarios[k].nomCliente}</i></b></h4>
                        </div>
                        <hr>
                        <div>
                            <h4><i class="fa fa-comments-o"> ${empresas[i].publicaciones[j].comentarios[k].comentCliente}</i></h4>
                        </div>
                    </div>`;

            }

            let botonFavEmp = "";
            if (clienteSeleccionado.companiasFav.length >= 1) {
                for (let l = 0; l < clienteSeleccionado.companiasFav.length; l++) {
                    if (clienteSeleccionado.companiasFav[l].nombreEmp == empresas[i].nombreEmpresa) {
                        botonFavEmp =
                            `<button id="empFav${cont}" onclick="empFavorita(${cont},${i});" class="btn btn-sm btn-info fav"><i class="fa fa-heart fa-1x"></i></button>`;
                        break;
                    } else {
                        botonFavEmp =
                            `<button id="empFav${cont}" onclick="empFavorita(${cont},${i});" class="btn btn-sm btn-info"><i class="fa fa-heart fa-1x"></i></button>`;
                    }
                }
            } else {
                botonFavEmp =
                    `<button id="empFav${cont}" onclick="empFavorita(${cont},${i});" class="btn btn-sm btn-info"><i class="fa fa-heart fa-1x"></i></button>`;
            }


            let botonFavPub = "";
            if (clienteSeleccionado.publicacionesFav.length >= 1) {
                for (let l = 0; l < clienteSeleccionado.publicacionesFav.length; l++) {
                    if (clienteSeleccionado.publicacionesFav[l].nombreGan == empresas[i].publicaciones[j].nombreGanga) {
                        botonFavPub =
                            `<button id="pubFav${cont}" onclick="pubFavorita(${cont},${i},${j});" class="btn btn-sm btn-info fav"><i class="fa fa-heart fa-1x"></i></button>`;
                        break;
                    } else {
                        botonFavPub =
                            `<button id="pubFav${cont}" onclick="pubFavorita(${cont},${i},${j});" class="btn btn-sm btn-info"><i class="fa fa-heart fa-1x"></i></button>`;
                    }
                }
            } else {
                botonFavPub =
                    `<button id="pubFav${cont}" onclick="pubFavorita(${cont},${i},${j});" class="btn btn-sm btn-info"><i class="fa fa-heart fa-1x"></i></button>`;
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
                                    <a class="nav-link" href="#detalles${cont}" role="tab" data-toggle="tab">Details</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#empresa${cont}" role="tab" data-toggle="tab">Company</a>
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
                                    <p>${empresas[i].publicaciones[j].descripcionGanga}</p><br> Qualify: <br>
                                    <div class="rw-ui-container" data-title="product rating"></div>
                                </div>
                                <div class="card-footer">
                                    ${botonFavPub}
                                    <button class="btn btn-sm btn-info" data-toggle="collapse" data-target="#compCant${cont}" aria-expanded="false" aria-controls="comprarPub"><i class="fa fa-cart-arrow-down fa-1x"></i></button>
                                    <button class="btn btn-sm btn-info" id="verMas${cont}" type="button" data-toggle="collapse" data-target="#contCard${cont}" aria-expanded="false" aria-controls="contCard">
                                        <i class="fa fa-eye">See more</i>
                                    </button>
                                    <div class="collapse" id="contCard${cont}">
                                        <div class="card-body m-0">
                                            <h4 class="form-control "><b>Time remaining:</b> ${empresas[i].publicaciones[j].horaMax}</h4>
                                            <h4 class="form-control "><b>Available Offers:</b> ${empresas[i].publicaciones[j].ofertasDisponibles}</h4>
                                            <h4 class="form-control "><b>Price:</b> ${empresas[i].publicaciones[j].precio}</h4>
                                            <h4 class="form-control "><b>Posted on:</b> ${empresas[i].publicaciones[j].fechaInicio}</h4>
                                            <hr>
                                            <h4><b><i class="fa fa-comment-o"></i>Comments</b></h4>
                                            <button class="btn btn-sm btn-info" data-toggle="collapse" data-target="#comPub${cont}" aria-expanded="false" aria-controls="commentPub"><i class="fa fa-commenting-o"> Comment</i></button>
                                            <div class="collapse" id="comPub${cont}">
                                                <div class="card-body m-0">
                                                    <div class="form-row py-1">
                                                        <label for="comPub"><b><i class="fa fa-commenting-o"> Post</i></b></label>
                                                        <textarea type="text" id="comentarPub${cont}" class="form-control" aria-describedby="comPubHelp" rows="3" required></textarea>
                                                        <small id="comPubHelp" class="text-muted">Post your opinion</small>
                                                    </div>
                                                    <div class="container mb-3">
                                                        <button onclick="comentPub('paraComent${cont}','comentarPub${cont}',${i},${j});" class="btn btn-sm btn-info float-right"><i class="fa fa-commenting-o"> Post</i></button>
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
                                    <div class="collapse" id="compCant${cont}">
                                        <div class="card-body m-0">
                                            <div class="form-group py-1">
                                                <label for="cantComprar" class="float-left"><b><i class="fa fa-cart-arrow-down"> Quantity to buy</i></b></label>
                                                <input type="number" value="0" min="0" id="cantComprar${cont}" class="form-control" aria-describedby="cantComprarHelp" required>
                                                <small id="cantComprarHelp" class="text-muted float-left">Put the quantity you are going to buy</small>
                                                <br>
                                                <div id="alertaComprar${cont}">

                                                </div>
                                                <div class="container mb-3">
                                                    <button onclick="aComprar('cantComprar${cont}','alertaComprar${cont}',${i},${j});" class="btn btn-sm btn-info float-right"><i class="fa fa-cart-plus fa-1x"> Add</i></button>
                                                </div>
                                            </div>
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
                                        <h4 class="form-control"><b>Title:</b> ${empresas[i].publicaciones[j].nombreGanga}</h4>
                                        <h4 class="form-control"><b>Description:</b> ${empresas[i].publicaciones[j].descripcionGanga}</h4>
                                        <h4 class="form-control"><b>Start date:</b> ${empresas[i].publicaciones[j].fechaInicio}</h4>
                                        <h4 class="form-control"><b>Max Date:</b> ${empresas[i].publicaciones[j].fechaMax}</h4>
                                        <h4 class="form-control"><b>Max hour:</b> ${empresas[i].publicaciones[j].horaMax}</h4>
                                        <h4 class="form-control"><b>Company:</b> ${empresas[i].nombreEmpresa}</h4>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button onmouseover="generaraModalTarjeta(${i},${j});" type="button" class="btn btn-info"  data-toggle="modal" data-target="#tarjeta"><i class="fa fa-save"> Save Card</i></button>
                                </div>
                            </div>
                            <div class="tab-pane" role="tabpanel" id="empresa${cont}">
                                <div class="inner">
                                    <img class="card-img-top" src="${empresas[i].logoEmpresa}" alt="">
                                </div>
                                <div class="card-body">
                                    <div class="form-control">
                                        <h4 class="form-control"><i class="fa fa-institution"></i><b>Name:</b> ${empresas[i].nombreEmpresa}</h4>
                                        <h4 class="form-control"><i class="fa fa-institution"></i><b>Description:</b> ${empresas[i].tipoEmpresa}</h4>
                                        <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publications:</b> ${empresas[i].publicaciones.length}</h4>
                                        <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${empresas[i].facebook}</h4>
                                        <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${empresas[i].instagram}</h4>
                                        <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${empresas[i].twitter}</h4>
                                        <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${empresas[i].twitch}</h4>
                                        <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${empresas[i].email}</h4>
                                        <div class="form-control">
                                            <div class="rw-ui-container" data-title="company rating"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer" >
                                    ${botonFavEmp}
                                    <a href="#" class="log btn btn-sm btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-map-marker fa-2x"></i> Nearby Premises</a>
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

function generarModalCompras() {
    let lista = "";
    let contador = 0;
    let montoTot = 0;
    for (let i = 0; i < clienteSeleccionado.comprar.length; i++) {
        montoTot += clienteSeleccionado.comprar[i].monto;
        lista +=
            `
            <div class="container">
                <div class="form-control ">
                    <h5><b>Article Name: </b>${clienteSeleccionado.comprar[i].aComprar}</h5>
                    <h5><b>Quantity of items: </b>${clienteSeleccionado.comprar[i].cant}</h5>
                    <h5><b>Price item: </b>${clienteSeleccionado.comprar[i].precioArt}</h5>
                    <h5><b>Amount of items: </b>${clienteSeleccionado.comprar[i].monto}</h5>
                    <button class="btn btn-info" onclick="borrarCompra('${contador}');"><i class="fa fa-trash-o"> Delete</i></button>
                </div>
            </div>`;
        contador++;
    }

    document.getElementById("modalCompras").innerHTML = "";
    document.getElementById("modalCompras").innerHTML +=
        `<div id="compras" class="modal fade " data-backdrop="position-static" tabindex="-1" role="dialog" aria-labelledby="contentForm" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header style">
                        <h2 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Hi ${clienteSeleccionado.usuarioCliente}!</h2>
                        <button class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h4>Here are your products!</h4>
                        <div id="mostrarProd">
                            <div class="row">
                                ${lista}
                            </div>
                        </div>
                        <h4>Total amount: ${montoTot}</h4>
                        <div id="alerModalComp">
                        
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="buy" class="btn btn-info" onclick="comprarPub();"><i class="fa fa-credit-card"> Make the purchase</i></button>
                    </div>
                </div>
            </div>
        </div>`;
}
generarModalCompras();

function generarModalPerfil() {
    let publicacionesFavoritas = "";
    let empresasFavoritas = "";
    let historialComp = "";

    for (let i = 0; i < clienteSeleccionado.publicacionesFav.length; i++) {
        publicacionesFavoritas +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Ganga:</b> ${clienteSeleccionado.publicacionesFav[i].nombreGan}</h4>
                </div>
            </form>`;

    }

    for (let i = 0; i < clienteSeleccionado.companiasFav.length; i++) {
        empresasFavoritas +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Company:</b> ${clienteSeleccionado.companiasFav[i].nombreEmp}</h4>
                </div>
            </form>`;

    }

    for (let i = 0; i < clienteSeleccionado.comprasHechas.length; i++) {
        historialComp +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-money"></i><b> Article name:</b> ${clienteSeleccionado.comprasHechas[i].nomCompra}</h4>
                    <h4 class="form-control"><i class="fa fa-calendar-check-o"></i><b> Date of purchase ${i}:</b> ${clienteSeleccionado.comprasHechas[i].fechaCompra}</h4>
                    <h4 class="form-control"><i class="fa fa-money"></i><b> Quantity:</b> ${clienteSeleccionado.comprasHechas[i].cant}</h4>
                </div>
            </form>`;

    }

    document.getElementById("modalUs").innerHTML = "";
    document.getElementById("modalUs").innerHTML +=
        `<div id="profile" class="modal fade " data-backdrop="position-static" tabindex="-1" role="dialog" aria-labelledby="contentForm" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header style">
                        <ul class="nav nav-tabs modal-header-tabs">
                            <li class="nav-item card-header-tabs">
                                <a class="nav-link" href="#userProfile" role="tab" data-toggle="tab">${clienteSeleccionado.usuarioCliente}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#edit" role="tab" data-toggle="tab">Edit Profile</a>
                            </li>
                        </ul>
                        <button class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="tab-content">
                            <div class="tab-pane active" role="tabpanel" id="userProfile">
                                <div class="inner">
                                    <img class="card-img-top" src="${clienteSeleccionado.fotoCliente}" alt="foto cliente">
                                </div>
                                <div class="card-body">
                                    <div class="form-control py-0">
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-user"></i><b> First Name:</b> ${clienteSeleccionado.nombreCliente}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-user"></i><b> Last Name:</b> ${clienteSeleccionado.apellidoCliente}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-calendar-check-o"></i><b> Date of birth:</b> ${clienteSeleccionado.fechaNacimiento}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-user-circle"></i><b> Username:</b> ${clienteSeleccionado.usuarioCliente}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-envelope"></i><b> Email:</b> ${clienteSeleccionado.emailCliente}</h4>
                                        </form>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-sm btn-info" id="favCompanies" type="button" data-toggle="collapse" data-target="#contCompanies" aria-expanded="false" aria-controls="contCompanies">Favorites <i class="fa fa-institution"></i></button>
                                    <button class="btn btn-sm btn-info" id="favProducts" type="button" data-toggle="collapse" data-target="#contProducts" aria-expanded="false" aria-controls="contProducts"> Favorites <i class="fa fa-shopping-bag"></i>
                                    </button>
                                    <button class="btn btn-sm btn-info" id="histoDeComp" type="button" data-toggle="collapse" data-target="#histComp" aria-expanded="false" aria-controls="histComp"><i class="fa fa-history"></i> Shopping history</button>
                                    <div class="collapse" id="contProducts">
                                        <div class="card-body m-0">
                                            <hr>
                                            <h4 class="form-group"><b>Favorite Products</b></h4>
                                            <hr>
                                            <div id="verPubFav">
                                                ${publicacionesFavoritas}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collapse" id="contCompanies">
                                        <div class="card-body m-0">
                                            <hr>
                                            <h4 class="form-group"><b>Favorite Companies</b></h4>
                                            <hr>
                                            <div id="verEmpFav">
                                                ${empresasFavoritas}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collapse" id="histComp">
                                        <div class="card-body m-0">
                                            <hr>
                                            <h4 class="form-group"><b>Shopping history</b></h4>
                                            <hr>
                                            <div id="verHistComp">
                                                ${historialComp}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" role="tabpanel" id="edit">
                                <div class="card-body mb-0 pb-0">
                                    <form class="form-control py-0">
                                        <fieldset>
                                            <form class="form-control">
                                                <div class="form-group">
                                                    <i class="fa fa-image"> User Image</i>
                                                    <input class="form-control" type="file" accept="image/*" id="imgGanga">
                                                    <small id="institutionImageHelp" class="text-muted">User Photo</small>
                                                </div>
                                            </form>
                                            <div class="form-row py-1">
                                                <label for="firstName"><b><i class="fa fa-edit"> First Name</i></b></label>
                                                <input type="text" id="firstName" class="form-control" aria-describedby="firstNameHelp" oninput="validacion('firstName')" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required>
                                                <small id="firstNameHelp" class="text-muted"> Julian Andres</small>
                                            </div>
                                            <div class="form-row py-1">
                                                <label for="lastName"><b><i class="fa fa-edit"> Last Name</i></b></label>
                                                <input type="text" id="lastName" class="form-control" aria-describedby="lastNameHelp" oninput="validacion('lastName')" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,20}" required>
                                                <small id="lastNameHelp" class="text-muted">Alvarez Mendoza</small>
                                            </div>
                                            <div class="form-row py-1">
                                                <label for="emailUser"><b><i class=" fa fa-envelope"> Email</i></b></label>
                                                <input type="email" id="emailUser" class="form-control" aria-describedby="emailHelp" oninput="validacion('emailUser')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                                <small id="emailHelp" class="text-muted ">andresjulian@yahoo.es</small>
                                            </div>
                                            <div class="form-row py-1 ">
                                                <label for="dateUser"><b><i class="fa fa-calendar-times-o"> Date of Birth</i></b></label>
                                                <input type="date" min="1920-01-01" max="2008-12-31" value="1980-01-01" id="dateUser" class="form-control " aria-describedby="datelHelp" onfocus="validacion('dateUser')" required>
                                                <small id="dateHelp" class="text-muted">Put your birth date here</small>
                                            </div>
                                            <div class="form-row py-1">
                                                <label for="usName"><b><i class="fa fa-user"> User Name</i></b></label>
                                                <input type="text" id="usName" class="form-control" aria-describedby="userHelp" oninput="validarUser('usName')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
                                                <small id="userHelp" class="text-muted">Put the name you want as a user</small>
                                            </div>
                                            <div class="form-row py-1 ">
                                                <label for="passwordUser"><b><i class="fa fa-lock "> Password</i></b></label>
                                                <input type="password" id="passwordUser" class="form-control" aria-describedby="passwordHelp" oninput="validacion('passwordUser')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                                <small id="passwordHelp" class="text-muted">Must be 8-20 characters long, choose a password with at least one capital letter and a number at the end as example Ganguitas1.</small>
                                            </div>
                                            <div class="form-row py-1 ">
                                                <label for="confirmPassUser"><b><i class="fa fa-lock "> Confirm your password</i></b></label>
                                                <input type="password" id="confirmPassUser" class="form-control" aria-describedby="confirmHelp" oninput="alertar('passwordUser','confirmPassUser');" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                                <small id="confirmHelp" class="text-muted ">Repeat your password.</small>
                                            </div>
                                        </fieldset>
                                        <div id="alert">
                                        
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" onclick="modifUser();" class="btn btn-info">Saves Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

function modifUser() {
    if (verifUser && verifPass && document.getElementById("lastName").value.length != 0 && document.getElementById("emailUser").value.length != 0 && document.getElementById("firstName").value.length != 0) {
        var nuevoCliente = {
            nombreCliente: document.getElementById("firstName").value,
            apellidoCliente: document.getElementById("lastName").value,
            usuarioCliente: document.getElementById("usName").value,
            emailCliente: document.getElementById("emailUser").value,
            passwordCliente: document.getElementById("passwordUser").value,
            actual: true,
            fechaNacimiento: document.getElementById("dateUser").value,
            fotoCliente: "../img/user-logo-png-4.png",
            companiasFav: [],
            publicacionesFav: []
        }
        clientes.push(nuevoCliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        top.location.reload();
    } else if (verifUser == false || verifPass == false || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("firstName").value.length == 0) {
        document.getElementById("alert").innerHTML = "";
        document.getElementById("alert").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Incomplete! , </strong>Please fill all the fields.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }
}

function validacion(id) {
    var elem = document.getElementById(id);
    if (elem.checkValidity()) {
        elem.style.borderColor = "green";
        elem.style.color = "green";
    } else {
        elem.style.borderColor = "red";
        elem.style.color = "red";
    }
}

function alertar(id1, id2) {
    var elem1 = document.getElementById(id1);
    var elem2 = document.getElementById(id2);
    if (elem1.value == elem2.value) {
        if (elem2.checkValidity()) {
            verifPass = true;
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

function validarUser(id) {
    var elem = document.getElementById(id);

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].usuarioCliente == elem.value) {
            elem.style.borderColor = "red";
            elem.style.color = "red";
            verifUser = true;
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

function logOut() {
    for (let j = 0; j < clienteSeleccionado.comprar.length; j++) {
        clienteSeleccionado.comprar.splice(j, 1);
    }

    localStorage.setItem('clientes', JSON.stringify(clientes));
    clienteSeleccionado.actual = false;
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

function pubFavorita(conta, indiceEmp, indicePub) {
    var verif = false;
    var indiceEncontrado;

    for (let i = 0; i < clienteSeleccionado.publicacionesFav.length; i++) {
        if (clienteSeleccionado.publicacionesFav[i].nombreGan == empresas[indiceEmp].publicaciones[indicePub].nombreGanga) {
            verif = true;
            indiceEncontrado = i;
            break;
        }
    }

    if (verif == false) {
        let añadir = {
            nombreGan: empresas[indiceEmp].publicaciones[indicePub].nombreGanga,
        }
        let nuevaPubFavD = {
            cliente: clienteSeleccionado.usuarioCliente,
            fechaSelecFav: fechaActual(),
            indiceDePub: indicePub
        }

        empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe.push(nuevaPubFavD);
        clienteSeleccionado.publicacionesFav.push(añadir);
        localStorage.setItem("clientes", JSON.stringify(clientes));
        localStorage.setItem("empresas", JSON.stringify(empresas));
        document.getElementById("verPubFav").innerHTML +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Ganga:</b> ${clienteSeleccionado.publicacionesFav[clienteSeleccionado.publicacionesFav.length-1].nombreGan}</h4>
                </div>
            </form>`;

        document.getElementById(`pubFav${conta}`).classList.add("fav");
    } else {
        for (let k = 0; k < empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe.length; k++) {
            if (empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe[k].indiceDePub == indicePub) {
                empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe.splice(k, 1);
                break;
            }
        }
        clienteSeleccionado.publicacionesFav.splice(indiceEncontrado, 1);
        document.getElementById(`pubFav${conta}`).classList.remove("fav");
        localStorage.setItem("clientes", JSON.stringify(clientes));
        localStorage.setItem("empresas", JSON.stringify(empresas));
        top.location.reload();
    }
}

function empFavorita(cont, indiceEmp) {
    var verif = false;
    var indiceEncontrado;

    for (let i = 0; i < clienteSeleccionado.companiasFav.length; i++) {
        if (clienteSeleccionado.companiasFav[i].nombreEmp == empresas[indiceEmp].nombreEmpresa) {
            verif = true;
            indiceEncontrado = i;
            break;
        }
    }

    if (verif == false) {
        let añadir = {
            nombreEmp: empresas[indiceEmp].nombreEmpresa,
        }
        clienteSeleccionado.companiasFav.push(añadir);
        localStorage.setItem("clientes", JSON.stringify(clientes));
        document.getElementById("verEmpFav").innerHTML +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Company:</b> ${clienteSeleccionado.companiasFav[clienteSeleccionado.companiasFav.length-1].nombreEmp}</h4>
                </div>
            </form>`;

        document.getElementById(`empFav${cont}`).classList.add("fav");
        top.location.reload();
    } else {
        clienteSeleccionado.companiasFav.splice(indiceEncontrado, 1);
        document.getElementById(`empFav${cont}`).classList.remove("fav");
        localStorage.setItem("clientes", JSON.stringify(clientes));
        top.location.reload();
    }
}

function aComprar(idInput, idAlert, indiceEmp, indicePub) {
    let elem = document.getElementById(idInput).value;
    let pub = empresas[indiceEmp].publicaciones[indicePub];
    if (elem != 0) {
        let porComprar = {
            aComprar: pub.nombreGanga,
            fechaCompra: fechaActual(),
            cant: elem,
            precioArt: pub.precio,
            monto: pub.precio * elem,
            indEmp: indiceEmp,
            indPub: indicePub
        }
        clienteSeleccionado.comprar.push(porComprar);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        document.getElementById(idInput).value = 0;
        generarModalCompras();
    } else {
        document.getElementById(idAlert).innerHTML = "";
        document.getElementById(idAlert).innerHTML +=
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Choose another quantity!</strong> You should check the field above.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }
}

function borrarCompra(indiceCompra) {
    clienteSeleccionado.comprar.splice(indiceCompra, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    document.getElementById("mostrarProd").innerHTML = "";
    document.getElementById("alerModalComp").innerHTML = "";
    document.getElementById("alerModalComp").innerHTML +=
        `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Delete successfull!</strong> go and look for more offers!.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
}

function comprarPub() {
    if (clienteSeleccionado.comprar.length >= 1) {
        for (let i = 0; i < clienteSeleccionado.comprar.length; i++) {
            let nuevaVenta = {
                cantidad: clienteSeleccionado.comprar[i].cant,
                fechaCompra: fechaActual()
            }
            let nuevaCompra = {
                nomCompra: clienteSeleccionado.comprar[i].aComprar,
                fechaCompra: fechaActual(),
                cant: clienteSeleccionado.comprar[i].cant,
                precioArticulo: clienteSeleccionado.comprar[i].precioArt,
                montoComprado: clienteSeleccionado.comprar[i].monto
            }
            empresas[clienteSeleccionado.comprar[i].indEmp].publicaciones[clienteSeleccionado.comprar[i].indPub].venta.push(nuevaVenta);
            clienteSeleccionado.comprasHechas.push(nuevaCompra);

            for (let j = 0; j < clienteSeleccionado.comprar.length; j++) {
                clienteSeleccionado.comprar.splice(j, 1);
            }

            localStorage.setItem('clientes', JSON.stringify(clientes));
            localStorage.setItem('empresas', JSON.stringify(empresas));
            document.getElementById("mostrarProd").innerHTML = "";
            document.getElementById("alerModalComp").innerHTML = "";
            document.getElementById("alerModalComp").innerHTML +=
                `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Thanks for your purchase!</strong>  go and look for more offers!.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        }
    } else {
        document.getElementById("alerModalComp").innerHTML = "";
        document.getElementById("alerModalComp").innerHTML +=
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>No products!</strong> go choose what you want.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }

}

function comentPub(idParComent, id, indiceEmp, indicePub) {
    if (document.getElementById(id).value.length != 0) {
        let nuevoComenta = {
            nomCliente: clienteSeleccionado.usuarioCliente,
            comentCliente: document.getElementById(id).value,
            fechaComment: fechaActual()
        }
        empresas[indiceEmp].publicaciones[indicePub].comentarios.push(nuevoComenta);
        localStorage.setItem('empresas', JSON.stringify(empresas));

        document.getElementById(idParComent).innerHTML +=
            `
            <div class="form-control py-1">
                <div>
                    <h4><b><i class="fa fa-user-circle-o">${nuevoComenta.nomCliente}</i></b></h4>
                </div>
                <hr>
                <div>
                    <h4><i class="fa fa-comments-o"> ${nuevoComenta.comentCliente}</i></h4>
                </div>
            </div>`;

        document.getElementById(id).value = "";
    }
}

function generarModalTarjeta(indiceEmp, indicePub) {
    let pub = empresas[indiceEmp].publicaciones[indicePub];
    document.getElementById("modalTarjeta").innerHTML = "";
    document.getElementById("modalTarjeta").innerHTML +=
        `<div id="tarjeta" class="modal fade" data-backdrop="position-static" tabindex="-1" role="dialog" aria-labelledby="contentForm" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content modalTarjeta">
                    <div class="modal-body imag" style="background-image: url(${pub.imagenGanga});">
                        <div class="card-header">
                            <div>
                                <div class="container mb-4">
                                    <div class="row">
                                        <div class="formaTrans col">
                                            <img src="../img/QR.png" class="card-img">
                                        </div>
                                        <div class="formaTrans col">
                                            <div class="porcentaje">
                                                <h1 style="align-content: ">${pub.porcentDesc}%</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container textTarjeta">
                                    <div class="card-body p-2">
                                        <div class="container">
                                            <div class="row">
                                                <h1 class="card-title">${pub.nombreGanga}</h1>
                                            </div>
                                        </div>
                                        <h4 class="card-text">${pub.descripcionGanga}</h4><br>
                                        <h4 class="card-text">Published on ${pub.fechaInicio}</h4><br>
                                        <h4 class="card-text">Offer lasts until ${pub.fechaMax}!</h4><br>
                                        <h4 class="card-text">Remaining offers ${pub.ofertasDisponibles}</h4><br>
                                        <h4 class="card-text">Offer price ${pub.precio}</h4><br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer py-2">
                        <button type="button" class="btn btn-info" onclick="guardarTarjeta();" data-dismiss="modal" aria-label="Close"><i class="fa fa-save"></i>Save</button>
                        <button class="btn btn-info " data-dismiss="modal" aria-label="Close">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
}

function guardarTarjeta() {
    alert("I Keep Lying Card");
}

function fechaActual() {
    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    return fecha;
}

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

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