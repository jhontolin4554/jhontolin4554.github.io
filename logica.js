var fechaObjetivo = new Date(2023, 4, 27, 0, 0, 0);

function mostrarTiempoRestante() {
  var ahora = new Date();
  var tiempoRestante = fechaObjetivo.getTime() - ahora.getTime();

  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById("dias").innerHTML = formatTwoDigits(dias);
  document.getElementById("horas").innerHTML = formatTwoDigits(horas);
  document.getElementById("minutos").innerHTML = formatTwoDigits(minutos);
  document.getElementById("segundos").innerHTML = formatTwoDigits(segundos);
}

function formatTwoDigits(number) {
  return number.toString().padStart(2, '0');
}

setInterval(mostrarTiempoRestante, 1000);

