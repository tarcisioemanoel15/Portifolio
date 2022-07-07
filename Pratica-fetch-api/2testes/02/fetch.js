function inicia() {
  const nomeinput = document.querySelector('.busca').value;
  if (!nomeinput) {

    fetch(`https://api.github.com/users/tarcisioemanoel15`)
      .then(response => response.json())
      .then(json => extraindo(json))
      .catch(e => console.log('Deu ERRO', e))

    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('repo')) {
        fetch(`https://api.github.com/users/tarcisioemanoel15/repos`)
          .then(response => response.json())
          .then(json => extraindorepo(json))
          .catch(e => console.log('Deu ERRO', e))
      }
    })

  } else {
    fetch(`https://api.github.com/users/${nomeinput}`)
      .then(response => response.json())
      .then(json => extraindo(json))
      .catch(e => console.log('Deu ERRO', e))
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('repo')) {
        fetch(`https://api.github.com/users/${nomeinput}/repos`)
          .then(response => response.json())
          .then(json => extraindorepo(json))
          .catch(e => console.log('Deu ERRO', e))
      }
    })
  }
}

function extraindo(json) {
  const section = document.querySelector('section');
  section.innerHTML = `
  <h1>${json.name}</h1>
  <img src="${json.avatar_url}" alt="">
  `
}

function extraindorepo(json) {
  const ul = document.querySelector('ul');
  const tesst = json.map(element => {
    const li = document.createElement('li');
    li.classList.add('item')
    li.innerHTML = `${element.name}`;
    ul.appendChild(li)
  })
  document.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('inicia')) {
      for (let campo of document.querySelectorAll('li')) {
        campo.remove();
      }
    }
    if (el.classList.contains('repo')) {
      for (let camporepo of document.querySelectorAll('.item')) {
        camporepo.remove();
      }
    }
  })
}