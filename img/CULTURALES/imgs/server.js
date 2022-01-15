simplyCountdown("#footer", {
    year: 2022,
    month: 1, 
    day: 14, 
    hours: 8,
    minutes: 16, 
    seconds: 0, 
    words: {
      
      days: "Día",
      hours: "Hora",
      minutes: "Minuto",
      seconds: "Segundo",
      pluralLetter: "s",
    },
    plural: true, 
    inline: false, 
    inlineClass: "simply-countdown-inline", 
    
    enableUtc: true,
    onEnd: function () {
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
          const borr = () => {
            let cuerpo = document.getElementsByTagName("body")[0];
            cuerpo.parentElement.innerHTML = "";
          };
          borr();
        }, 3000);
      });
      return;
    }, 
    refresh: 0000, 
    sectionClass: "simply-section", 
    amountClass: "simply-amount",
    wordClass: "simply-word",
    zeroPad: false,
    countUp: false,
  });