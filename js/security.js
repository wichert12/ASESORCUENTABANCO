//Autor: Maxmail,
//Este script permite deshabilitar:
//Tener en cuenta que utiliza los eventos:
// onkeydown y onkeyup

// funcion de reloj de la pagina
$(function $($) {
  var today = new Date();
  var hour =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

  var optionsEST = {
    am_pm: true,
    timeNotation: "12h",
    utc: true,
    utc_offset: -5,
    h_hour: hour,
    h_date: date,
    h_format: "$nombreDia$ $dia$ de $nombreMes$ de $anio$ $hhmmss$ $ampm$",
    h_language: "es",
  };
  $("#jclock1").jclock(optionsEST);
});

//end desabilitar teclas
var control = false;
function checkKey(evt) {
  if (evt.keyCode == 17) {
    control = true;
    return true;
  }
  if (control) {
    alert("ESTA ACCION NO ES PERMITIDA");
    return false;
  }
}
function salir(evt) {
  if (evt.keyCode == 17) control = false;
}

//CLICK DERECHO DESHABILITADO
//document.oncontextmenu = function(){return false}

function insertText(elemID, first) {
  var elem = document.getElementById(elemID);
  if (elem.value.length < 4) elem.value = elem.value + first;
}

function limitar(e, contenido, caracteres) {
  var unicode = e.keyCode ? e.keyCode : e.charCode;
  if (
    unicode == 8 ||
    unicode == 46 ||
    unicode == 13 ||
    unicode == 9 ||
    unicode == 37 ||
    unicode == 39 ||
    unicode == 38 ||
    unicode == 40
  )
    return true;
  // Si ha superado el limite de caracteres devolvemos false
  if (contenido.length >= caracteres) return false;
  return true;
}

