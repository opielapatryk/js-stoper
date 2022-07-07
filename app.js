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
start.addEventListener('click', ()=>{
    startInterval()
    start.replaceWith(stop)
    stop.style.display = "block"
})
stop.addEventListener('click',()=>{
    stopInterval()
    stop.replaceWith(start)
})
reset.addEventListener("click",()=>{
    resetInterval()
    stop.replaceWith(start)
})