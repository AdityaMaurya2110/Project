let timerDisplay = document.querySelector('.timerDisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 00; 
let secs = 00;
let mins = 00;

let timerId = null;

startbtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }

   timerId = setInterval(startTimer, 10);    
});


stopbtn.addEventListener('click', function(){
    clearInterval(timerId);    
});


resetbtn.addEventListener('click', function(){
    clearInterval(timerId);   
    timerDisplay.innerHTML =`00 : 00 : 00`;
    mesc = secs = mins = 0; 
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}