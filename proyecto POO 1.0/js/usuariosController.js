var localStorage = window.localStorage;
var empresaSeleccionada;
var publicacionSeleccionada;
var clienteSeleccionado;
var clientes;

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
                    descripcionGanga: '¿Aburrido de ver televisión en pantalla pequena? ¡Ven y aprovecha esta súper oferta!, televisor SMART Samsung de 65"',
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
                                    <button id="pubFav${cont}" onclick="pubFavorita(${cont},${i},${j});" class="btn btn-sm btn-info"><i class="fa fa-heart fa-1x"></i></button>
                                    <button class="btn btn-sm btn-info"><i class="fa fa-cart-plus fa-1x"></i></button>
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
                                        <h4 class="form-control"><b>Empresa:</b> ${empresas[i].nombreEmpresa}</h4>
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
                                    <div class="form-control">
                                    <div class="rw-ui-container" data-title="company rating"></div>
                                </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button id="empFav${cont}" onclick="empFavorita(${cont},${i});" class="btn btn-sm btn-info"><i class="fa fa-heart fa-1x"></i></button>
                                    <a href="#" class="log btn btn-sm btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-map-marker fa-2x"></i> Locales
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

function generarModalPerfil() {
    let publicacionesFavoritas = "";
    let empresasFavoritas = "";

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
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Empresa:</b> ${clienteSeleccionado.companiasFav[i].nombreEmp}</h4>
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
                                                <h4 class="form-control"><i class="fa fa-user"></i><b> Nombre:</b> ${clienteSeleccionado.nombreCliente}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-user"></i><b> Apellido:</b> ${clienteSeleccionado.apellidoCliente}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-user-circle"></i><b> Nombre de Usuario:</b> ${clienteSeleccionado.usuarioCliente}</h4>
                                        </form>
                                        <form class="form-control">
                                                <h4 class="form-control"><i class="fa fa-envelop"></i><b> Email:</b> ${clienteSeleccionado.emailCliente}</h4>
                                        </form>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-sm btn-info" id="favCompanies" type="button" data-toggle="collapse" data-target="#contCompanies" aria-expanded="false" aria-controls="contCompanies"><i class="fa fa-institution"></i> Favorites
                                        Companies</button>
                                    <button class="btn btn-sm btn-info" id="favProducts" type="button" data-toggle="collapse" data-target="#contProducts" aria-expanded="false" aria-controls="contProducts">
                                        <i class="fa fa-eye"> Favorite Products</i>
                                    </button>
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
                                </div>
                            </div>
                            <div class="tab-pane" role="tabpanel" id="edit">
                                <div class="card-body py-0">
                                    <div class="form-control py-0">
                                        <form class="form-control">
                                            <div class="form-group">
                                                <i class="fa fa-image"> User Image</i>
                                                <input class="form-control" type="file" accept="image/*" id="imgGanga">
                                                <small id="institutionImageHelp" class="text-muted">User Photo</small>
                                            </div>
                                        </form>
                                        <form class="form-control">
                                            <div class="form-group py-0">
                                                <i class="fa fa-edit"> First Name</i>
                                                <input type="text" id="firstName" class="form-control" aria-describedby="firstNameHelp">
                                                <small id="firstNameHelp" class="text-muted">Andres Julian</small>
                                            </div>
                                        </form>
                                        <form class="form-control">
                                            <div class="form-group py-0">
                                                <i class="fa fa-edit"> Last Name</i>
                                                <input type="text" id="lastName" class="form-control" aria-describedby="lastNameHelp">
                                                <small id="lastNameHelp" class="text-muted">Alvarez Mendoza</small>
                                            </div>
                                        </form>
                                        <form class="form-control">
                                            <div class="form-group">
                                                <i class="fa fa-envelope"> User name</i>
                                                <input type="text" id="usuario" class="form-control" aria-describedby="usuarioHelp">
                                                <small id="emailHelp" class="text-muted">
                                                    put the name you want as a user
                                                </small>
                                            </div>
                                        </form>
                                        <form class="form-control">
                                            <div class="form-group py-0">
                                                <i class="fa fa-lock"> New Password</i>
                                                <input type="password" id="newPassword" class="form-control" aria-describedby="newPasswordHelp" autocomplete="on">
                                                <small id="newPasswordHelp" class="text-muted">Must be 8-20 characters
                                                    long.</small>
                                            </div>
                                        </form>
                                        <form class="form-control">
                                            <div class="form-group py-0">
                                                <i class="fa fa-lock"> Confirm New Password</i>
                                                <input type="password" id="confNewPassword" class="form-control" aria-describedby="confPasswordHelp" autocomplete="on">
                                                <small id="confPasswordHelp" class="text-muted">Must be the same as new
                                                    password.</small>
                                            </div>
                                        </form>
                                        <form class="form-control">
                                            <div class="form-group py-0">
                                                <i class="fa fa-envelope"> Email</i>
                                                <input type="email" id="email" class="form-control" aria-describedby="emailHelp">
                                                <small id="emailHelp" class="text-muted">andresjulian@yahoo.es</small>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input onClick="guardarCambios();" class="btn btn-info" type="button" value="Save Changes">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

function guardarCambios() {
    var verif = true;
    if (document.getElementById("firstName").value != null) {
        clienteSeleccionado.nombreCliente = document.getElementById("firstName").value;
    }
    if (document.getElementById("lastName").value != null) {
        clienteSeleccionado.apellidoCliente = document.getElementById("lastName").value;
    }
    if (document.getElementById("usuario").value != null) {
        clienteSeleccionado.usuarioCliente = document.getElementById("usuario").value;
    }
    if (document.getElementById("newPassword").value != null) {
        if (document.getElementById("confNewPassword").value == document.getElementById("newPassword").value) {
            clienteSeleccionado.passwordCliente = document.getElementById("confNewPassword").value;
        } else {
            alert("Put the same password");
            verif = false;
        }
    }
    if (document.getElementById("email").value != null) {
        clienteSeleccionado.emailCliente = document.getElementById("email").value;
    }
    if (verif) {
        localStorage.setItem("clientes", JSON.stringify(clientes));
        top.location.reload();
    }
}

function logOut() {
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

        clienteSeleccionado.publicacionesFav.push(añadir);
        localStorage.setItem("clientes", JSON.stringify(clientes));
        document.getElementById("verPubFav").innerHTML +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Ganga:</b> ${clienteSeleccionado.publicacionesFav[clienteSeleccionado.publicacionesFav.length-1].nombreGan}</h4>
                </div>
            </form>`;

        document.getElementById(`pubFav${conta}`).classList.add("fav");
    } else {
        clienteSeleccionado.publicacionesFav.splice(indiceEncontrado, 1);
        document.getElementById(`pubFav${conta}`).classList.remove("fav");
        localStorage.setItem("clientes", JSON.stringify(clientes));
        top.location.reload();
    }
}

function empFavorita(cont, indiceEmp) {
    var verif = false;
    var indiceEncontrado;
    console.log(empresas[indiceEmp].nombreEmpresa);
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
        console.log(añadir);
        clienteSeleccionado.companiasFav.push(añadir);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        document.getElementById("verEmpFav").innerHTML +=
            `
            <form class="form-control">
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Empresa:</b> ${clienteSeleccionado.companiasFav[clienteSeleccionado.companiasFav.length-1].nombreEmp}</h4>
                </div>
            </form>`;

        document.getElementById(`empFav${cont}`).classList.add("fav");
    } else {
        clienteSeleccionado.companiasFav.splice(indiceEncontrado, 1);
        document.getElementById(`empFav${cont}`).classList.remove("fav");
        localStorage.setItem("empresas", JSON.stringify(empresas));
        top.location.reload();
    }
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