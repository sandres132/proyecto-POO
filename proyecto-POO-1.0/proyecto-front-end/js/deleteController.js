function verif() {
    if (document.getElementById("experience").value == "nada" || document.getElementById("nombre").value == "" || document.getElementById("text").value == "") {
        document.getElementById("submit").classList.add("disabled");
        document.getElementById("submit").classList.add("btn-danger");
    } else {
        document.getElementById("submit").classList.remove("disabled");
        document.getElementById("submit").classList.remove("btn-danger");
        document.getElementById("submit").classList.add("btn-info");
    }
}

function subirComentario() {
    let variableNombre = document.getElementById("nombre").value;
    let variableSelect = document.getElementById("experience").value;
    let variableText = document.getElementById("text").value;
    var com = {
        tipo: "comentario",
        nombre: variableNombre,
        titulo: variableSelect,
        text: variableText
    }
    console.log(JSON.stringify(com));

    axios({
            url: '../../proyecto-back-end/API/empresas.php',
            method: 'PUT',
            responseType: 'json',
            data: com
        })
        .then(res => {
            console.log(res);
            document.getElementById("nombre").value = "";
            document.getElementById("experience").value = "";
            document.getElementById("text").value = "";
            document.getElementById("submit").classList.add("disabled");
            document.getElementById("submit").classList.add("btn-danger");

        })
        .catch(function(error) {
            console.error(error);
        });

}