function verifSelect(id1, id2) {
    let elem1 = document.getElementById(id1);
    let elem2 = document.getElementById(id2);
    if (elem1.value == "Other") {
        elem2.style.display = "block";
    } else {
        elem2.style.display = "none";
    }
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