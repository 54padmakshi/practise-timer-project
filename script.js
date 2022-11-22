//set interval() function takes 2 arguments -a function & a time in milliseconds
//1000 milliseconds =1second
//24:59
//25:00

let minutes = 25;
let seconds = 0;



function start() {
    interval = setInterval(()=>{
 if (seconds == 0) {
    seconds=59;
    minutes--;    
 }
 seconds--;

 if (minutes == 0 && seconds == 0) {
    stop();
    alert(" Times's Up!");
 }
 displayTime(minutes,seconds);
    },1000);
}

function stop() {
    clearInterval(interval);
    }
function reset() {
    stop();
    minutes =25;
    seconds =0;
    displayTime(minutes,seconds);
}
function displayTime(minutes,seconds) {
    document.getElementById("timer").innerHTML = minutes + " : "  + seconds  ;
  }