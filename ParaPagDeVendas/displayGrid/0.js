window.onload = function () { f1(); }

let vel = 3000;

function f1() {
  document.querySelector('.comercial').src = './img/imgweb/1.jpeg';
  setTimeout('f2()', vel)
}

function f2() {
  document.querySelector('.comercial').src = './img/imgweb/2.jpeg';
  setTimeout('f3()', vel)
}

function f3() {
  document.querySelector('.comercial').src = './img/imgweb/3.jpeg';
  setTimeout('f1()', vel)
}