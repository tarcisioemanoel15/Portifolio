
// Onsa

window.onload = function () {
  img0();
}

let velocidade = 100;

function img0() {
  document.querySelector('.imagens1').src = './imgs/onca/onca0.png';
  setTimeout('img1()', velocidade);

}

function img1() {
  document.querySelector('.imagens1').src = './imgs/onca/onca1.png';
  setTimeout('img2()', velocidade);

}
function img2() {
  document.querySelector('.imagens1').src = './imgs/onca/onca2.png';
  setTimeout('img3()', velocidade);

}
/**/
function img3() {
  document.querySelector('.imagens1').src = './imgs/onca/onca3.png';
  setTimeout('img4()', velocidade);

}

function img4() {
  document.querySelector('.imagens1').src = './imgs/onca/onca4.png';
  setTimeout('img5()', velocidade);

}

function img5() {
  document.querySelector('.imagens1').src = './imgs/onca/onca5.png';
  setTimeout('img6()', velocidade);

}

function img6() {
  document.querySelector('.imagens1').src = './imgs/onca/onca6.png';
  setTimeout('img7()', velocidade);

}

function img7() {
  document.querySelector('.imagens1').src = './imgs/onca/onca7.png';
  setTimeout('img0()', velocidade);

}

