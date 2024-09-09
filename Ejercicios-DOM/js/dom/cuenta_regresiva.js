const d = document;
export default function countdown(id,limitDate,finalMessage){
    const $countdown = document.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo=setInterval(() => {
        let now = new Date().getTime(),
        limitTime=countdownDate-now,
        days = 1000 * 60 * 60 * 24,
        hours,
        minutes,
        seconds;

        $countdown.innerHTML=`<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

        console.log(countdownDate,new Date().getTime())
    }, 1000);


}