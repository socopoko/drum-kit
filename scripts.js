const keys = Array.from(document.querySelectorAll('.key'));
const heading = document.querySelector('h1');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
  const keycode = (e.type == 'keydown') ? e.keyCode: e.path[1].dataset.key;
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const key = document.querySelector(`div[data-key="${keycode}"]`);
    
  if(!audio) return;
  key.classList.add('playing');
  heading.classList.add('glow');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    heading.classList.remove('glow');
  }, 100);
  
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound));