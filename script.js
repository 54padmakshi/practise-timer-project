//set interval() function takes 2 arguments -a function & a time in milliseconds
//1000 milliseconds =1second
//24:59
//25:00

let minutes = 24;
let seconds = 59;



function start() {
    interval = setInterval(()=>{
        displayTime(minutes,seconds);  

        if (seconds == 0) {
     seconds=59;
     minutes--;    
     }
     seconds--;

      if (minutes == 0 && seconds == 0) {
      stop();
      alert(" Times's Up!");
      }
      
      
    },1000);
}

function stop() {
    clearInterval(interval);
    }
function reset() {
    stop();
    minutes =24;
    seconds =59;
    displayTime('25','00');
}
function displayTime(minutes,seconds) {
    document.getElementById("timer").innerHTML = minutes + " : "  + seconds  ;
  }