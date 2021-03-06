const timer = document.querySelector(".timer")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")
const sekunda = document.querySelector(".sekunda")
const minuta = document.querySelector(".minuta")
const godzina = document.querySelector(".godzina")
let sekundaTimer = 0
let minutaTimer = 0
let godzinaTimer = 0
const startCounting = ()=>{
    sekundaTimer < 10 ? sekunda.innerHTML = `0${sekundaTimer}` : sekunda.innerHTML = sekundaTimer
    minutaTimer < 10 ? minuta.innerHTML = `0${minutaTimer}` : minuta.innerHTML = minutaTimer
    godzinaTimer < 10 ? godzina.innerHTML = `0${godzinaTimer}` : godzina.innerHTML = godzinaTimer
    sekundaTimer += 1
    if(sekundaTimer>=60){
        sekundaTimer = 0
        minutaTimer += 1
    }
    if(minutaTimer>=60){
        minutaTimer = 0
        godzinaTimer += 1
    }
}
const startInterval = () => intervalID = setInterval(startCounting,10)
const stopInterval = () => clearInterval(intervalID)
const resetInterval = () => {
    stopInterval()
    sekunda.innerHTML = "00"
    minuta.innerHTML = "00"
    godzina.innerHTML = "00"
    sekundaTimer = 0
    minutaTimer = 0
    godzinaTimer = 0
}
const listerner = function (czynnosc,cb,replace,wiht) {
    czynnosc.addEventListener('click', ()=>{
        cb()
        replace.replaceWith(wiht)
    })
}
start.addEventListener('click', ()=>stop.style.display = "block")
listerner(start,startInterval,start,stop)
listerner(stop,stopInterval,stop,start)
listerner(reset,resetInterval,stop,start)