var nombre = " ";
var edad = " ";
var estatura =" ";
var medida = " ";
var datos = document.getElementById("validarAltura");

function validarAltura() {
    const estatura = document.getElementById("estatura").value;
    // Obtener la altura ingresada por el usuario
    //let altura = document.getElementById("altura").value;
  
    if (estatura > 150) {
      medida = "ALTA"
      document.getElementById("resultado").innerHTML = medida ; //"La persona es alta."
    } else {
        medida = "BAJA"
      document.getElementById("resultado").innerHTML = medida; "La persona no es alta."
    }
  }
  

