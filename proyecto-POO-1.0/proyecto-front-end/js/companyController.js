var empresaSeleccionada;
var verifUser = null;
var verifPass = null;
var verifPassUser = null;

function obtenerEmpresaActual() {
    axios.get('../../proyecto-back-end/API/empresas', {
            params: { tipo: "empresa", actual: "actual" }
        })
        .then(function(res) {
            empresaSeleccionada = res.data;
            generarBanner();
            generarNombre();
            generarPerfil();
            generarEditPerfil();
            generarAddPub();
            generarPublicaciones();
        })
        .catch(function(err) {
            console.error(err);
        });
}
obtenerEmpresaActual();

function generarBanner() {
    document.getElementById('paraBanner').innerHTML = "";
    document.getElementById('paraBanner').innerHTML +=
        `<img src="${empresaSeleccionada.banner}" id="banner"></img>`;
}

function fechaActual() {
    var f = new Date();
    if ((f.getMonth() + 1) <= 9 && f.getDate() >= 10) {
        var fecha = f.getFullYear() + "-0" + (f.getMonth() + 1) + "-" + f.getDate();
    } else if ((f.getMonth() + 1) <= 9 && f.getDate() <= 9) {
        var fecha = f.getFullYear() + "-0" + (f.getMonth() + 1) + "-0" + f.getDate();
    } else if ((f.getMonth() + 1) >= 10 && f.getDate() <= 9) {
        var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-0" + f.getDate();
    } else if ((f.getMonth() + 1) >= 10 && f.getDate() >= 10) {
        var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
    }
    return fecha;
}

function horaAct() {
    let f = "";
    f = new Date();
    if (f.getHours() <= 9 && f.getMinutes() <= 9) {
        var fecha = "0" + f.getHours() + ":0" + f.getMinutes();
    } else if (f.getHours() >= 10 && f.getMinutes() >= 10) {
        var fecha = f.getHours() + ":" + f.getMinutes();
    } else if (f.getHours() >= 10 && f.getMinutes() <= 9) {
        var fecha = f.getHours() + ":0" + f.getMinutes();
    } else if (f.getHours() <= 9 && f.getMinutes() >= 10) {
        var fecha = "0" + f.getHours() + ":" + f.getMinutes();
    }
    return fecha;
}

function horaMin() {
    let f;
    f = new Date();
    if ((f.getHours() + 1) <= 9 && f.getMinutes() <= 9) {
        var fecha = "0" + (f.getHours() + 1) + ":0" + f.getMinutes();
    } else if ((f.getHours() + 1) >= 10 && f.getMinutes() >= 10) {
        var fecha = (f.getHours() + 1) + ":" + f.getMinutes();
    } else if ((f.getHours() + 1) >= 10 && f.getMinutes() <= 9) {
        var fecha = (f.getHours() + 1) + ":0" + f.getMinutes();
    } else if ((f.getHours() + 1) <= 9 && f.getMinutes() >= 10) {
        var fecha = "0" + (f.getHours() + 1) + ":" + f.getMinutes();
    }
    return fecha;
}

function generarNombre() {
    document.getElementById("nombreDeEmpresa").innerHTML = "";
    document.getElementById("nombreDeEmpresa").innerHTML =
        `<a class="nav-link" href="#paraProfile" role="tab" data-toggle="tab"><i class="fa fa-institution"></i>${empresaSeleccionada.nombreUsuario}</a>`;
}

function generarPublicaciones() {
    let cont = 0;
    document.getElementById("publicaciones").innerHTML = '';
    for (let i = 0; i < empresaSeleccionada.publicaciones.length; i++) {
        let coments = "";
        let respuestas = "";
        for (let j = 0; j < empresaSeleccionada.publicaciones[i].calificacionPublicacionDe.length; j++) {
            const element = empresaSeleccionada.publicaciones[i].calificacionPublicacionDe[j];
            for (let k = 0; k < element.respuestasCalifPub.length; k++) {
                const elem = element.respuestasCalifPub[k];
                respuestas +=
                    `
                    <hr>
                    <div class="container pr-0">
                        <div class="container pr-0">
                            <div class="py-1 pr-0">
                                <div class="fl">
                                    <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${elem.imagen}">
                                </div>
                                <div class="row py-0 my-0 px-1">
                                    <h5 class="muted my-0 py-0 mr-3">${elem.nomCliente}</h5><span class="muted align-self-end">${elem.fechaRespuesta}</span>
                                </div>
                            </div>
                            <hr>
                            <div>
                                <h5 class=""><i class="fa fa-comments-o">${elem.comentCliente}</i></h5>
                            </div>
                        </div>
                    </div>
                    `;
            }
            coments +=
                `
                <hr>
                <div class="form-control py-1">
                    <div>
                        <div class="fl">
                            <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${element.imagen}">
                        </div>
                        <div class="row py-0 my-0 px-1">
                            <h4 class="muted my-0 py-0 mr-3">${element.nomCliente}</h4><span class="muted align-self-end">${element.fechaCalif}</span><span class="ml-auto">${element.califDePub}</span>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4><i class="fa fa-comments-o"> ${element.comentCliente}</i></h4>
                    </div>
                    <div class="py-0 my-0">
                        <button class="btn btn-sm btn-info fin mb-0" data-toggle="collapse" data-target="#comPubRes${j}" aria-expanded="false" aria-controls="comPubRes${j}"><i class="fa fa-comment"> See ${element.respuestasCalifPub.length} answers</i></button>
                        <button class="btn btn-sm btn-info align-content-end mb-0" data-toggle="collapse" data-target="#comPubCalif${j}" aria-expanded="false" aria-controls="comPubCalif${j}"><i class="fa fa-commenting-o"> Comment</i></button>
                        <div class="collapse" id="comPubCalif${j}">
                            <div class="card-body m-0">
                                <div class="form-row py-1">
                                    <label for="responderPubCalif${j}"><b><i class="fa fa-commenting-o"> Post</i></b></label>
                                    <textarea type="text" id="responderPubCalif${j}" class="form-control" aria-describedby="responderPubCalif${j}Help" rows="3" required></textarea>
                                    <small id="responderPubCalif${j}Help" class="text-muted">Answer to the clients</small>
                                </div>
                                <div class="container pb-3">
                                    <button onclick="comentCalif('paraComentCalifPub${j}','responderPubCalif${j}',${j}, 'pub');" class="btn btn-sm btn-info float-right"><i class="fa fa-commenting-o"> Post</i></button>
                                </div>
                            </div>
                        </div>
                        <div class="collapse" id="comPubRes${j}">
                            <div class="card-body m-0">
                                <div id="paraComentCalifPub${j}">
                                    ${respuestas}
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                `;

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
                            <li class="nav-item">
                                <a class="nav-link" href="#com${cont}" role="tab" data-toggle="tab">Rating</a>
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" role="tabpanel" id="com${cont}">
                            <div class="card-body">
                                <div id="paraComent${cont}">
                                    ${coments}
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" role="tabpanel" id="editPub${cont}">
                            <div class="card-body">
                                <div class="form-control">
                                    <div class="form-control py-1">
                                        <label for="imaGanga${cont}"><b><i class="fa fa-photo"> Ganga image</i></b></label>
                                        <form id="form${cont}" name="form${cont}" method="post" enctype="multipart/form-data">
                                            <input type="file" name="imagen" id="imaGanga${cont}" accept="image/*" aria-describedby="imaGangaHelp${cont}"/>
                                        </form>
                                        <small id="imaGangaHelp${cont}" class="text-muted"> Publication Photo</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="gangNameEditPublication${cont}"><b><i class="fa fa-edit"> Publication Name</i></b></label>
                                        <input type="text" id="gangNameEditPublication${cont}" value="${empresaSeleccionada.publicaciones[i].nombreGanga}" class="form-control" aria-describedby="gangNameEditPublicationHelp${cont}">
                                        <small id="gangNameEditPublicationHelp${cont}" class="text-muted">Publication Name</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="pubDescrip${cont}"><b><i class="fa fa-edit"> Publication Description</i></b></label>
                                        <textarea id="pubDescrip${cont}" cols="30" rows="3" value="${empresaSeleccionada.publicaciones[i].descripcionGanga}" class="form-control" aria-describedby="pubDescripHelp${cont}"></textarea>
                                        <small id="pubDescripHelp${cont}" class="text-muted">Information of the publication</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="pubMaxDat${cont}"><b><i class="fa fa-edit"> Max date</i></b></label>
                                        <input type="date" id="pubMaxDat${cont}" value="${empresaSeleccionada.publicaciones[i].fechaMax}" class="form-control" aria-describedby="pubMaxDatHelp${cont}">
                                        <small id="pubMaxDatHelp${cont}" class="text-muted">Publication max date</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="pubMaxHour${cont}"><b><i class="fa fa-edit"> Max Hour</i></b></label>
                                        <input type="time" id="pubMaxHour${cont}" value="${empresaSeleccionada.publicaciones[i].horaMax}" class="form-control" aria-describedby="pubMaxHourHelp${cont}">
                                        <small id="pubMaxHourHelp${cont}" class="text-muted">Publication max hour</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="oferDisp${cont}"><b><i class="fa fa-edit"> Offers available</i></b></label>
                                        <input type="number" min="1" name="" id="oferDisp${cont}" value="${empresaSeleccionada.publicaciones[i].ofertasDisponibles}" class="form-control" aria-describedby="oferDispHelp${cont}">
                                        <small id="oferDispHelp${cont}" class="text-muted">how many offers available you have</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="pricePub${cont}"><b><i class="fa fa-edit"> Price</i></b></label>
                                        <input type="number" min="0.1" steps="0.1" value="${empresaSeleccionada.publicaciones[i].precio}" id="pricePub${cont}" class="form-control" aria-describedby="pricePubHelp${cont}">
                                        <small id="pricePubHelp${cont}" class="text-muted">What is the price?</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="porcent${cont}"><b><i class="fa fa-edit">Discount porcentage</i></b></label>
                                        <input type="number" min="1" max="100" id="porcent${cont}" value="${empresaSeleccionada.publicaciones[i].porcentDesc}" class="form-control" aria-describedby="porcentHelp${cont}">
                                        <small id="porcentHelp${cont}" class="text-muted">discount rate</small>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button onclick="modifPub(${cont},${i});" class="btn btn-sm btn-info float-right mr-3 mb-3"><i class="fa fa-save"> Save Changes</i></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>`;
        cont++;

    }
}

function actualizarEmpresa() {
    let empresaModif = {
        nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
        nombreEmpresa: empresaSeleccionada.nombreEmpresa,
        logoEmpresa: empresaSeleccionada.logoEmpresa,
        banner: empresaSeleccionada.banner,
        pais: empresaSeleccionada.pais,
        direccion: empresaSeleccionada.direccion,
        longitud: empresaSeleccionada.longitud,
        latitud: empresaSeleccionada.latitud,
        tipoEmpresa: empresaSeleccionada.tipoEmpresa,
        nombreUsuario: empresaSeleccionada.nombreUsuario,
        password: empresaSeleccionada.password,
        facebook: empresaSeleccionada.facebook,
        instagram: empresaSeleccionada.instagram,
        twitter: empresaSeleccionada.twitter,
        twitch: empresaSeleccionada.twitch,
        email: empresaSeleccionada.email,
        actual: empresaSeleccionada.actual,
        publicaciones: empresaSeleccionada.publicaciones,
        calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
        tipo: empresaSeleccionada.tipo,
        fechaSignIn: empresaSeleccionada.fechaSignIn,
        registroAcciones: empresaSeleccionada.registroAcciones
    }

    axios({
            url: '../../proyecto-back-end/API/empresas.php',
            method: 'PUT',
            responseType: 'json',
            data: empresaModif
        })
        .then(function(res) {
            console.log(res);
            return res.resultado;
        })
        .catch(function(error) {
            console.error(error);
            return error;
        });
}

function modifPub(cont, indicePub) {
    if (document.getElementById('imaGanga' + cont).value != "") {
        var frm = $('#form' + cont);
        let formData = new FormData(frm[0]);
        console.log(frm[0]);

        axios.post('../../proyecto-front-end/sube.php', formData)
            .then(res => {
                console.log(res.data);
                if (document.getElementById("gangNameEditPublication" + cont).value.length != 0 && document.getElementById("pubDescrip" + cont).value.length != 0) {
                    var modifPub = {
                        tipo: "pub",
                        indice: indicePub,
                        nombreEmpresa: empresaSeleccionada.nombreUsuario,
                        imagenGanga: '../' + res.data,
                        nombreGanga: document.getElementById("gangNameEditPublication" + cont).value,
                        descripcionGanga: document.getElementById("pubDescrip" + cont).value,
                        fechaMax: document.getElementById("pubMaxDat" + cont).value,
                        horaMax: document.getElementById("pubMaxHour" + cont).value,
                        ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
                        horaInicio: empresaSeleccionada.publicaciones[indicePub].horaInicio,
                        fechaInicio: empresaSeleccionada.publicaciones[indicePub].fechaInicio,
                        porcentDesc: document.getElementById("porcent" + cont).value,
                        precio: document.getElementById("pricePub" + cont).value,
                        venta: empresaSeleccionada.publicaciones[indicePub].venta,
                        comentarios: empresaSeleccionada.publicaciones[indicePub].comentarios,
                        pubFavoritaDe: empresaSeleccionada.publicaciones[indicePub].pubFavoritaDe,
                        calificacionPublicacionDe: empresaSeleccionada.publicaciones[indicePub].calificacionPublicacionDe
                    }
                } else if (document.getElementById("gangNameEditPublication" + cont).value.length == 0 && document.getElementById("pubDescrip" + cont).value.length != 0) {
                    var modifPub = {
                        tipo: "pub",
                        indice: indicePub,
                        nombreEmpresa: empresaSeleccionada.nombreUsuario,
                        imagenGanga: '../' + res.data,
                        nombreGanga: empresaSeleccionada.publicaciones[indicePub].nombreGanga,
                        descripcionGanga: document.getElementById("pubDescrip" + cont).value,
                        fechaMax: document.getElementById("pubMaxDat" + cont).value,
                        horaMax: document.getElementById("pubMaxHour" + cont).value,
                        ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
                        horaInicio: empresaSeleccionada.publicaciones[indicePub].horaInicio,
                        fechaInicio: empresaSeleccionada.publicaciones[indicePub].fechaInicio,
                        porcentDesc: document.getElementById("porcent" + cont).value,
                        precio: document.getElementById("pricePub" + cont).value,
                        venta: empresaSeleccionada.publicaciones[indicePub].venta,
                        comentarios: empresaSeleccionada.publicaciones[indicePub].comentarios,
                        pubFavoritaDe: empresaSeleccionada.publicaciones[indicePub].pubFavoritaDe,
                        calificacionPublicacionDe: empresaSeleccionada.publicaciones[indicePub].calificacionPublicacionDe
                    }
                } else if (document.getElementById("pubDescrip" + cont).value.length == 0 && document.getElementById("gangNameEditPublication" + cont).value.length != 0) {
                    var modifPub = {
                        tipo: "pub",
                        indice: indicePub,
                        nombreEmpresa: empresaSeleccionada.nombreUsuario,
                        imagenGanga: '../' + res.data,
                        nombreGanga: document.getElementById("gangNameEditPublication" + cont).value,
                        descripcionGanga: empresaSeleccionada.publicaciones[indicePub].descripcionGanga,
                        fechaMax: document.getElementById("pubMaxDat" + cont).value,
                        horaMax: document.getElementById("pubMaxHour" + cont).value,
                        ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
                        horaInicio: empresaSeleccionada.publicaciones[indicePub].horaInicio,
                        fechaInicio: empresaSeleccionada.publicaciones[indicePub].fechaInicio,
                        porcentDesc: document.getElementById("porcent" + cont).value,
                        precio: document.getElementById("pricePub" + cont).value,
                        venta: empresaSeleccionada.publicaciones[indicePub].venta,
                        comentarios: empresaSeleccionada.publicaciones[indicePub].comentarios,
                        pubFavoritaDe: empresaSeleccionada.publicaciones[indicePub].pubFavoritaDe,
                        calificacionPublicacionDe: empresaSeleccionada.publicaciones[indicePub].calificacionPublicacionDe
                    }
                }
                axios({
                        url: '../../proyecto-back-end/API/empresas.php',
                        method: 'PUT',
                        responseType: 'json',
                        data: modifPub
                    })
                    .then(function(res) {
                        console.log(res)
                        empresaSeleccionada.registroAcciones.push(msjParaRegistro('actualizarPub', empresaSeleccionada.nombreUsuario, modifPub.nombreGanga));
                        actualizarEmpresa();
                    })
                    .catch(function(error) {
                        console.error(error);
                    });

            }).catch(err => {
                console.error(err);
            });

    } else {
        if (document.getElementById("gangNameEditPublication" + cont).value.length != 0 && document.getElementById("pubDescrip" + cont).value.length != 0) {
            var modifPub = {
                tipo: "pub",
                indice: indicePub,
                nombreEmpresa: empresaSeleccionada.nombreUsuario,
                imagenGanga: empresaSeleccionada.publicaciones[indicePub].imagenGanga,
                nombreGanga: document.getElementById("gangNameEditPublication" + cont).value,
                descripcionGanga: document.getElementById("pubDescrip" + cont).value,
                fechaMax: document.getElementById("pubMaxDat" + cont).value,
                horaMax: document.getElementById("pubMaxHour" + cont).value,
                ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
                horaInicio: empresaSeleccionada.publicaciones[indicePub].horaInicio,
                fechaInicio: empresaSeleccionada.publicaciones[indicePub].fechaInicio,
                porcentDesc: document.getElementById("porcent" + cont).value,
                precio: document.getElementById("pricePub" + cont).value,
                venta: empresaSeleccionada.publicaciones[indicePub].venta,
                comentarios: empresaSeleccionada.publicaciones[indicePub].comentarios,
                pubFavoritaDe: empresaSeleccionada.publicaciones[indicePub].pubFavoritaDe,
                calificacionPublicacionDe: empresaSeleccionada.publicaciones[indicePub].calificacionPublicacionDe
            }
        } else if (document.getElementById("gangNameEditPublication" + cont).value.length == 0 && document.getElementById("pubDescrip" + cont).value.length != 0) {
            var modifPub = {
                tipo: "pub",
                indice: indicePub,
                nombreEmpresa: empresaSeleccionada.nombreUsuario,
                imagenGanga: empresaSeleccionada.publicaciones[indicePub].imagenGanga,
                nombreGanga: empresaSeleccionada.publicaciones[indicePub].nombreGanga,
                descripcionGanga: document.getElementById("pubDescrip" + cont).value,
                fechaMax: document.getElementById("pubMaxDat" + cont).value,
                horaMax: document.getElementById("pubMaxHour" + cont).value,
                ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
                horaInicio: empresaSeleccionada.publicaciones[indicePub].horaInicio,
                fechaInicio: empresaSeleccionada.publicaciones[indicePub].fechaInicio,
                porcentDesc: document.getElementById("porcent" + cont).value,
                precio: document.getElementById("pricePub" + cont).value,
                venta: empresaSeleccionada.publicaciones[indicePub].venta,
                comentarios: empresaSeleccionada.publicaciones[indicePub].comentarios,
                pubFavoritaDe: empresaSeleccionada.publicaciones[indicePub].pubFavoritaDe,
                calificacionPublicacionDe: empresaSeleccionada.publicaciones[indicePub].calificacionPublicacionDe
            }
        } else if (document.getElementById("pubDescrip" + cont).value.length == 0 && document.getElementById("gangNameEditPublication" + cont).value.length != 0) {
            var modifPub = {
                tipo: "pub",
                indice: indicePub,
                nombreEmpresa: empresaSeleccionada.nombreUsuario,
                imagenGanga: empresaSeleccionada.publicaciones[indicePub].imagenGanga,
                nombreGanga: document.getElementById("gangNameEditPublication" + cont).value,
                descripcionGanga: empresaSeleccionada.publicaciones[indicePub].descripcionGanga,
                fechaMax: document.getElementById("pubMaxDat" + cont).value,
                horaMax: document.getElementById("pubMaxHour" + cont).value,
                ofertasDisponibles: document.getElementById("oferDisp" + cont).value,
                horaInicio: empresaSeleccionada.publicaciones[indicePub].horaInicio,
                fechaInicio: empresaSeleccionada.publicaciones[indicePub].fechaInicio,
                porcentDesc: document.getElementById("porcent" + cont).value,
                precio: document.getElementById("pricePub" + cont).value,
                venta: empresaSeleccionada.publicaciones[indicePub].venta,
                comentarios: empresaSeleccionada.publicaciones[indicePub].comentarios,
                pubFavoritaDe: empresaSeleccionada.publicaciones[indicePub].pubFavoritaDe,
                calificacionPublicacionDe: empresaSeleccionada.publicaciones[indicePub].calificacionPublicacionDe
            }
        }
        empresaSeleccionada.registroAcciones.push(msjParaRegistro('actualizarPub', empresaSeleccionada.nombreUsuario, modifPub.nombreGanga));
        axios({
                url: '../../proyecto-back-end/API/empresas.php',
                method: 'PUT',
                responseType: 'json',
                data: modifPub
            })
            .then(function(res) {
                console.log(res)
                empresaSeleccionada.registroAcciones.push(msjParaRegistro('actualizarPub', empresaSeleccionada.nombreUsuario, modifPub.nombreGanga));
                actualizarEmpresa();
            })
            .catch(function(error) {
                console.error(error);
            });
    }
}

function generarPerfil() {
    document.getElementById("profile").innerHTML = "";
    let coments = "";
    let respuestas = "";
    for (let i = 0; i < empresaSeleccionada.calificacionEmpresaDe.length; i++) {
        const element = empresaSeleccionada.calificacionEmpresaDe[i];
        respuestas = "";
        for (let j = 0; j < element.respuestasCalifEmpresa.length; j++) {
            const elem = element.respuestasCalifEmpresa[j];
            respuestas +=
                `<hr>
                <div class="container pr-0">
                    <div class="container pr-0">
                        <div class="py-1 pr-0">
                            <div class="fl">
                                <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${elem.imagen}">
                            </div>
                            <div class="row py-0 my-0 px-1">
                                <h5 class="muted my-0 py-0 mr-3">${elem.nomCliente}</h5><span class="muted align-self-end">${elem.fechaRespuesta}</span>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h5 class=""><i class="fa fa-comments-o">${elem.comentCliente}</i></h5>
                        </div>
                    </div>
                </div>
                `;
        }
        coments +=
            `<hr>
            <div class="form-control py-1">
                <div>
                    <div class="fl">
                        <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${element.imagen}">
                    </div>
                    <div class="row py-0 my-0 px-1">
                        <h4 class="muted my-0 py-0 mr-3">${element.nomCliente}</h4><span class="muted align-self-end">${element.fechaCalif}</span><span class="ml-auto">${element.califDeEmp}</span>
                    </div>
                </div>
                <hr>
                <div>
                    <h4><i class="fa fa-comments-o"> ${element.comentCliente}</i></h4>
                </div>
                <div class="py-0 my-0">
                    <button class="btn btn-sm btn-info fin mb-0" data-toggle="collapse" data-target="#comRes${i}" aria-expanded="false" aria-controls="comRes${i}"><i class="fa fa-comment"> See ${element.respuestasCalifEmpresa.length} answers</i></button>
                    <button class="btn btn-sm btn-info align-content-end mb-0" data-toggle="collapse" data-target="#comCalif${i}" aria-expanded="false" aria-controls="comCalif${i}"><i class="fa fa-commenting-o"> Comment</i></button>
                    <div class="collapse" id="comCalif${i}">
                        <div class="card-body m-0">
                            <div class="form-row py-1">
                                <label for="responderCalif${i}"><b><i class="fa fa-commenting-o"> Post</i></b></label>
                                <textarea type="text" id="responderCalif${i}" class="form-control" aria-describedby="responderCalif${i}Help" rows="3" required></textarea>
                                <small id="responderCalif${i}Help" class="text-muted">Answer to the clients</small>
                            </div>
                            <div class="container pb-3">
                                <button onclick="comentCalif('paraComentCalifUser${i}','responderCalif${i}',${i}, 'empresa');" class="btn btn-sm btn-info float-right"><i class="fa fa-commenting-o"> Post</i></button>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="comRes${i}">
                        <div class="card-body m-0">
                            <div id="paraComentCalifUser${i}">
                                ${respuestas}
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
             `;

    }

    document.getElementById("profile").innerHTML =
        `
        <div class="mx-auto col-lg-6 col-md-6 col-sm-12 col-12 px-0">
            <div class="card perfil">
                <div class="card-header">
                    <div>
                        <img src="${empresaSeleccionada.logoEmpresa}" class="card-img" alt="Imagen Empresa">           
                    </div>
                </div> 
                <div class="card-body">
                    <div class="form-control py-0">
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-institution"></i><b>Nombre:</b> ${empresaSeleccionada.nombreEmpresa}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-institution"></i><b>Descripción:</b> ${empresaSeleccionada.tipoEmpresa}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-user-o"></i><b>Nombre de Usuario:</b> ${empresaSeleccionada.nombreUsuario}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-handshake-o"></i><b>Publicaciones:</b> ${empresaSeleccionada.publicaciones.length}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-facebook"></i><b>Facebook:</b> ${empresaSeleccionada.facebook}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-instagram"></i><b>Instagram:</b> ${empresaSeleccionada.instagram}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-twitter"></i><b>Twitter:</b> ${empresaSeleccionada.twitter}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-twitch"></i><b>Twitch:</b> ${empresaSeleccionada.twitch}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-envelop"></i><b>Email:</b> ${empresaSeleccionada.email}</h4>
                            </div>
                        </div>
                        <div class="form-control">
                            <div class="form-group">
                                <h4 class="form-control"><i class="fa fa-calendar"></i><b>With Us Since:</b> ${empresaSeleccionada.fechaSignIn}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-info ml-4" id="verComentars" type="button" data-toggle="collapse" data-target="#comentars" aria-expanded="false" aria-controls="contCard">
                        <i class="fa fa-eye"> View Ratings</i>
                    </button>
                    <div class="collapse" id="comentars">
                        <div class="card-body m-0">
                            <h4><b><i class="fa fa-comment-o"></i>Comments</b></h4>
                            <div id="paraComentCalifUser">
                                ${coments}
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>`;
}

function generarEditPerfil() {
    document.getElementById("editEmpresa").innerHTML = "";
    document.getElementById("editEmpresa").innerHTML +=
        `<div class="card my-4">
            <div class="card-body pb-0 mb-0">
                <div class="form-control py-0">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="form-row py-1">
                                    <label for="institutionName"><b><i class="fa fa-institution"> Company Name</i></b></label>
                                    <input type="text" id="institutionName" value="${empresaSeleccionada.nombreEmpresa}" style="border-color: green; color: green;" class="form-control" aria-describedby="institutionNameHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('institutionName')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}"
                                        required><small id="institutionNameHelp" class="text-muted ">Ganguitas</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="institutionDescription"><b><i class="fa fa-institution"> Company Description</i></b></label>
                                    <input type="text" id="institutionDescription" value="${empresaSeleccionada.tipoEmpresa}" style="border-color: green; color: green;" class="form-control" aria-describedby="institutionDescriptionHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('institutionDescription')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}"
                                        required><small id="institutionDescriptionHelp" class="text-muted ">What describes your company as example "fast food"</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="direcComp"><b><i class="fa fa-map-marker"> Company Address</i></b></label>
                                    <input type="text" id="direcComp" value="${empresaSeleccionada.direccion}" style="border-color: green; color: green;" class="form-control" aria-describedby="direcCompHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('direcComp')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,50}"
                                        required><small id="direcCompHelp" class="text-muted ">Put your company address as an example: Col. Miramontes</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="longComp"><b><i class="fa fa-location-arrow"> Company longitude</i></b></label>
                                    <input type="text" id="longComp" value="${empresaSeleccionada.longitud}" style="border-color: green; color: green;" class="form-control" aria-describedby="longCompHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('longComp')" pattern="[0-9.]{5,50}" required><small id="longCompHelp"
                                        class="text-muted ">Put your company longitude as an example: 41.40338</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="latComp"><b><i class="fa fa-location-arrow"> Company latitude</i></b></label>
                                    <input type="text" id="latComp" value="${empresaSeleccionada.latitud}" style="border-color: green; color: green;" class="form-control" aria-describedby="latCompHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('latComp')" pattern="[0-9.]{5,50}" required><small id="latCompHelp" class="text-muted ">Put your company latitude as an example: 2.17403</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="emailComp"><b><i class="fa fa-envelope"> Email</i></b></label>
                                    <input type="email" id="emailComp" value="${empresaSeleccionada.email}" style="border-color: green; color: green;" class="form-control" aria-describedby="emailHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('emailComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                    <small id="emailHelp" class="text-muted ">ganguitas@gmail.com</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="facebookComp"><b><i class="fa fa-facebook"> Facebook</i></b></label>
                                    <input type="email" id="facebookComp" value="${empresaSeleccionada.facebook}" style="border-color: green; color: green;" class="form-control" aria-describedby="facebookHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('facebookComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                    <small id="facebookHelp" class="text-muted ">ganguitas_facebook@gmail.com</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="instagramComp"><b><i class="fa fa-instagram"> Instagram</i></b></label>
                                    <input type="email" id="instagramComp" value="${empresaSeleccionada.instagram}" style="border-color: green; color: green;" class="form-control" aria-describedby="instagramHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('instagramComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                    <small id="instagramHelp" class="text-muted ">ganguitas_instagram@gmail.com</small>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-row py-1">
                                    <label for="twitterComp"><b><i class="fa fa-twitter"> Twitter</i></b></label>
                                    <input type="email" id="twitterComp" value="${empresaSeleccionada.twitter}" style="border-color: green; color: green;" class="form-control" aria-describedby="twitterHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('twitterComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                    <small id="twitterHelp" class="text-muted ">ganguitas_twitter@gmail.com</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="twitchComp"><b><i class="fa fa-twitch"> Twitch</i></b></label>
                                    <input type="email" id="twitchComp" value="${empresaSeleccionada.twitch}" style="border-color: green; color: green;" class="form-control" aria-describedby="twitchHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('twitchComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                    <small id="twitchHelp" class="text-muted ">ganguitas_twitch@gmail.com</small>
                                </div>
                                <div class="form-row py-1 ">
                                    <label for="userComp"><b><i class="fa fa-user"> User Name</i></b></label>
                                    <input type="text" id="userComp" value="${empresaSeleccionada.nombreUsuario}" style="border-color: green; color: green;" class="form-control" aria-describedby="userCompHelp" onfocus="limpiarAlertas('alertComp')" oninput="validarUser('userComp','empresa')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
                                    <small id="userCompHelp" class="text-muted"> Put the name you want as a user</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="newPasswordComp"><b><i class="fa fa-lock"> New Password</i></b></label>
                                    <input type="password" id="newPasswordComp" class="form-control" aria-describedby="newPasswordHelp" onfocus="limpiarAlertas('alertComp')" oninput="validacion('newPasswordComp')" pattern="[A-Za-z0-9!.?-]{8,20}" required autocomplete="on">
                                    <small id="newPasswordHelp" class="text-muted">Must be 8-20 characters long, choose a password with at least one capital letter and a number at the end as example Ganguitas1.</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="confirmNewPassComp"><b><i class="fa fa-lock"> Confirm your New Password</i></b></label>
                                    <input type="password" id="confirmNewPassComp" class="form-control" aria-describedby="confirmHelp" onfocus="limpiarAlertas('alertComp')" oninput="alertar('newPasswordComp','confirmNewPassComp');" pattern="[A-Za-z0-9!.?-]{8,20}" required autocomplete="on">
                                    <small id="confirmHelp" class="text-muted">Repeat your new password.</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="form2"><b><i class="fa fa-file-photo-o"> Logo Company</i></b></label>
                                    <form id="form2" name="form2" method="post" enctype="multipart/form-data" aria-describedby="form2Help">
                                        <input type="file" name="imagen" id="imagenCompany" accept="image/*" class="form-control">
                                    </form>
                                    <small id="form2Help" class="text-muted"> Here goes your company logo</small>
                                </div>
                                <div class="form-row py-1">
                                    <label for="form3"><b><i class="fa fa-file-photo-o"> Banner Company</i></b></label>
                                    <form id="form3" name="form3" method="post" enctype="multipart/form-data" aria-describedby="form3Help">
                                        <input type="file" name="imagen" id="bannerCompany" accept="image/*" class="form-control">
                                    </form>
                                    <small id="form3Help" class="text-muted"> Here goes your company Banner</small>
                                </div>
                                <hr>
                                <div class="form-row py-1 ">
                                    <label for="passwordComp"><b><i class="fa fa-lock ">Actual Password</i></b></label>
                                    <input type="password" id="passwordComp" class="form-control" aria-describedby="passwordHelp" onfocus="limpiarAlertas('alertComp')" oninput="verifPassEmp('passwordComp')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                    <small id="passwordHelp" class="text-muted">You most privide your actual password to confirm the changes.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div id="alertComp">
                
                </div>
                <button onclick="savePerfil();" class="btn btn-sm btn-info float-right mr-2"><i class="fa fa-save"> Save Changes</i></button>
            </div>
        </div>`;
}

function savePerfil() {
    if (verifPassUser == false) {
        document.getElementById("alertComp").innerHTML = "";
        document.getElementById("alertComp").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Password do not match!, </strong>Please make sure it is your current password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    } else if (document.getElementById('imagenCompany').value != "") {
        console.log("en elseImagenCompany imagenCompany " + document.getElementById('imagenCompany').value);
        console.log("en elseImagenCompany bannerCompany " + document.getElementById('bannerCompany').value);
        var frm = $('#form2');
        let formData = new FormData(frm[0]);
        axios.post('../../proyecto-front-end/sube', formData)
            .then(res => {
                //console.log(res);
                if (document.getElementById('bannerCompany').value != "") {
                    console.log("en elsebannepenult imagenCompany " + document.getElementById('imagenCompany').value);
                    console.log("en elsebannepenult bannerCompany " + document.getElementById('bannerCompany').value);
                    var frm1 = $('#form3');
                    let frmData = new FormData(frm1[0]);
                    axios.post('../../proyecto-front-end/sube', frmData)
                        .then(resa => {
                            //console.log(res);
                            if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && verifPass && verifPassUser) {
                                var modifComp = {
                                    nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                                    nombreEmpresa: document.getElementById("institutionName").value,
                                    logoEmpresa: '../' + res.data,
                                    banner: '../' + resa.data,
                                    pais: empresaSeleccionada.pais,
                                    direccion: document.getElementById("direcComp").value,
                                    longitud: document.getElementById("longComp").value,
                                    latitud: document.getElementById("latComp").value,
                                    tipoEmpresa: document.getElementById("institutionDescription").value,
                                    nombreUsuario: document.getElementById("userComp").value,
                                    password: document.getElementById("newPasswordComp").value,
                                    facebook: document.getElementById("facebookComp").value,
                                    instagram: document.getElementById("instagramComp").value,
                                    twitter: document.getElementById("twitterComp").value,
                                    twitch: document.getElementById("twitchComp").value,
                                    email: document.getElementById("emailComp").value,
                                    actual: empresaSeleccionada.actual,
                                    publicaciones: empresaSeleccionada.publicaciones,
                                    calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
                                    tipo: empresaSeleccionada.tipo,
                                    fechaSignIn: empresaSeleccionada.fechaSignIn,
                                    registroAcciones: empresaSeleccionada.registroAcciones
                                }

                                axios({
                                        url: '../../proyecto-back-end/API/empresas.php',
                                        method: 'PUT',
                                        responseType: 'json',
                                        data: modifComp
                                    })
                                    .then(function() {
                                        empresaSeleccionada = modifComp;
                                        generarBanner();
                                        generarNombre();
                                        generarPerfil();

                                        document.getElementById("alertComp").innerHTML = "";
                                        document.getElementById("alertComp").innerHTML +=
                                            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Successful!, </strong> Your information has been updated.
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>`;
                                    })
                                    .catch(function(error) {
                                        console.error(error);
                                    });
                            } else if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && document.getElementById('confirmNewPassComp').value, length == 0 && document.getElementById('newPasswordComp').value, length == 0 && verifPassUser) {
                                var modifComp = {
                                    nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                                    nombreEmpresa: document.getElementById("institutionName").value,
                                    logoEmpresa: '../' + res.data,
                                    banner: '../' + resa.data,
                                    pais: empresaSeleccionada.pais,
                                    direccion: document.getElementById("direcComp").value,
                                    longitud: document.getElementById("longComp").value,
                                    latitud: document.getElementById("latComp").value,
                                    tipoEmpresa: document.getElementById("institutionDescription").value,
                                    nombreUsuario: document.getElementById("userComp").value,
                                    password: empresaSeleccionada.password,
                                    facebook: document.getElementById("facebookComp").value,
                                    instagram: document.getElementById("instagramComp").value,
                                    twitter: document.getElementById("twitterComp").value,
                                    twitch: document.getElementById("twitchComp").value,
                                    email: document.getElementById("emailComp").value,
                                    actual: empresaSeleccionada.actual,
                                    publicaciones: empresaSeleccionada.publicaciones,
                                    calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
                                    tipo: empresaSeleccionada.tipo,
                                    fechaSignIn: empresaSeleccionada.fechaSignIn,
                                    registroAcciones: empresaSeleccionada.registroAcciones
                                }

                                axios({
                                        url: '../../proyecto-back-end/API/empresas.php',
                                        method: 'PUT',
                                        responseType: 'json',
                                        data: modifComp
                                    })
                                    .then(function() {
                                        empresaSeleccionada = modifComp;
                                        generarBanner();
                                        generarNombre();
                                        generarPerfil();
                                        document.getElementById("alertComp").innerHTML = "";
                                        document.getElementById("alertComp").innerHTML +=
                                            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Successful!, </strong> Your information has been updated.
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>`;
                                    })
                                    .catch(function(error) {
                                        console.error(error);
                                    });
                            } else if (verifUser == false && document.getElementById("userComp").value.length >= 3) {
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>User is already in use!, </strong>Please try with another user name.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            } else if (verifPass == false && document.getElementById("passwordComp").value.length >= 8) {
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Passwords do not match!, </strong>Please check the passwords.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;

                            } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                                document.getElementById("passwordComp").value == 0) {
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
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
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && verifPass && verifPassUser) {
                        var modifComp = {
                            nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: '../' + res.data,
                            banner: empresaSeleccionada.banner,
                            pais: empresaSeleccionada.pais,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: document.getElementById("newPasswordComp").value,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: empresaSeleccionada.actual,
                            publicaciones: empresaSeleccionada.publicaciones,
                            calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
                            tipo: empresaSeleccionada.tipo,
                            fechaSignIn: empresaSeleccionada.fechaSignIn,
                            registroAcciones: empresaSeleccionada.registroAcciones
                        }

                        axios({
                                url: '../../proyecto-back-end/API/empresas.php',
                                method: 'PUT',
                                responseType: 'json',
                                data: modifComp
                            })
                            .then(function() {
                                empresaSeleccionada = modifComp;
                                generarNombre();
                                generarPerfil();
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Successful!, </strong> Your information has been updated.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    }
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && document.getElementById('confirmNewPassComp').value, length == 0 && document.getElementById('newPasswordComp').value, length == 0 && verifPassUser) {
                        var modifComp = {
                            nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: '../' + res.data,
                            banner: empresaSeleccionada.banner,
                            pais: empresaSeleccionada.pais,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: empresaSeleccionada.password,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: empresaSeleccionada.actual,
                            publicaciones: empresaSeleccionada.publicaciones,
                            calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
                            tipo: empresaSeleccionada.tipo,
                            fechaSignIn: empresaSeleccionada.fechaSignIn,
                            registroAcciones: empresaSeleccionada.registroAcciones
                        }

                        axios({
                                url: '../../proyecto-back-end/API/empresas.php',
                                method: 'PUT',
                                responseType: 'json',
                                data: modifComp
                            })
                            .then(function() {
                                empresaSeleccionada = modifComp;
                                generarNombre();
                                generarPerfil();
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Successful!, </strong> Your information has been updated.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (verifUser == false && document.getElementById("userComp").value.length >= 3) {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>User is already in use!, </strong>Please try with another user name.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (verifPass == false && document.getElementById("passwordComp").value.length >= 8) {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Passwords do not match!, </strong>Please check the passwords.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

                    } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                        document.getElementById("passwordComp").value == 0) {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
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
        if (document.getElementById('bannerCompany').value != "") {
            console.log("en elsebannerCompany imagenCompany " + document.getElementById('imagenCompany').value);
            console.log("en elsebannerCompany bannerCompany " + document.getElementById('bannerCompany').value);
            var frm1 = $('#form3');
            let frmData = new frmData(frm1[0]);
            axios.post('../../proyecto-front-end/sube', formData)
                .then(resa => {
                    //console.log(res);
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && verifPass && verifPassUser) {
                        var modifComp = {
                            nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: empresaSeleccionada.logoEmpresa,
                            banner: '../' + resa.data,
                            pais: empresaSeleccionada.pais,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: document.getElementById("newPasswordComp").value,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: empresaSeleccionada.actual,
                            publicaciones: empresaSeleccionada.publicaciones,
                            calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
                            tipo: empresaSeleccionada.tipo,
                            fechaSignIn: empresaSeleccionada.fechaSignIn,
                            registroAcciones: empresaSeleccionada.registroAcciones
                        }

                        axios({
                                url: '../../proyecto-back-end/API/empresas.php',
                                method: 'PUT',
                                responseType: 'json',
                                data: modifComp
                            })
                            .then(function() {
                                empresaSeleccionada = modifComp;
                                generarBanner();
                                generarNombre();
                                generarPerfil();
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Successful!, </strong> Your information has been updated.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && document.getElementById('confirmNewPassComp').value, length == 0 && document.getElementById('newPasswordComp').value, length == 0 && verifPassUser) {
                        var modifComp = {
                            nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: empresaSeleccionada.logoEmpresa,
                            banner: empresaSeleccionada.banner,
                            pais: empresaSeleccionada.pais,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: empresaSeleccionada.password,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: empresaSeleccionada.actual,
                            publicaciones: empresaSeleccionada.publicaciones,
                            calificacionEmpresaDe: empresaSeleccionada.calificacionEmpresaDe,
                            tipo: empresaSeleccionada.tipo,
                            fechaSignIn: empresaSeleccionada.fechaSignIn,
                            registroAcciones: empresaSeleccionada.registroAcciones
                        }

                        axios({
                                url: '../../proyecto-back-end/API/empresas.php',
                                method: 'PUT',
                                responseType: 'json',
                                data: modifComp
                            })
                            .then(function() {
                                empresaSeleccionada = modifComp;
                                generarBanner();
                                generarNombre();
                                generarPerfil();
                                document.getElementById("alertComp").innerHTML = "";
                                document.getElementById("alertComp").innerHTML +=
                                    `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Successful!, </strong> Your information has been updated.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (verifUser == false && document.getElementById("userComp").value.length >= 3) {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>User is already in use!, </strong>Please try with another user name.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (verifPass == false && document.getElementById("passwordComp").value.length >= 8) {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Passwords do not match!, </strong>Please check the passwords.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

                    } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                        document.getElementById("passwordComp").value == 0) {
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
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
            console.log("en elseFinal imagenCompany " + document.getElementById('imagenCompany').value);
            console.log("en elseFinal bannerCompany " + document.getElementById('bannerCompany').value);
            if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser && verifPass) {
                var modifComp = {
                    nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                    nombreEmpresa: document.getElementById("institutionName").value,
                    logoEmpresa: empresaSeleccionada.logoEmpresa,
                    banner: empresaSeleccionada.banner,
                    pais: empresaSeleccionada.pais,
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
                        url: '../../proyecto-back-end/API/empresas.php',
                        method: 'PUT',
                        responseType: 'json',
                        data: modifComp
                    })
                    .then(function() {
                        empresaSeleccionada = modifComp;
                        generarNombre();
                        generarPerfil();
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Successful!, </strong> Your information has been updated.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUser == null && verifPass == null) {
                var modifComp = {
                    nombreUsuarioModif: empresaSeleccionada.nombreUsuario,
                    nombreEmpresa: document.getElementById("institutionName").value,
                    logoEmpresa: empresaSeleccionada.logoEmpresa,
                    banner: empresaSeleccionada.banner,
                    pais: empresaSeleccionada.pais,
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
                        url: '../../proyecto-back-end/API/empresas.php',
                        method: 'PUT',
                        responseType: 'json',
                        data: modifComp
                    })
                    .then(function() {
                        empresaSeleccionada = modifComp;
                        generarNombre();
                        generarPerfil();
                        document.getElementById("alertComp").innerHTML = "";
                        document.getElementById("alertComp").innerHTML +=
                            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Successful!, </strong> Your information has been updated.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else if (verifUser == false && document.getElementById("userComp").value.length >= 3) {
                document.getElementById("alertComp").innerHTML = "";
                document.getElementById("alertComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>User is already in use!, </strong>Please try with another user name.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else if (verifPass == false && document.getElementById("passwordComp").value.length >= 8) {
                document.getElementById("alertComp").innerHTML = "";
                document.getElementById("alertComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Passwords do not match!, </strong>Please check the passwords.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;

            } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                document.getElementById("alertComp").innerHTML = "";
                document.getElementById("alertComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                document.getElementById("passwordComp").value == 0) {
                document.getElementById("alertComp").innerHTML = "";
                document.getElementById("alertComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Form incomplete!, </strong>Please fill all the fields.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else {
                console.log("algo anda mal verifUser==" + verifUser + " verifPass==" + verifPass);

            }
        }
    }
}

function generarAddPub() {
    document.getElementById("addCard").innerHTML = "";
    document.getElementById("addCard").innerHTML +=
        `<div class="card my-5">
            <div class="card-body">
                <div class="form-control">
                    <div class="form-control py-1">
                        <label for="form4"><b><i class="fa fa-file-photo-o"> Ganga Image</i></b></label>
                        <form id="form4" name="form4" method="post" enctype="multipart/form-data" aria-describedby="form4Help">
                            <input type="file" name="imagen" id="imaGanga" accept="image/*" class="form-control">
                        </form>
                        <small id="form4Help" class="text-muted"> Here goes the image of the post</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="gangaNameCard"><b><i class="fa fa-edit"> Publication Name</i></b></label>
                        <textarea id="gangaNameCard" cols="30" rows="1" class="form-control" aria-describedby="gangaNameCardHelp" oninput="validacion('gangaNameCard')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9-]+)*$" required></textarea>
                        <small id="gangaNameCardHelp" class="text-muted">Publication Name</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="pubDescripAdd"><b><i class="fa fa-edit"> Publication Description</i></b></label>
                        <textarea id="pubDescripAdd" cols="30" rows="3" class="form-control" aria-describedby="pubDescripAddHelp" oninput="validacion('pubDescripAdd')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9-]+)*$" required></textarea>
                        <small id="pubDescripAddHelp" class="text-muted">Information of the publication</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="pubMaxDat"><b><i class="fa fa-edit"> Max date</i></b></label>
                        <input type="date" id="pubMaxDat" value="${fechaActual()}" min="${fechaActual()}" class="form-control" aria-describedby="pubMaxDatHelp" onchange="validacion('pubMaxDat')" required>
                        <small id="pubMaxDatHelp" class="text-muted">Publication max date</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="pubMaxHour"><b><i class="fa fa-edit"> Max Hour</i></b></label>
                        <input type="time" id="pubMaxHour" class="form-control" aria-describedby="pubMaxHourHelp" onchange="validacion('pubMaxHour')" required>
                        <small id="pubMaxHourHelp" class="text-muted">Publication max hour</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="oferDisp"><b><i class="fa fa-edit"> Offers available</i></b></label>
                        <input type="number" min="1" value="1" id="oferDisp" class="form-control" aria-describedby="oferDispHelp" onchange="validacion('oferDisp')" required>
                        <small id="oferDispHelp" class="text-muted">how many offers available you have</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="porcent"><b><i class="fa fa-edit">Discount porcentage</i></b></label>
                        <input type="number" min="1" max="100" value="1" name="" id="porcent" class="form-control" aria-describedby="porcentHelp" onchange="validacion('porcen')" required>
                        <small id="porcentHelp" class="text-muted">discount rate</small>
                    </div>
                    <div class="form-control py-1">
                        <label for="pubPrecio"><b><i class="fa fa-edit"> Price</i></b></label>
                        <input type="number" id="pubPrecio" value="1.00" min="0.1" step="0.1" class="form-control" aria-describedby="pubPrecioHelp" oninput="validacion('pubPrecio')" pattern="[0-9.]" required></input>
                        <small id="pubPrecioHelp" class="text-muted">Publication Price in dollars</small>
                    </div>
                </div>
            </div>
            <div id="alertPubNueva">
            
            </div>
            <div class="card-footer">
                <button onclick="savePub();" class="btn btn-sm btn-info float-right mr-3"><i class="fa fa-save"> post offer</i></button>
            </div>
        </div>`;
}

function validarTiempos(id) {
    var hora;
    if (document.getElementById(id).value == fechaActual()) {
        hora = horaMin();
    } else if (document.getElementById(id).value > fechaActual()) {
        hora = "01:00";
    }
    return hora;
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

function savePub() {
    if (document.getElementById('imaGanga').value != "") {
        var frm = $('#form4');
        let formData = new FormData(frm[0]);
        console.log(frm[0]);

        axios.post('../../proyecto-front-end/sube.php', formData)
            .then(res => {
                console.log(res.data);
                var nuevaPub = {
                    nombreEmpresa: empresaSeleccionada.nombreUsuario,
                    imagenGanga: '../' + res.data,
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
                    pubFavoritaDe: [],
                    calificacionPublicacionDe: []
                }
                empresaSeleccionada.publicaciones.push(nuevaPub);
                empresaSeleccionada.registroAcciones.push(msjParaRegistro('nuevaPub', empresaSeleccionada.nombreUsuario, nuevaPub.nombreGanga));
                if (actualizarEmpresa() == 'actualizado') {
                    generarPublicaciones();
                }
            }).catch(err => {
                console.error(err);
            });

    } else if (document.getElementById("gangaNameCard").value.length != 0 && document.getElementById("pubDescripAdd").value.length != 0) {
        var nuevaPub = {
            nombreEmpresa: empresaSeleccionada.nombreUsuario,
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
            pubFavoritaDe: [],
            calificacionPublicacionDe: []
        }
        empresaSeleccionada.publicaciones.push(nuevaPub);
        empresaSeleccionada.registroAcciones.push(msjParaRegistro('nuevaPub', empresaSeleccionada.nombreUsuario, nuevaPub.nombreGanga));
        actualizarEmpresa();
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
    if (id == 'pubMaxDat') {
        document.getElementById("alertPubNueva").innerHTML = "";
        if (elem.checkValidity()) {
            document.getElementById("pubMaxHour").value = validarTiempos(id);
            document.getElementById("pubMaxHour").min = validarTiempos(id);
            elem.style.borderColor = "green";
            elem.style.color = "green";
        }
    } else if (id == 'newPasswordComp') {
        document.getElementById('confirmNewPassComp').value = "";
        alertar("newPasswordComp", "confirmNewPassComp");
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

function limpiarAlertas(id) {
    document.getElementById(id).innerHTML = "";
}

function cambiar(id) {
    var elem = document.getElementById(id);
    elem.style.borderColor = "green";
    elem.style.color = "green";
}

function validarUser(id, descripcion) {
    var elem = document.getElementById(id);
    axios({
            url: '../../proyecto-back-end/API/empresas',
            method: 'GET',
            responseType: 'json',
            params: {
                tipo: descripcion,
                nombUs: elem.value
            }
        })
        .then(function(res) {
            if (res.resultado == "encontrado") {
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
            } else if (res.resultado == "noEncontrado") {
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
            if (verifUser == false) {
                axios({
                        url: '../../proyecto-back-end/API/usuarios',
                        method: 'GET',
                        responseType: 'json',
                        params: {
                            tipo: 'cliente',
                            nombUs: elem.value
                        }
                    })
                    .then(function(res) {
                        if (res.resultado == "encontrado") {
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
                        } else if (res.resultado == "noEncontrado") {
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
                        if (verifUser == false) {

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

function verifPassEmp(id) {
    if (empresaSeleccionada.password == document.getElementById(id).value) {
        verifPassUser = true;
    } else {
        verifPassUser = false;
    }
}

function comentCalif(idDiv, id, indiceCalif, tipo) {
    if (tipo == "empresa") {
        if (document.getElementById(id).value.length != 0) {
            let nuevoComenta = {
                imagen: empresaSeleccionada.logoEmpresa,
                nomCliente: empresaSeleccionada.nombreUsuario,
                comentCliente: document.getElementById(id).value,
                fechaRespuesta: fechaActual()
            }
            empresaSeleccionada.calificacionEmpresaDe[indiceCalif].respuestasCalifEmpresa.push(nuevoComenta);
            actualizarEmpresa();
            document.getElementById(idDiv).innerHTML +=
                `
                <div class="form-control py-1" style="background-color: bisque;">
                    <div>
                        <div class="fl">
                            <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${empresaSeleccionada.logoEmpresa}">
                        </div>
                        <div class="row py-0 my-0 px-1">
                            <h4 class="muted my-0 py-0 mr-3 ml-3">${nuevoComenta.nomCliente}</h4><span class="muted align-self-end">${nuevoComenta.fechaRespuesta}</span>
                        </div>
                    </div><hr>
                    <div>
                        <h4><i class="fa fa-comments-o"> ${nuevoComenta.comentCliente}</i></h4>
                    </div>
                </div>`;


            document.getElementById(id).value = "";
        }
    } else if (tipo == "pub") {
        if (document.getElementById(id).value.length != 0) {
            let nuevoComenta = {
                imagen: empresaSeleccionada.logoEmpresa,
                nomCliente: empresaSeleccionada.nombreUsuario,
                comentCliente: document.getElementById(id).value,
                fechaRespuesta: fechaActual()
            }
            empresaSeleccionada.calificacionPublicacionDe[indiceCalif].respuestasCalifPub.push(nuevoComenta);
            actualizarEmpresa();
            document.getElementById(idDiv).innerHTML +=
                `
                <div class="form-control py-1" style="background-color: bisque;">
                    <div>
                        <div class="fl">
                            <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${empresaSeleccionada.logoEmpresa}">
                        </div>
                        <div class="row py-0 my-0 px-1">
                            <h4 class="muted my-0 py-0 mr-3 ml-3">${nuevoComenta.nomCliente}</h4><span class="muted align-self-end">${nuevoComenta.fechaRespuesta}</span>
                        </div>
                    </div><hr>
                    <div>
                        <h4><i class="fa fa-comments-o"> ${nuevoComenta.comentCliente}</i></h4>
                    </div>
                </div>`;


            document.getElementById(id).value = "";

        }
    }

}

function logOut() {
    empresaSeleccionada.actual = false;
    localStorage.setItem("empresas", JSON.stringify(empresas));
}

function msjParaRegistro(descripcion, nombre, nombrePub) {
    let f = new Date();
    let msj;
    if (descripcion == "actualizar") {
        msj = {
            registro: "The user " + nombre + " was updated with an update date: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "logOut") {
        msj = {
            cierreSesion: "The user " + nombre + " closed session with session closing date: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "nuevaPub") {
        msj = {
            nuevaPub: "The user " + nombre + " created a new publication with name " + nombrePub + " and creation date: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "actualizarPub") {
        msj = {
            actualizarPub: "The user " + nombre + " updated the publication with the name " + nombrePub + " with an update date: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "actualizarEmp") {
        msj = {
            actualizarPub: "The user " + nombre + " updated the information with an update date: " + fechaActual() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
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