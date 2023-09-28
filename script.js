function startCountdown(){
    const countdownElement = document.getElementById("countdown")

    //Defina a data atual
    const startDate = new Date();

    // Adicione "08 dias, 12 horas, 44 minutos e 28 segundos" à data atual
    const daysToAdd = 8;
    const hoursToAdd = 12;
    const minutesToAdd = 44;
    const secondsToAdd = 28; 

    startDate.setDate(startDate.getDate() + daysToAdd);
    startDate.setHours(startDate.getHours() + hoursToAdd);
    startDate.setMinutes(startDate.getMinutes() + minutesToAdd);
    startDate.setSeconds(startDate.getSeconds() + secondsToAdd);

    // Atualize o countdown a cada segundo
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = startDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "00:00:00";
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const formattedTime = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            countdownElement.innerHTML = formattedTime;
        }
    }, 1000);
}

// Iniciar o countdown quando a página carregar
window.onload = startCountdown;