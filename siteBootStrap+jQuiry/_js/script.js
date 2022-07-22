function addFotos() {

  const fotos = document.querySelector('#fotos');
  const objIMG = [

    { 'id': '1', 'url': '../_img/dragonballz/1.jpeg' }

  ];

  const player = (foto, local) => {
    fotos.forEach(element => {
      fotos.innerHTML += `
      <div class="item">
      <img src="${element.url}" alt="">
      </div>
      
      ${element}
      `;

    });
  }


  player(objIMG, fotos)



}
addFotos();











$(function () {
  $('.carousel').carousel({
    interval: 2000,
    pause: 'null',
    wrap: true
  })
})