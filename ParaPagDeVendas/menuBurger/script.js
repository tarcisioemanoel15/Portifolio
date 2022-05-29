const btn = document.getElementById('btn');

function btnStart(e) {
  if (e.type === 'touchstart') e.preventDefault();

  const navtoggle = document.getElementById('nav');
  navtoggle.classList.toggle('active');

  const ative = navtoggle.classList.contains('active')
  e.currentTarget.setAttribute('class', ative);

  if (ative) {
    e.currentTarget.setAttribute('class', 'Fechar');

  } else {
    e.currentTarget.setAttribute('class', 'Abrir');

  }

  console.log(12)
}

btn.addEventListener('touchstart', btnStart);
btn.addEventListener('click', btnStart);
