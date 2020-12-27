import Countdown from "./countdown.js";

const regressivaAnoNovo = new Countdown("1 January 2021 00:00:00");
const contador = document.querySelector("span");

setInterval(() => {
  const dias = regressivaAnoNovo.total.days;
  const horas = regressivaAnoNovo.total.hours;
  const minutos = regressivaAnoNovo.total.minutes;
  const segundos = regressivaAnoNovo.total.seconds;
  contador.innerText = `${dias}:${horas}:${minutos}:${segundos}`;
}, 1000);
