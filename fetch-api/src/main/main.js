// https://viacep.com.br/ws/01311100/json
const cep = document.querySelector('#cep');

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector('#' + campo)) {
      document.querySelector('#' + campo).value = result[campo]
    }
  }
}

// captura do click
document.addEventListener('keypress', e => {
  const el = e.target;
  if (e.keyCode === 13) {

    let serch = cep.value.replace("-", "");
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${serch}/json`, options)
      .then(response => {
        response.json()
          .then(data => showData(data))
      })
      .catch(e => {
        console.log('Deu erro:' + e.message)
      })
  };
})

// quano remover o focus 
cep.addEventListener("blur", e => {
  let serch = cep.value.replace("-", "");
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  fetch(`https://viacep.com.br/ws/${serch}/json`, options)
    .then(response => {
      response.json()
        .then(data => showData(data))
    })
    .catch(e => {
      console.log('Deu erro:' + e.message)
    })
})
