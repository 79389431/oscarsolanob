function validarAltura() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var altura = document.getElementById("altura").value;

    if (altura > 160) {
        document.getElementById("resultado").innerHTML = nombre + " es alta";
    } else {
        document.getElementById("resultado").innerHTML = nombre + " es baja";
    }
}
