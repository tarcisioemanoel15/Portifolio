//Paisagens

let fotos = [
  'a1.png', 'a2.png', 'a3.png', 'a4.png', 'a5.png', 'a6.png', 'a7.png', 'a8.png',
  'a9.png', 'a10.png', 'a11.png', 'a12.png', 'a13.png', 'a14.png', 'a15.png', 'a16.png',
  'a17.png', 'a18.png', 'a19.png', 'a20.png', 'a21.png', 'a22.png', 'a23.png', 'a24.png',
  'a25.png', 'a26.png', 'a27.png', 'a28.png', 'a29.png', 'a30.png', 'a31.png', 'a32.png',
  'a33.png', 'a34.png', 'a35.png', 'a36.png', 'a37.png', 'a38.png', 'a39.png', 'a40.png',
  'a41.png', 'a42.png', 'a43.png', 'a44.png', 'a45.png', 'a46.png', 'a47.png', 'a48.png',
  'a49.png', 'a50.png', 'a51.png', 'a52.png', 'a53.png', 'a54.png', 'a55.png', 'a56.png',
  'a57.png', 'a58.png', 'a59.png', 'a60.png', 'a61.png', 'a62.png', 'a63.png', 'a64.png',
  'a65.png', 'a66.png', 'a67.png', 'a68.png', 'a69.png', 'a70.png', 'a71.png', 'a72.png',
  'a73.png', 'a74.png', 'a75.png', 'a76.png', 'a77.png', 'a78.png', 'a79.png', 'a80.png',
  'a81.png', 'a82.png', 'a83.png', 'a84.png', 'a85.png', 'a86.png', 'a87.png', 'a88.png',
  'a89.png', 'a90.png', 'a91.png', 'a92.png', 'a93.png', 'a94.png', 'a95.png'

];

function TrocarFotos(foto) { document.querySelector('.imagens').src = './imgs/' + fotos[foto]; }

let fotoAtual = 0;
TrocarFotos(fotoAtual);

setInterval(() => {
  fotoAtual++;
  if (fotoAtual > 94) {
    fotoAtual = 0;
  }
  TrocarFotos(fotoAtual);

}, 200);


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

