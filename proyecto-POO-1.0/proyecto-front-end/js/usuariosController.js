var publicacionSeleccionada;
var clienteSeleccionado;
var verifUser = true;
var verifPass = null;
var verifPassUser = false;

function obtenerClienteActual() {
    console.log("entro a obtener cliente");
    axios.get('../../proyecto-back-end/API/usuarios', {
            params: { tipo: "cliente", actual: "actual" }
        })
        .then(function(res) {
            clienteSeleccionado = res.data;
            generarNombre();
            generarModalCompras(clienteSeleccionado);
            generarModalPerfil(clienteSeleccionado);
        })
        .catch(function(err) {
            console.error(err);
        });
}
obtenerClienteActual();
//
function generarNombre() {
    document.getElementById("nombreDeUsuario").innerHTML = "";
    document.getElementById("nombreDeUsuario").innerHTML =
        `<a href="#" class="nav-link text-white superText" data-target="#profile" data-toggle="modal"><i class="fa fa-user fa-2x"></i> ${clienteSeleccionado.usuarioCliente}</a>`;
}
//
function ObtenerPublicaciones() {
    axios.get('../../proyecto-back-end/API/empresas', {
            params: { tipo: "empresa", pubs: "pubs" }
        })
        .then(function(res) {
            var publicaciones;
            publicaciones = res.data;
            generarPublicaciones(publicaciones);
        })
        .catch(function(err) {
            console.error(err);
        });
}
ObtenerPublicaciones();
//
function generarPublicaciones(publicaciones) {
    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < publicaciones.length; i++) {
        imprimirPublicaciones(publicaciones[i], i);

    }
}
//
function imprimirPublicaciones(publicacion, contadorPubs) {
    var pubFavboton = "";
    var empFavboton = "";
    if (publicacion.pubFavoritaDe.length > 1) {
        for (let i = 0; i < publicacion.pubFavoritaDe.length; i++) {
            if (publicacion.pubFavoritaDe[i].cliente == clienteSeleccionado.usuarioCliente) {
                pubFavboton +=
                    `<a href="#" id="pubFav${contadorPubs}" class="btn btn-sm btn-info text-white fav" onclick="pubFavorita('${contadorPubs}', '${publicacion.nombreEmpresa}', '${publicacion.id}', '${publicacion.nombreGanga}')"><i class="fa fa-1x fa-heart"></i></a>`;
                break;
            } else {
                pubFavboton +=
                    `<a href="#" id="pubFav${contadorPubs}" class="btn btn-sm btn-info text-white fav" onclick="pubFavorita('${contadorPubs}', '${publicacion.nombreEmpresa}', '${publicacion.id}', '${publicacion.nombreGanga}')"><i class="fa fa-heart fa-1x"></i></a>`;
            }

        }
    } else {
        pubFavboton +=
            `<a href="#" id="pubFav${contadorPubs}" class="btn btn-sm btn-info text-white fav" onclick="pubFavorita('${contadorPubs}', '${publicacion.nombreEmpresa}', '${publicacion.id}', '${publicacion.nombreGanga}')"><i class="fa fa-heart fa-1x"></i></a>`;
    }

    if (publicacion.empFavoritaDe.length > 1) {
        for (let i = 0; i < publicacion.empFavoritaDe.length; i++) {
            for (let j = 0; j < clienteSeleccionado.companiasFav.length; j++) {
                const element = clienteSeleccionado.companiasFav[j];
                if (publicacion.empFavoritaDe[i].cliente == element.nombreEmp) {
                    empFavboton +=
                        `<a href="#" id="empFav${contadorPubs}" class="btn btn-sm btn-info text-white fav" onclick="pubFavorita('${contadorPubs}', '${publicacion.nombreEmpresa}')"><i class="fa fa-heart fa-1x"></i></a>`;
                    break;
                } else {
                    empFavboton +=
                        `<a href="#" id="empFav${contadorPubs}" class="btn btn-sm btn-info text-white" onclick="pubFavorita('${contadorPubs}', '${publicacion.nombreEmpresa}')"><i class="fa fa-heart fa-1x"></i></a>`;
                }
            }
        }
    } else {
        empFavboton +=
            `<a href="#" id="empFav${contadorPubs}" class="btn btn-sm btn-info text-white" onclick="pubFavorita('${contadorPubs}', '${publicacion.nombreEmpresa}')"><i class="fa fa-heart fa-1x"></i></a>`;
    }

    document.getElementById("publicaciones").innerHTML +=
        `<div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#ganga${contadorPubs}" role="tab" data-toggle="tab">Ganga</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#detalles${contadorPubs}" role="tab" data-toggle="tab">Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#empresa${contadorPubs}" role="tab" data-toggle="tab">Company</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active" role="tabpanel" id="ganga${contadorPubs}">
                        <div class="inner">
                            <img class="card-top-img" src="${publicacion.imagenGanga}" alt="">
                        </div>
                        <div class="card-body">
                            <h4>${publicacion.nombreGanga}</h4>
                            <p>${publicacion.descripcionGanga}</p>
                        </div>
                        <div class="card-footer">
                            ${pubFavboton}
                            <button class="btn btn-sm btn-info text-white" id="carrito${contadorPubs}" type="button" data-toggle="collapse" data-target="#comprarCard${contadorPubs}" aria-expanded="false" aria-controls="carrito">
                                <i class="fa fa-cart-plus fa-1x"></i>
                            </button>
                            <button class="btn btn-sm btn-info" id="verMas${contadorPubs}" type="button" data-toggle="collapse" data-target="#contCard${contadorPubs}" aria-expanded="false" aria-controls="contCard">
                                <i class="fa fa-eye">See more</i>
                            </button>
                            <div class="collapse" id="comprarCard${contadorPubs}">
                                <div class="card-body">
                                    <div class="form-group m-0">
                                        <label for="cantProduct${contadorPubs}"><b> Quantity</b></label>
                                        <input type="number" min="1" steps="1" value="1" id="cantProduct${contadorPubs}" class="form-control">
                                        <button class="btn btn-sm btn-info text-white float-left my-3" onclick="crearPedido('${contadorPubs}', '${publicacion.nombreEmpresa}', '${publicacion.id}', '${publicacion.nombreGanga}', '${publicacion.precio}')" id="cart${contadorPubs}" type="button">
                                            <i class="fa fa-cart-arrow-down fa-1x"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div id="alertCompras${contadorPubs}">
                                
                                </div>
                            </div>
                            <div class="collapse" id="contCard${contadorPubs}">
                                <div class="card-body m-0">
                                    <h4 class="form-control "><b>Max date:</b> ${publicacion.fechaMax}</h4>
                                    <h4 class="form-control "><b>Time remaining:</b> ${publicacion.horaMax}</h4>
                                    <h4 class="form-control "><b>Available Offers:</b> ${publicacion.ofertasDisponibles}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="detalles${contadorPubs}">
                        <div class="inner">
                            <img class="card-QR" src="../img/QR.png" alt="">
                            <img class="card-adv" src="${publicacion.imagenGanga}" alt="">
                        </div>
                        <div class="card-body">
                            <div class="form-control">
                                <h4 class="form-control"><b>Title:</b> ${publicacion.nombreGanga}</h4>
                                <h4 class="form-control"><b>Description:</b> ${publicacion.descripcionGanga}</h4>
                                <h4 class="form-control"><b>Start date:</b> ${publicacion.fechaInicio}</h4>
                                <h4 class="form-control"><b>Max Date:</b> ${publicacion.fechaMax}</h4>
                                <h4 class="form-control"><b>Max hour:</b> ${publicacion.horaMax}</h4>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-info text-white" data-toggle="modal" data-target="#logIn"><i class="fa fa-save fa-2x"></i> Save Card</a>
                        </div>
                    </div>
                    <div class="tab-pane" role="tabpanel" id="empresa${contadorPubs}">
                        <div class="inner">
                            <img class="card-img-top" src="${publicacion.logoEmpresa}" alt="">
                        </div>
                        <div class="card-body">
                            <div class="form-control">
                                <h4 class="form-control"><i class="fa fa-institution"></i><b>Name:</b> ${publicacion.nombreEmpresa}</h4>
                                <h4 class="form-control"><i class="fa fa-institution"></i><b>Description:</b> ${publicacion.tipoEmpresa}</h4>
                                <h4 class="form-control"><i class="fa fa-flag"></i><b>Country:</b> ${publicacion.pais}</h4>
                                <h4 class="form-control"><i class="fa fa-map-marker"></i><b>Address:</b> ${publicacion.direccion}</h4>
                                <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publications:</b> ${publicacion.cantPubs}</h4>
                                <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${publicacion.facebook}</h4>
                                <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${publicacion.instagram}</h4>
                                <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${publicacion.twitter}</h4>
                                <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${publicacion.twitch}</h4>
                                <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${publicacion.email}</h4>
                            </div>
                        </div>
                        <div class="card-footer">
                            ${empFavboton}
                            <a href="#" class="log form-control" data-toggle="modal" data-target="#"><i class="fa fa-map-marker fa-2x"></i> Nearby Premises</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}
//

function generarModalCompras(cliente) {
    let lista = "";
    let montoTot = 0;
    for (let i = 0; i < cliente.comprar.length; i++) {
        montoTot += cliente.comprar[i].monto;
        lista +=
            `
            <div class="container" id="compraId${i}">
                <div class="form-control">
                    <h5><b>Article Name: </b>${cliente.comprar[i].aComprar}</h5>
                    <h5><b>Quantity of items: </b>${cliente.comprar[i].cant}</h5>
                    <h5><b>Price item: </b>${cliente.comprar[i].precioArt}</h5>
                    <h5><b>Amount of items: </b>${cliente.comprar[i].monto}</h5>
                    <button class="btn btn-info" onclick="borrarCompra('${i}');"><i class="fa fa-trash-o"> Delete</i></button>
                </div>
            </div>`;
    }

    document.getElementById("modalCompras").innerHTML = "";
    document.getElementById("modalCompras").innerHTML +=
        `<div id="compras" class="modal fade " data-backdrop="position-static" tabindex="-1" role="dialog" aria-labelledby="contentForm" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header style">
                        <h2 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Hi ${cliente.usuarioCliente}!</h2>
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
                            <h4>Total amount: ${montoTot.toFixed(2)}</h4>
                        </div>
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

function generarModalPerfil(cliente) {
    let publicacionesFavoritas = "";
    let empresasFavoritas = "";
    let historialComp = "";

    if (cliente.publicacionesFav.length != 0) {
        for (let i = 0; i < cliente.publicacionesFav.length; i++) {
            publicacionesFavoritas +=
                `
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Ganga:</b> ${cliente.publicacionesFav[i].nombreGan}</h4>
                </div>`;

        }
    } else {
        publicacionesFavoritas = `<p><b>You have no favorite products yet</b></p>`;
    }

    if (cliente.companiasFav.length != 0) {
        for (let i = 0; i < cliente.companiasFav.length; i++) {
            empresasFavoritas +=
                `
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Company:</b> ${cliente.companiasFav[i].nombreEmp}</h4>
                </div>`;

        }
    } else {
        empresasFavoritas = `<p><b>You have no favorite companies yet</b></p>`;
    }

    if (cliente.comprasHechas.length != 0) {
        for (let i = 0; i < cliente.comprasHechas.length; i++) {
            historialComp +=
                `
                <div class="form-group">
                    <h4 class="form-control"><i class="fa fa-money"></i><b> Article name:</b> ${cliente.comprasHechas[i].nomCompra}</h4>
                    <h4 class="form-control"><i class="fa fa-calendar-check-o"></i><b> Date of purchase ${i}:</b> ${cliente.comprasHechas[i].fechaCompra}</h4>
                    <h4 class="form-control"><i class="fa fa-list"></i><b> Quantity:</b> ${cliente.comprasHechas[i].cant}</h4>
                    <h4 class="form-control"><i class="fa fa-money"></i><b> price:</b> ${cliente.comprasHechas[i].precioArt}</h4>
                    <h4 class="form-control"><i class="fa fa-money"></i><b> Amount:</b> ${cliente.comprasHechas[i].montoComprado}</h4>
                </div>`;
        }
    } else {
        historialComp = `<p><b>You have no shopping history yet</b></p>`;
    }

    document.getElementById("modalUs").innerHTML = "";
    document.getElementById("modalUs").innerHTML +=
        `<div id="profile" class="modal fade " data-backdrop="position-static" tabindex="-1" role="dialog" aria-labelledby="contentForm" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header style">
                        <ul class="nav nav-tabs modal-header-tabs">
                            <li class="nav-item card-header-tabs">
                                <a class="nav-link" href="#userProfile" role="tab" data-toggle="tab">${cliente.usuarioCliente}</a>
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
                                    <img class="card-img-top" src="${cliente.fotoCliente}" alt="foto cliente">
                                </div>
                                <div class="card-body">
                                    <div class="form-control py-0">
                                        <h4 class="form-control mt-2"><i class="fa fa-user"></i><b> First Name:</b> ${cliente.nombreCliente}</h4>
                                        <h4 class="form-control"><i class="fa fa-user"></i><b> Last Name:</b> ${cliente.apellidoCliente}</h4>
                                        <h4 class="form-control"><i class="fa fa-flag"></i><b> Pais:</b> ${cliente.pais}</h4>
                                        <h4 class="form-control"><i class="fa fa-transgender-alt"></i><b> Pais:</b> ${cliente.genero}</h4>
                                        <h4 class="form-control"><i class="fa fa-calendar-check-o"></i><b> Date of birth:</b> ${cliente.fechaNacimiento}</h4>
                                        <h4 class="form-control"><i class="fa fa-user-circle"></i><b> Username:</b> ${cliente.usuarioCliente}</h4>
                                        <h4 class="form-control"><i class="fa fa-envelope"></i><b> Email:</b> ${cliente.emailCliente}</h4>
                                        <h4 class="form-control"><i class="fa fa-calendar"></i><b> With us since:</b> ${cliente.fechaSignIn}</h4>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <ul class="nav nav-tabs modal-header-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#contProducts" role="tab" data-toggle="tab"><i class="fa fa-shopping-bag"> My Products</i></a>
                                        </li>
                                        <li class="nav-item card-header-tabs">
                                            <a class="nav-link" href="#contCompanies" role="tab" data-toggle="tab"><i class="fa fa-institution"> My Companies</i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#histComp" role="tab" data-toggle="tab"><i class="fa fa-history"></i> Shopping</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active" role="tabpanel" id="contProducts">
                                            <div class="card-body m-0">
                                                <h4 class="form-group"><b>My Favorite Products</b></h4>
                                                <hr>
                                                <div>
                                                    <form class="form-control" id="verPubFav">
                                                        ${publicacionesFavoritas}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="contCompanies">
                                            <div class="card-body m-0">
                                                <h4 class="form-group"><b>My Favorite Companies</b></h4>
                                                <hr>
                                                <div>
                                                    <form class="form-control" id="verEmpFav">
                                                        ${empresasFavoritas} 
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="histComp">
                                            <div class="card-body m-0">
                                                <h4 class="form-group"><b>Shopping history</b></h4>
                                                <hr>
                                                <div>
                                                    <form class="form-control" id="verHistComp">
                                                        ${historialComp}    
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" role="tabpanel" id="edit">
                                <div class="card-body mb-0 pb-0">
                                    <div class="form-control py-0">
                                        <div class="form-row py-1">
                                            <label for="formCli"><b><i class="fa fa-file-photo-o"> Photo User</i></b></label>
                                            <form id="formCli" name="formCli" method="post" enctype="multipart/form-data" aria-describedby="formCliHelp">
                                                <input type="file" name="imagen" id="imagenCli" accept="image/*" class="form-control">
                                            </form>
                                            <small id="formCliHelp" class="text-muted"> Here goes your user photo</small>
                                        </div>
                                        <div class="form-row py-1">
                                            <label for="firstName"><b><i class="fa fa-edit"> First Name</i></b></label>
                                            <input type="text" id="firstName" value="${cliente.nombreCliente}" style="border-color: green; color: green;" class="form-control" aria-describedby="firstNameHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="validacion('firstName')" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required>
                                            <small id="firstNameHelp" class="text-muted"> Julian Andres</small>
                                        </div>
                                        <div class="form-row py-1">
                                            <label for="lastName"><b><i class="fa fa-edit"> Last Name</i></b></label>
                                            <input type="text" id="lastName" value="${cliente.apellidoCliente}" style="border-color: green; color: green;" class="form-control" aria-describedby="lastNameHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="validacion('lastName')" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,20}" required>
                                            <small id="lastNameHelp" class="text-muted">Alvarez Mendoza</small>
                                        </div>
                                        <div class="form-row py-1">
                                            <label for="emailUser"><b><i class=" fa fa-envelope"> Email</i></b></label>
                                            <input type="email" id="emailUser" value="${cliente.emailCliente}" style="border-color: green; color: green;" class="form-control" aria-describedby="emailHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="validacion('emailUser')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                            <small id="emailHelp" class="text-muted ">andresjulian@yahoo.es</small>
                                        </div>
                                        <div class="form-row py-1 ">
                                            <label for="dateUser"><b><i class="fa fa-calendar"> Birthdate</i></b></label>
                                            <input type="date" min="1920-01-01" max="2008-12-31" value="${cliente.fechaNacimiento}" style="border-color: green; color: green;" id="dateUser" class="form-control " aria-describedby="datelHelp" onfocus="validacion('dateUser')" required>
                                            <small id="dateHelp" class="text-muted">Put your birth date here</small>
                                        </div>
                                        <div class="form-row py-1 ">
                                            <label for="genero"><b><i class="fa fa-transgender-alt"> Gender</i></b></label>
                                            <select class="form-control" id="genero" value="${cliente.genero}" style="border-color: green; color: green;" onfocus="limpiarAlertas('alertModifUser')" onchange="cambiar('genero');">
                                                <option value="Male" id="male">Male</i></option>
                                                <option value="Female" id="female">Female</></option>
                                                <option selected="true" value="Other" id="otro">I prefer not to specify</i></option>
                                            </select>
                                        </div>
                                        <div class="form-row py-1">
                                            <label for="usName"><b><i class="fa fa-user"> User Name</i></b></label>
                                            <input type="text" id="usName" value="${cliente.usuarioCliente}" style="border-color: green; color: green;" class="form-control" aria-describedby="userHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="validarUser('usName')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
                                            <small id="userHelp" class="text-muted">Put the name you want as a user</small>
                                        </div>
                                        <div class="form-row py-1 ">
                                            <label for="newPasswordUser"><b><i class="fa fa-lock ">New Password</i></b> (If you want to change else let the two field above in blanc)</label>
                                            <input type="password" id="newPasswordUser" class="form-control" aria-describedby="newPasswordHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="validacion('newPasswordUser')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                            <small id="newPasswordHelp" class="text-muted">Must be 8-20 characters long, choose a password with at least one capital letter and a number at the end as example Ganguitas1.</small>
                                        </div>
                                        <div class="form-row py-1 ">
                                            <label for="confirmNewPassUser"><b><i class="fa fa-lock "> Confirm your new password</i></b></label>
                                            <input type="password" id="confirmNewPassUser" class="form-control" aria-describedby="confirmHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="alertar('newPasswordUser','confirmNewPassUser');" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                            <small id="confirmHelp" class="text-muted ">Repeat your new password.</small>
                                        </div>
                                        <hr>
                                        <div class="form-row py-1 ">
                                            <label for="passwordUser"><b><i class="fa fa-lock ">Actual Password</i></b></label>
                                            <input type="password" id="passwordUser" class="form-control" aria-describedby="passwordHelp" onfocus="limpiarAlertas('alertModifUser')" oninput="verifPassCliente('passwordUser')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                            <small id="passwordHelp" class="text-muted">You most privide your actual password to confirm the changes.</small>
                                        </div>
                                    </div>
                                </div>
                                <div id="alertModifUser">

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
    if (verifPassUser == false) {
        document.getElementById("alertModifUser").innerHTML = "";
        document.getElementById("alertModifUser").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Password do not match!, </strong>Please make sure it is your current password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    } else if (document.getElementById('imagenCli').value != "") {
        var frm = $('#formCli');
        let formData = new FormData(frm[0]);
        axios.post('../../proyecto-front-end/sube', formData)
            .then(res => {
                if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUser && verifPassUser && document.getElementById("newPasswordUser").value.length == 0 && document.getElementById("confirmNewPassUser").value.length == 0) {
                    clienteSeleccionado.registroAcciones.push(msjParaRegistro("modifUser", clienteSeleccionado.usuarioCliente, document.getElementById("usName")));
                    let clienteModif = {
                        usuarioClienteModif: clienteSeleccionado.usuarioCliente,
                        nombreCliente: document.getElementById("firstName").value,
                        apellidoCliente: document.getElementById("lastName").value,
                        usuarioCliente: document.getElementById("usName").value,
                        emailCliente: document.getElementById("emailUser").value,
                        passwordCliente: clienteSeleccionado.passwordCliente,
                        actual: clienteSeleccionado.actual,
                        fechaNacimiento: document.getElementById("dateUser").value,
                        fotoCliente: "../" + res.data,
                        genero: document.getElementById("genero").value,
                        pais: clienteSeleccionado.pais,
                        companiasFav: clienteSeleccionado.companiasFav,
                        publicacionesFav: clienteSeleccionado.publicacionesFav,
                        comprasHechas: clienteSeleccionado.comprasHechas,
                        comprar: clienteSeleccionado.comprar,
                        tipo: clienteSeleccionado.tipo,
                        fechaSignIn: clienteSeleccionado.fechaSignIn,
                        registroAcciones: clienteSeleccionado.registroAcciones
                    }

                    axios({
                            url: '../../proyecto-back-end/API/usuarios.php',
                            method: 'PUT',
                            responseType: 'json',
                            data: clienteModif
                        })
                        .then(function(res) {
                            console.log(res);
                            clienteSeleccionado = res.data;
                            generarNombre();
                            generarModalPerfil(clienteSeleccionado);
                        })
                        .catch(function(error) {
                            console.error(error);
                        });
                } else if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUser && verifPassUser && verifPass) {
                    clienteSeleccionado.registroAcciones.push(msjParaRegistro("modifUser", clienteSeleccionado.usuarioCliente, document.getElementById("usName")));
                    let clienteModif = {
                        usuarioClienteModif: clienteSeleccionado.usuarioCliente,
                        nombreCliente: document.getElementById("firstName").value,
                        apellidoCliente: document.getElementById("lastName").value,
                        usuarioCliente: document.getElementById("usName").value,
                        emailCliente: document.getElementById("emailUser").value,
                        passwordCliente: document.getElementById("newPasswordUser").value,
                        actual: clienteSeleccionado.actual,
                        fechaNacimiento: document.getElementById("dateUser").value,
                        fotoCliente: clienteSeleccionado.fotoCliente,
                        genero: document.getElementById("genero").value,
                        pais: clienteSeleccionado.pais,
                        companiasFav: clienteSeleccionado.companiasFav,
                        publicacionesFav: clienteSeleccionado.publicacionesFav,
                        comprasHechas: clienteSeleccionado.comprasHechas,
                        comprar: clienteSeleccionado.comprar,
                        tipo: clienteSeleccionado.tipo,
                        fechaSignIn: clienteSeleccionado.fechaSignIn,
                        registroAcciones: clienteSeleccionado.registroAcciones
                    }

                    axios({
                            url: '../../proyecto-back-end/API/usuarios.php',
                            method: 'PUT',
                            responseType: 'json',
                            data: clienteModif
                        })
                        .then(function(res) {
                            console.log(res);
                            clienteSeleccionado = res.data;
                            generarNombre();
                            generarModalPerfil(clienteSeleccionado);
                        })
                        .catch(function(error) {
                            console.error(error);
                        });

                } else if (verifUser == false && document.getElementById("usName").value.length >= 3) {
                    document.getElementById("alertModifUser").innerHTML = "";
                    document.getElementById("alertModifUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>User is already in use!, </strong>Please try with another user name.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (verifPass == false && document.getElementById("passwordUser").value.length >= 8) {
                    document.getElementById("alertModifUser").innerHTML = "";
                    document.getElementById("alertModifUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Passwords do not match!, </strong>Please check the passwords.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;

                } else if (document.getElementById("firstName").style.color == "red" || document.getElementById("lastName").style.color == "red" || document.getElementById("emailUser").style.color == "red" || document.getElementById("usName").style.color == "red" || document.getElementById("passwordUser")) {
                    document.getElementById("alertModifUser").innerHTML = "";
                    document.getElementById("alertModifUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (document.getElementById("firstName").value.length == 0 || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("usName").value.length == 0 || document.getElementById("passwordUser").value.length == 0 || document.getElementById("confirmPassUser").value.length == 0) {
                    document.getElementById("alertModifUser").innerHTML = "";
                    document.getElementById("alertModifUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Form incomplete!, </strong>Please fill all the fields.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (document.getElementById("newPasswordUser").value.length == 0 || document.getElementById("confirmNewPassUser").value.length == 0) {

                }
            }).catch(err => {
                console.error(err);
            });
    } else {
        if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUser && verifPassUser && document.getElementById("newPasswordUser").value.length == 0 && document.getElementById("confirmNewPassUser").value.length == 0) {
            clienteSeleccionado.registroAcciones.push(msjParaRegistro("modifUser", clienteSeleccionado.usuarioCliente, document.getElementById("usName")));
            let clienteModif = {
                usuarioClienteModif: clienteSeleccionado.usuarioCliente,
                nombreCliente: document.getElementById("firstName").value,
                apellidoCliente: document.getElementById("lastName").value,
                usuarioCliente: document.getElementById("usName").value,
                emailCliente: document.getElementById("emailUser").value,
                passwordCliente: clienteSeleccionado.passwordCliente,
                actual: clienteSeleccionado.actual,
                fechaNacimiento: document.getElementById("dateUser").value,
                fotoCliente: clienteSeleccionado.fotoCliente,
                genero: document.getElementById("genero").value,
                pais: clienteSeleccionado.pais,
                companiasFav: clienteSeleccionado.companiasFav,
                publicacionesFav: clienteSeleccionado.publicacionesFav,
                comprasHechas: clienteSeleccionado.comprasHechas,
                comprar: clienteSeleccionado.comprar,
                tipo: clienteSeleccionado.tipo,
                fechaSignIn: clienteSeleccionado.fechaSignIn,
                registroAcciones: clienteSeleccionado.registroAcciones
            }

            axios({
                    url: '../../proyecto-back-end/API/usuarios.php',
                    method: 'PUT',
                    responseType: 'json',
                    data: clienteModif
                })
                .then(function(res) {
                    console.log(res);
                    clienteSeleccionado = res.data;
                    generarNombre();
                    generarModalPerfil(clienteSeleccionado);
                })
                .catch(function(error) {
                    console.error(error);
                });
        } else if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUser && verifPassUser && verifPass) {
            clienteSeleccionado.registroAcciones.push(msjParaRegistro("modifUser", clienteSeleccionado.usuarioCliente, document.getElementById("usName")));
            let clienteModif = {
                usuarioClienteModif: clienteSeleccionado.usuarioCliente,
                nombreCliente: document.getElementById("firstName").value,
                apellidoCliente: document.getElementById("lastName").value,
                usuarioCliente: document.getElementById("usName").value,
                emailCliente: document.getElementById("emailUser").value,
                passwordCliente: document.getElementById("newPasswordUser").value,
                actual: clienteSeleccionado.actual,
                fechaNacimiento: document.getElementById("dateUser").value,
                fotoCliente: clienteSeleccionado.fotoCliente,
                genero: document.getElementById("genero").value,
                pais: clienteSeleccionado.pais,
                companiasFav: clienteSeleccionado.companiasFav,
                publicacionesFav: clienteSeleccionado.publicacionesFav,
                comprasHechas: clienteSeleccionado.comprasHechas,
                comprar: clienteSeleccionado.comprar,
                tipo: clienteSeleccionado.tipo,
                fechaSignIn: clienteSeleccionado.fechaSignIn,
                registroAcciones: clienteSeleccionado.registroAcciones
            }

            axios({
                    url: '../../proyecto-back-end/API/usuarios.php',
                    method: 'PUT',
                    responseType: 'json',
                    data: clienteModif
                })
                .then(function(res) {
                    console.log(res);
                    clienteSeleccionado = res.data;
                    generarNombre();
                    generarModalPerfil(clienteSeleccionado);
                })
                .catch(function(error) {
                    console.error(error);
                });

        } else if (verifUser == false && document.getElementById("usName").value.length >= 3) {
            document.getElementById("alertModifUser").innerHTML = "";
            document.getElementById("alertModifUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>User is already in use!, </strong>Please try with another user name.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (verifPass == false && document.getElementById("passwordUser").value.length >= 8) {
            document.getElementById("alertModifUser").innerHTML = "";
            document.getElementById("alertModifUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Passwords do not match!, </strong>Please check the passwords.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;

        } else if (document.getElementById("firstName").style.color == "red" || document.getElementById("lastName").style.color == "red" || document.getElementById("emailUser").style.color == "red" || document.getElementById("usName").style.color == "red" || document.getElementById("passwordUser")) {
            document.getElementById("alertModifUser").innerHTML = "";
            document.getElementById("alertModifUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (document.getElementById("firstName").value.length == 0 || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("usName").value.length == 0 || document.getElementById("passwordUser").value.length == 0 || document.getElementById("confirmPassUser").value.length == 0) {
            document.getElementById("alertModifUser").innerHTML = "";
            document.getElementById("alertModifUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Form incomplete!, </strong>Please fill all the fields.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (document.getElementById("newPasswordUser").value.length == 0 || document.getElementById("confirmNewPassUser").value.length == 0) {

        }
    }
}

function cambiar(id) {
    var elem = document.getElementById(id);
    elem.style.borderColor = "green";
    elem.style.color = "green";
}

function verifPassCliente(id) {
    if (clienteSeleccionado.passwordCliente == document.getElementById(id).value) {
        verifPassUser = true;
    } else {
        verifPassUser = false;
    }
}

function validacion(id) {
    var elem = document.getElementById(id);
    if (id == 'dateUser') {
        limpiarAlertas('alertModifUser');
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        }
    } else if (id == 'newPasswordUser') {
        document.getElementById('confirmNewPassUser').value = "";
        alertar("newPasswordUser", "confirmNewPassUser");
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
    if (elem1.value == elem2.value == "") {
        elem2.style.borderColor = "none";
        elem2.style.color = "black";
        elem1.style.borderColor = "none";
        elem1.style.color = "black";
    } else if (elem1.value == elem2.value) {
        if (elem2.checkValidity()) {
            elem2.style.borderColor = "green";
            elem2.style.color = "green";
            verifPass = true;
        } else {
            elem2.style.borderColor = "red";
            elem2.style.color = "red";
            verifPass = false;
        }
    } else {
        elem2.style.borderColor = "red";
        elem2.style.color = "red";
        verifPass = false;
    }

}

function validarUser(id) {
    var elem = document.getElementById(id);
    axios.get('../../proyecto-back-end/API/empresas', {
            params: {
                tipo: 'empresa',
                nombUs: elem.value
            }
        })
        .then(res => {
            if (res.data.resultado == "encontrado") {
                if (empresaSeleccionada.nombreUsuario == res.data.nom) {
                    elem.style.borderColor = "green";
                    elem.style.color = "green";
                    verifUser = true;
                }
                if (empresaSeleccionada.nombreUsuario != res.data.nom) {
                    elem.style.borderColor = "red";
                    elem.style.color = "red";
                    verifUser = false;
                }
            } else if (res.data.resultado == "noEncontrado") {
                if (elem.checkValidity()) {
                    elem.style.borderColor = "green";
                    elem.style.color = "green";
                    verifUser = false;

                } else {
                    elem.style.borderColor = "red";
                    elem.style.color = "red";
                    verifUser = false;
                }
            }
            if (verifUser == false) {
                axios.get('../../proyecto-back-end/API/usuarios', {
                        params: {
                            tipo: 'cliente',
                            nombUs: elem.value
                        }
                    })
                    .then(resi => {
                        if (resi.resultado == "encontrado") {
                            if (empresaSeleccionada.nombreUsuario == elem.value) {
                                elem.style.borderColor = "green";
                                elem.style.color = "green";
                                verifUser = true;
                            }
                            if (empresaSeleccionada.nombreUsuario != elem.value) {
                                elem.style.borderColor = "red";
                                elem.style.color = "red";
                                verifUser = false;
                            }
                        } else if (resi.data.resultado == "noEncontrado") {
                            if (elem.checkValidity()) {
                                elem.style.borderColor = "green";
                                elem.style.color = "green";
                                verifUser = true;

                            } else {
                                elem.style.borderColor = "red";
                                elem.style.color = "red";
                                verifUser = false;
                            }
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

function actualizarCliente() {
    let clienteModif = {
        usuarioClienteModif: clienteSeleccionado.usuarioCliente,
        nombreCliente: clienteSeleccionado.nombreCliente,
        apellidoCliente: clienteSeleccionado.apellidoCliente,
        usuarioCliente: clienteSeleccionado.usuarioCliente,
        emailCliente: clienteSeleccionado.emailCliente,
        passwordCliente: clienteSeleccionado.passwordCliente,
        actual: clienteSeleccionado.actual,
        fechaNacimiento: clienteSeleccionado.fechaNacimiento,
        fotoCliente: clienteSeleccionado.fotoCliente,
        genero: clienteSeleccionado.genero,
        pais: clienteSeleccionado.pais,
        companiasFav: clienteSeleccionado.companiasFav,
        publicacionesFav: clienteSeleccionado.publicacionesFav,
        comprasHechas: clienteSeleccionado.comprasHechas,
        comprar: clienteSeleccionado.comprar,
        tipo: clienteSeleccionado.tipo,
        fechaSignIn: clienteSeleccionado.fechaSignIn,
        registroAcciones: clienteSeleccionado.registroAcciones
    }

    axios({
            url: '../../proyecto-back-end/API/usuarios.php',
            method: 'PUT',
            responseType: 'json',
            data: clienteModif
        })
        .then(function(res) {
            console.log(res.data);
            clienteSeleccionado = res.data;
        })
        .catch(function(error) {
            console.error(error);
        });
}

function logOut() {
    clienteSeleccionado.actual = false;
    clienteSeleccionado.registroAcciones.push(msjParaRegistro("logOut", clienteSeleccionado.usuarioCliente, "nada"));
    actualizarCliente();
}

function pubFavorita(conta, nombEmp, idPub, nombPub) {
    var verif = false;
    var indiceEncontrado;

    for (let i = 0; i < clienteSeleccionado.publicacionesFav.length; i++) {
        if (clienteSeleccionado.publicacionesFav[i].nombreGan == nombPub) {
            verif = true;
            indiceEncontrado = i;
            break;
        }
    }

    if (verif == false) {
        let añadir = {
            tipo: "cliente",
            accion: "guardar",
            nombreGan: nombPub,
        }
        let nuevaPubFavD = {
            tipo: "pub",
            accion: "guardar",
            empresa: nombEmp,
            cliente: clienteSeleccionado.usuarioCliente,
            fechaSelecFav: fechaActual(),
            indiceDePub: idPub
        }

        axios.put('../../proyecto-back-end/API/empresas.php', {
                data: nuevaPubFavD
            })
            .then(resul => {
                clienteSeleccionado.publicacionesFav.push(añadir);
                actualizarCliente();
                document.getElementById("verPubFav").innerHTML +=
                    `
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Ganga:</b> ${clienteSeleccionado.publicacionesFav[clienteSeleccionado.publicacionesFav.length-1].nombreGan}</h4>
                        </div>
                    </form>`;

                document.getElementById(`pubFav${conta}`).classList.add("fav");
            }).catch(err => {
                console.error(err);
            });
    } else {
        let borrarPubFavD = {
            tipo: "pub",
            accion: "borrar",
            indiceDePub: idPub,
            nomPub: nombPub
        }
        axios.put('../../proyecto-back-end/API/empresas.php', {
                data: borrarPubFavD
            })
            .then(resul => {
                clienteSeleccionado.publicacionesFav.splice(indiceEncontrado, 1);
                actualizarCliente();
                generarModalPerfil(clienteSeleccionado);
                document.getElementById(`pubFav${conta}`).classList.remove("fav");
            }).catch(err => {
                console.error(err);
            });
        for (let k = 0; k < empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe.length; k++) {
            if (empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe[k].indiceDePub == indicePub) {
                empresas[indiceEmp].publicaciones[indicePub].pubFavoritaDe.splice(k, 1);
                break;
            }
        }
    }
}

function empFavorita(cont, nombEmp) {
    var verif = false;
    var indiceEncontrado;

    for (let i = 0; i < clienteSeleccionado.companiasFav.length; i++) {
        if (clienteSeleccionado.companiasFav[i].nombreEmp == nombEmp) {
            verif = true;
            indiceEncontrado = i;
            break;
        }
    }

    if (verif == false) {
        let añadir = {
            nombre: nombEmp
        }
        let nuevaEmpFavD = {
            tipo: "empresa",
            accion: "guardar",
            empresa: nombEmp,
            cliente: clienteSeleccionado.usuarioCliente,
            fechaSelecFav: fechaActual(),
        }

        axios.post('../../proyecto-back-end/API/empresas.php', {
                data: nuevaEmpFavD
            })
            .then(resul => {
                clienteSeleccionado.companiasFav.push(añadir);
                actualizarCliente();
                document.getElementById("verEmpFav").innerHTML +=
                    `
                    <form class="form-control">
                        <div class="form-group">
                            <h4 class="form-control"><i class="fa fa-thumbs-up"></i><b> Company:</b> ${clienteSeleccionado.companiasFav[clienteSeleccionado.companiasFav.length-1].nombreEmp}</h4>
                        </div>
                    </form>`;

                document.getElementById(`empFav${cont}`).classList.add("fav");
            }).catch(err => {
                console.error(err);
            });
    } else {
        let borrarPubFavD = {
            tipo: "empresa",
            accion: "borrar",
            empresa: nombEmp,
            cliente: clienteSeleccionado.usuarioCliente
        }
        axios.post('../../proyecto-back-end/API/empresas.php', {
                data: borrarPubFavD
            })
            .then(resul => {
                clienteSeleccionado.companiasFav.splice(indiceEncontrado, 1);
                actualizarCliente();
                generarModalPerfil(clienteSeleccionado);
                document.getElementById(`empFav${cont}`).classList.remove("fav");
            }).catch(err => {
                console.error(err);
            });
    }
}

//llama a generarModalCompras
function crearPedido(cont, nombEmp, indicePub, nomGan, precio) {
    let elem = document.getElementById("cantProduct" + cont).value;
    if (elem != 0) {
        let porComprar = {
            aComprar: nomGan,
            fechaCompra: fechaActual(),
            cant: elem,
            precioArt: precio,
            monto: precio * elem,
            nombrEmp: nombEmp,
            idPub: indicePub
        }
        clienteSeleccionado.comprar.push(porComprar);
        actualizarCliente();
        document.getElementById("cantProduct" + cont).value = 0;
        generarModalCompras(clienteSeleccionado);
    } else {
        document.getElementById("alertCompras" + cont).innerHTML = "";
        document.getElementById("alertCompras" + cont).innerHTML +=
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
    actualizarCliente();
    document.getElementById("compraId" + indiceCompra).innerHTML = "";

}

function comprarPub() {
    if (clienteSeleccionado.comprar.length >= 1) {
        for (let i = 0; i < clienteSeleccionado.comprar.length; i++) {
            let nuevaVenta = {
                tipo: "pub",
                accion: "guardar",
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
            axios.post('../../proyecto-back-end/API/empresas.php', {
                    data: nuevaVenta
                })
                .then(resul => {
                    console.log(JSON.stringify(clienteSeleccionado));

                    clienteSeleccionado.comprasHechas.push(nuevaCompra);
                    for (let i = 0; i < clienteSeleccionado.compras.length; i++) {
                        clienteSeleccionado.compras.splice(i, 1);

                    }
                    actualizarCliente();
                    document.getElementById('mostrarProd').innerHTML = "";

                }).catch(err => {
                    console.error(err);
                });

        }
        for (let j = 0; j < clienteSeleccionado.comprar.length; j++) {
            clienteSeleccionado.comprar.splice(j, 1);
        }
        actualizarCliente();
        document.getElementById("alerModalComp").innerHTML = "";
        document.getElementById("alerModalComp").innerHTML +=
            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Thanks for your purchase!</strong>  go and look for more offers!.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        generarModalPerfil(clienteSeleccionado);

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
    var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
    return fecha;
}

function limpiarAlertas(id) {
    document.getElementById(id).innerHTML = "";
}

function msjParaRegistro(descripcion, nombre, nombreNuevo) {
    let f = new Date();
    let msj;
    if (descripcion == "modifUser") {
        msj = {
            modifUsuario: "The user " + nombre + " changed to " + nombreNuevo + " with date and time of modification: " + f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "logOut") {
        msj = {
            cerrarSesion: "User " + nombre + " closed session with session closing date: " + f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "delete") {
        msj = {
            borrarUsuario: "User " + nombre + " deleted his account with deletion date: " + f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    }
    return msj;
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