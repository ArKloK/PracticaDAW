let menu = [{name: "Inicio", url: "index.html", options: []},
    {name: "Articulos", url: "articulos.html", options: [{name: "PC", url: "", options: []},
            {name: "PS4", url: "", options: []},
            {name: "Xbox One", url: "", options: []},
            {name: "Otros", url: "", options: []}]},
    {name: "Publicar", url: "publicar_articulos.html", options: []}
];
let menuHTML = '<div class="container-fluid"> ';
menuHTML += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false"> ';
menuHTML += '<span class="navbar-toggler-icon"></span>';
menuHTML += '</button>';

menuHTML += '<div class="collapse navbar-collapse" id="menu">';
menuHTML += '<ul class="navbar-nav">';
menuHTML += '<li class="navbar-nav">';
menuHTML += '<a href="index.html">'
menuHTML += '<img src="img/Plantilla 1.png" alt="Imagen Logo" width="40"/>'
menuHTML += '</a></li>';

for (let i in menu) {
    if (menu[i].options.length > 0) {
        menuHTML += "<li class = 'nav-item dropdown'>";
        for (let j in menu[i].options) {
            if (j == 0) {
                menuHTML += "<a href='#' class='nav-link dropdown-toggle text-dark  me-5 ms-5' id='menuproductos' role='button' data-bs-toggle='dropdown' aria-expanded='false'>" + menu[i].name + "</a>";
                menuHTML += '<ul class="dropdown-menu" aria-labelledby="menuproductos">';
            }

            menuHTML += "<li><a href='#' class='dropdown-item'>" + menu[i].options[j].name+ "</a></li>";

            if (j == menu[i].options.length - 1) {
                menuHTML += "</ul>";
                menuHTML += "</li>";
            }
        }
    } else {
        menuHTML += "<li class='nav-item me-5 ms-5'><a class='nav-link text-dark' href='" + menu[i].url + "'> " + menu[i].name + "</li>";
    }    
}
menuHTML += '</ul>';
menuHTML += '</div>';
menuHTML += '<div class="d-flex justify-content-right">';
menuHTML += '<a href="#" class="text-decoration-none text-dark">Iniciar Sesion</a>';
menuHTML += '<span>&nbsp;|&nbsp;</span>';
menuHTML += '<a href="#" class="text-decoration-none text-dark">Registro</a>';
menuHTML += '<img src="img/icono login.png" width="40" alt="error al cargar la imagen"/>';
menuHTML += '</div>';
menuHTML += '</div>';
let nav = document.getElementById("navmenu");
nav.innerHTML = menuHTML;

let prov = document.getElementById("provincia");

window.onload = function () {
    let provincias = new Array("??lava", "Albacete", "Alicante", "Almer??a", "??vila", "Badajoz", "Baleares", "Barcelona", "Burgos", "C??ceres", "C??diz", "Castell??n", "Ciudad Real", "C??rdoba", "Coru??a", "Cuenca", "Girona", "Granada", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Ja??n", "Le??n", "Lleida", "Rioja", "Lugo", "Madrid", "M??laga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla");
    for (let p in provincias) {
        prov.options[p] = new Option(provincias[p], p);
    }
};

let cp = document.getElementById("cpostal");
cp.onchange = function () {
    let opciones = document.getElementsByTagName("option");

    let codigop = parseInt(cp.value.substr(0, 2));

    for (let op of opciones) {
        if (op.hasAttribute("selected")) {
            op.removeAttribute("selected");
        }
        if (op.value == codigop - 1) {
            op.setAttribute("selected", "");
        }
    }
};

function validar() {
    let spanNombre = document.getElementById("spanNombre");
    spanNombre.innerHTML = "";
    let spanContrase??a = document.getElementById("spanContrase??a");
    spanContrase??a.innerHTML = "";
    let spanContrase??a2 = document.getElementById("spanContrase??a2");
    spanContrase??a2.innerHTML = "";
    let spanCorreo = document.getElementById("spanCorreo");
    spanCorreo.innerHTML = "";

    var msgForm = document.getElementById("msgForm");
    msgForm.innerHTML = "";

    let p = document.createElement("p");
    let tp = document.createTextNode("Rellene los siguientes campos");
    p.appendChild(tp);
    let ul = document.createElement("ul");

    var ok = true;

    var f = document.getElementById("formulario");
    if (f.nombre.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode(f.nombre.id);
        li.appendChild(tli);
        ul.appendChild(li);
        spanNombre.innerHTML = "Introduce un nombre";
    }
    if (f.contrase??a.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode(f.contrase??a.id);
        li.appendChild(tli);
        ul.appendChild(li);
        spanContrase??a.innerHTML = "Introduce una contrase??a";
    }

    if (f.rcontrase??a.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode("repetir contrase??a");
        li.appendChild(tli);
        ul.appendChild(li);
        spanContrase??a2.innerHTML = "Repita la contrase??a";
    } else if (f.rcontrase??a.value !== f.contrase??a.value) {
        ok = false;
        spanContrase??a2.innerHTML = "Las contrase??as no coinciden";
    }

    if (/^(?=.*[0-9]).{6}$/.test(f.contrase??a.value) === false) {
        spanContrase??a.innerHTML = "Formato de contrase??a incorrecto";
    }

    if (f.correo.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode(f.correo.id);
        li.appendChild(tli);
        ul.appendChild(li);
        spanCorreo.innerHTML = "Introduce un correo";
    }
    //Correo con formato (letras@letras.(2-3 letras))
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f.correo.value) === false) {
        ok = false;
        spanCorreo.innerHTML = "Correo no valido";
    }

    if (!ok) {
        let msgForm = document.getElementById("msgForm");
        msgForm.appendChild(p);
        msgForm.appendChild(ul);
        msgForm.style.diplay = "block";
    }

    return ok;
}
;