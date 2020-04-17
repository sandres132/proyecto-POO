var localStorage = window.localStorage;
var empresas;
var clientes;
var selec;
var selecciono;
var verifUser = false;
var verifPass = false;

//llena la variable clientes con los clientes existentes
function obtenerClientes() {
    let urlencoded = `tipo=cliente`;
    /*$.ajax({
        url: '../../proyecto-back-end/API/usuarios.php',
        method: 'get',
        data: urlencoded,
        dataType: 'json',
        success: function(res) {
            clientes = res;
            console.log(clientes);
        },
        error: function(error) {
            console.error(error);
        }

    });*/
    axios({
        method: 'GET',
        url: '../../proyecto-back-end/API/usuarios.php',
        responseType: 'json',
        params: { tipo: "cliente" }
    }).then(function(res) {
        clientes = res;
        console.log(clientes);
    }).catch(function(error) {
        console.error(error);
    });
}
obtenerClientes();

//llena la variable empresas con las empresas existentes
function obtenerEmpresas() {
    let urlencoded = `tipo=empresa`;
    /*$.ajax({
        url: '../../proyecto-back-end/API/usuarios.php',
        method: 'GET',
        data: urlencoded,
        dataType: 'json',
        success: function(res) {
            empresas = res;
            console.log(empresas);
        },
        error: function(error) {
            console.error(error);
        }
    });*/
    axios({
        url: '../../proyecto-back-end/API/usuarios.php',
        method: 'get',
        responseType: 'json',
        params: { tipo: "empresa" }
    }).then(function(res) {
        empresas = res;
        console.log(empresas);
    }).catch(function(err) {
        console.error(err);
    });
}
obtenerEmpresas();


//funcion para validar si es usuario o empresa registrada
function validar(id) {
    document.getElementById("alertLog").innerHTML = "";
    var elem = document.getElementById(id);
    //aqui revisa si lo que validara sera un usuario o password
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
                console.log("entro con passCli " + elem.value);
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
                selec.actual = true;
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