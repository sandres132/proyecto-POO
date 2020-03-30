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


function actual() {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].usuarioCliente == document.getElementById("userName").value) {
            if (clientes[i].passwordCliente == document.getElementById("password").value) {
                clientes[i].actual = true;
                clienteSeleccionado = clientes[i].usuarioCliente;
                localStorage.setItem("clientes", JSON.stringify(clientes));

            } else {
                alert("Contraseña invalida");
                break;
            }
        } else {
            alert("Usuario inexistente");
            break;
        }
    }
}

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
})