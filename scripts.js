const keys = Array.from(document.querySelectorAll('.key'));

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
  const keycode = (e.type == 'keydown') ? e.keyCode: e.path[1].dataset.key;
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const key = document.querySelector(`div[data-key="${keycode}"]`);
    
  if(!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound));
// window.addEventListener('keydown', setBg);