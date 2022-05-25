const album = [
  { 'id': '1', 'url': './imgs/01/1.jpg' },
  { 'id': '2', 'url': './imgs/01/2.jpg' },
  { 'id': '3', 'url': './imgs/01/3.jpg' },
  { 'id': '4', 'url': './imgs/01/4.jpg' },
  { 'id': '5', 'url': './imgs/01/5.png' },
  { 'id': '6', 'url': './imgs/01/6.jpg' },
  { 'id': '7', 'url': './imgs/01/7.jpg' },
  { 'id': '8', 'url': './imgs/01/8.jpg' },
  { 'id': '9', 'url': './imgs/01/9.jpg' },
  // { 'id': '10', 'url': './imgs/01/10.jpg' },
  // { 'id': '11', 'url': './imgs/01/11.jpg' },
];


const container = document.querySelector('.container');

const capturaFotos = (fotos, local) => {
  fotos.forEach(element => {
    local.innerHTML += `
    
    <div class='items'>
    <img src='${element.url}'>
    </div>
    
    `;
  });
}

capturaFotos(album, container);

let item = document.querySelectorAll('.items');


const next = () => {
  const next = item[item.length - 1];
  container.insertBefore(next, item[0]);
  item = document.querySelectorAll('.items')
}

const previous = () => {
  const anterior = item[item.length - 1];
  container.appendChild(item[0]);
  item = document.querySelectorAll('.items')
}

document.querySelector('.pfrente').addEventListener('click', next);
document.querySelector('.ptras').addEventListener('click', previous);
