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

document.getElementById("posCardUser").innerHTML = "";
document.getElementById("posCardComp").innerHTML = "";

function generarSignInUser() {
    document.getElementById("posCardComp").innerHTML = "";
    if (document.getElementById("posCardUser").innerHTML != "") {
        document.getElementById("posCardUser").innerHTML = "";
    } else {
        document.getElementById("posCardUser").innerHTML = "";
        document.getElementById("posCardUser").innerHTML +=
            `<div class="card col-lg-6 col-md-9 col-sm-12 col-xs-12 m-auto pb-0">
                <div class="card-header p-2 mt-3">
                    <h5 class="card-title mb-0"><i class="fa fa-sign-in"> Sign In</i></h5>
                </div>
                <div class="card-body mb-0 pb-0">
                    <form class="form-control py-0">
                        <fieldset>
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
                                <input type="text" id="usName" class="form-control" aria-describedby="userHelp" oninput="validarUser('usName','cliente')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
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
                    </form>
                </div>
                <div class="card-footer container pb-2 mb-3">
                    <div class="row">
                        <div class="col-9">
                            <a class="mr-auto font-weight-bold" href="#logIn">You alredy has an account?</a>
                        </div>
                        <div class="col-3">
                            <button type="submit" onclick="signInUser();" class="btn btn-info">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

function generarSignInComp() {
    document.getElementById("posCardUser").innerHTML = "";
    if (document.getElementById("posCardComp").innerHTML != "") {
        document.getElementById("posCardComp").innerHTML = "";
    } else {
        document.getElementById("posCardComp").innerHTML = "";
        document.getElementById("posCardComp").innerHTML +=
            `<div class="card col-lg-10 col-md-10 col-sm-12 col-xs-12 m-auto pb-0">
                <div class="card-header p-2 m-3">
                    <h5 class="card-title"><i class="fa fa-sign-in"> Sign In</i></h5>
                </div>
                <div class="card-body pb-0 mb-0">
                    <form class="form-control py-0 row">
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
                                        <select class="form-control" id="selectPais" onchange="cambiar();">
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
                <div class="card-footer container pb-2 mb-3">
                    <div class="row">
                        <div class="col-9">
                            <a class="mr-auto font-weight-bold" href="#logIn">You alredy has an account?</a>
                        </div>
                        <div class="col-3">
                            <button type="submit" onclick="signInComp();" class="btn btn-info">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
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
    } else if (verifPass && verifUser == false) {
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
        top.location.href = "../html/ganguitasUsuario.html";
    } else if (selec == "empresas") {
        top.location.href = "../html/ganguitasCompany.html";
    }
}

function cambiar() {
    document.getElementById("selectPais").style.borderColor = "green";
    document.getElementById("selectPais").style.color = "green";
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

function signInUser() {
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
        publicacionesFav: [],
        comprasHechas: [],
        comprar: []

    }
    clientes.push(nuevoCliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    redireccionar('clientes');
}

function signInComp() {

    var nuevaComp = {
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
        actual: false,
        publicaciones: []
    }

    empresas.push(nuevaComp);
    localStorage.setItem('empresas', JSON.stringify(empresas));
    redireccionar('empresas');
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