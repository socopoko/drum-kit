function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function setBg() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const keys = Array.from(document.querySelectorAll('.key'));
    const body = document.getElementsByTagName('body')[0];

    if(!audio) return;
    
    key.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

window.addEventListener('keydown', playSound);
window.addEventListener('keydown', setBg);