const dataDoEvento = new Date("Nov 23, 2023 21:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

   const diasAteOEvento =  Math.floor(distanciaAteOEvento / diaEmMs);
   const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
   const minutsAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
   const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


   document.getElementById('timer').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutsAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('timer').innerHTML = '"Que pena... Esse evento foi encerrado"';
    }
}, 1000);

