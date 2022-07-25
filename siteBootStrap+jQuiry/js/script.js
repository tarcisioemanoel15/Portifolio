alert(`
OBS
Este mine site foi só para 
praticar;
Então iginore as imagens e
todo conteudo.

👍👍👍👍👍✌️✌️✌️✌️✌️✌️✌️
`);

function buscarIMG() {
  const paisagen = document.querySelector('.paisagen')
  //const retrato = document.querySelector('.retrato')
  fetch('./imagen.json')
    .then(response => response.json())
    .then(json => inseririmg1(json, paisagen))
    .catch(e => console.log(e, 'DEU ERRO'));
}

function inseririmg1(json, campo) {
  json.forEach(element => {
    campo.innerHTML += `
    <div class="images1"><img src="${element.url}" alt="image"></div>
    `;
  });
  larguraMaior();
}

function larguraMaior() {
  for (let imgs of document.querySelectorAll('.images1 img')) {
    if ($(imgs).width() > $(imgs).height()) {
      imgs.classList.add('largura');
    } else {
      imgs.classList.add('altura');
    }

  }

}

$(function () {
  $('.carousel').carousel({
    interval: 2000,
    pause: 'null',
    wrap: true
  })
})

buscarIMG();