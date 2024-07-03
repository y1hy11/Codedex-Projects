const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
let myInterval;
let state = true;
let totalSeconds;

const appTimer = () => {
  if(state) {
    state = false;
    totalSeconds = Number.parseInt(session.textContent) * 60;
    updateSeconds();
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.')
  }
}

const updateSeconds = () => {
  totalSeconds--;
  
  let minutesLeft = Math.floor(totalSeconds/60);
  let secondsLeft = totalSeconds % 60;
  
  if(secondsLeft < 10) {
    secondDiv.textContent = '0' + secondsLeft;
  } else {
    secondDiv.textContent = secondsLeft;
  }
  session.textContent = `${minutesLeft}`
  
  if(minutesLeft === 0 && secondsLeft === 0) {
    bells.play()
    clearInterval(myInterval);
  }
}

startBtn.addEventListener('click', appTimer);