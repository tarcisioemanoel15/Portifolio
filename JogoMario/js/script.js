const mario = document.querySelector('.mario');

const junp = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

document.addEventListener('keydown', junp);