var localStorage = window.localStorage;
var empresaSeleccionada;
var fecha;
var empresas;

function fechaActual() {
    fecha = new Date();
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

for (let i = 0; i < empresas.length; i++) {
    if (empresas[i].actual == true) {
        empresaSeleccionada = empresas[i];
        generarNombre();
        generarPerfil();
        generarEditPerfil();
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
                                <img class="card-img-top" src="${empresaSeleccionada.publicaciones[i].imagenGanga}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${empresaSeleccionada.publicaciones[i].nombreGanga}</h4>
                                <p>${empresaSeleccionada.publicaciones[i].descripcionGanga}</p>
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
                                        <h4 class="form-control "><b>Tiempo restante:</b> ${empresaSeleccionada.publicaciones[i].horaMax}</h4>
                                        <h4 class="form-control "><b>Ofertas Disponibles:</b> ${empresaSeleccionada.publicaciones[i].ofertasDisponibles}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="detalles${cont}">
                            <div class="inner">
                                <img class="card-QR" src="../img/QR.png" alt="">
                                <img class="card-QR" src="${empresaSeleccionada.publicaciones[i].imagenGanga}" alt="">
                            </div>
                            <div class="card-body">
                                <div class="form-control">
                                    <h4 class="form-control"><b>Titulo:</b> ${empresaSeleccionada.publicaciones[i].nombreGanga}</h4>
                                    <h4 class="form-control"><b>Descripción:</b> ${empresaSeleccionada.publicaciones[i].descripcionGanga}</h4>
                                    <h4 class="form-control"><b>Fecha Inicio:</b> ${empresaSeleccionada.publicaciones[i].fechaInicio}</h4>
                                    <h4 class="form-control"><b>Fecha Max:</b> ${empresaSeleccionada.publicaciones[i].fechaMax}</h4>
                                    <h4 class="form-control"><b>Hora Max:</b> ${empresaSeleccionada.publicaciones[i].horaMax}</h4>
                                    <h4 class="form-control"><b>Empresa:</b> ${empresaSeleccionada.publicaciones[i].nombreEmpresa}</h4>
                                </div>
                            </div>
                            <div class="card-footer">
                                <input class="btn btn-info" type="button" value="Guardar Tarjeta">
                            </div>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="empresa${cont}">
                            <div class="inner">
                                <img class="card-img-top" src="${empresaSeleccionada.logoEmpresa}" alt="">
                            </div>
                            <div class="card-body">
                                <div class="form-control">
                                    <h4 class="form-control"><i class="fa fa-institution"></i><b>Nombre:</b> ${empresaSeleccionada.nombreEmpresa}</h4>
                                    <h4 class="form-control"><i class="fa fa-institution"></i><b>Descripción:</b> ${empresaSeleccionada.tipoEmpresa}</h4>
                                    <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publicaciones:</b> ${empresaSeleccionada.publicaciones.length}</h4>
                                    <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${empresaSeleccionada.facebook}</h4>
                                    <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${empresaSeleccionada.instagram}</h4>
                                    <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${empresaSeleccionada.twitter}</h4>
                                    <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${empresaSeleccionada.twitch}</h4>
                                    <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${empresaSeleccionada.email}</h4>
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
generarPublicaciones();

function generarPerfil() {
    document.getElementById("profile").innerHTML = "";
    document.getElementById("profile").innerHTML =
        `<div class="card-top-img">
            <img src="${empresaSeleccionada.logoEmpresa}" alt="Imagen Empresa">           
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
        </div>`;
}

function generarEditPerfil() {
    document.getElementById("editEmpresa").innerHTML = "";
    document.getElementById("editEmpresa").innerHTML +=
        `<div class="card-body">
            <div class="form-control py-0">
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-image"> Company Image</i>
                        <input class="form-control" type="file" accept="image/*" id="imgGanga">
                        <small id="institutionImageHelp" class="text-muted">Company Logo</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-institution"> Company Name</i>
                        <input type="text" id="institutionName" class="form-control" aria-describedby="institutionNameHelp">
                        <small id="institutionNameHelp" class="text-muted">Ganguitas</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Type of company</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Fast Food</option>
                                <option value="2">Comercial</option>
                                <option value="3">Individual</option>
                                <option value="4">Others</option>
                            </select>
                        </div>
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
                    <div class="form-group">
                        <i class="fa fa-lock"> Password</i>
                        <input type="password" id="Password" class="form-control" aria-describedby="passwordHelp">
                        <small id="passwordHelp" class="text-muted">Must be 8-20 characters long.</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-lock"> Confirm your password</i>
                        <input type="email" id="confirmPass" class="form-control" aria-describedby="confirmHelp">
                        <small id="confirmHelp" class="text-muted">Must be 8-20 characters long.</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-facebook"> Facebook</i>
                        <input type="text" id="facebook" class="form-control" aria-describedby="faceHelp">
                        <small id="faceHelp" class="text-muted">Put your facebook address</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-instagram"> Instagram</i>
                        <input type="text" id="instagram" class="form-control" aria-describedby="instaHelp">
                        <small id="instaHelp" class="text-muted">Put your instagram address</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-twitter"> Twitter</i>
                        <input type="text" id="twitter" class="form-control" aria-describedby="twitHelp">
                        <small id="twitHelp" class="text-muted">Put your twitter address</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-twitch"> Twitch</i>
                        <input type="text" id="twitch" class="form-control" aria-describedby="twitchHelp">
                        <small id="twitchHelp" class="text-muted">Put your twitch address</small>
                    </div>
                </form>
                <form class="form-control">
                    <div class="form-group">
                        <i class="fa fa-address-card"> Soport Address</i>
                        <input type="email" id="soport" class="form-control" aria-describedby="soportHelp">
                        <small id="soportHelp" class="text-muted">Put your soport address</small>
                    </div>
                </form>
            </div>
        </div>`;
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
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo-blanco-y-negro.png" alt="imagen logo">`;
    }

})