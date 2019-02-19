  function multiplicar(){

var votos = new Array(9);
var porce = new Array(9);
var lol = new Array(9);
var mayor=0;
var asd=0;
var p=0;
 for (var i = 0; i < votos.length; i++) {
   votos[i]=Math.round(Math.random()*100);
   lol[i]=votos[i];
   document.getElementById("ini"+[i]).innerHTML =  votos[i];
 }


for (var a = 0; a < votos.length; a++) {
  for (var b = 0; b < votos.length; b++) {

    if (mayor<=votos[b]) {
      mayor=votos[b];
      asd=votos[b];
      p=b;
    }
  }

porce[a]=asd;
mayor=0;
votos[p]=0
document.getElementById("orde"+[a]).innerHTML =  porce[a];
}





var menor= 10000;
for (var a = 0; a < lol.length; a++) {
  for (var b = 0; b < lol.length; b++) {

    if (lol[b]<=menor) {
      p=b;
      menor=lol[b];
    }
  }

porce[a]=menor;
menor=1000;
lol[p]=1000;
document.getElementById("me"+[a]).innerHTML =  porce[a];
}

};
