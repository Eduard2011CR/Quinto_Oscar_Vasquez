var votos = new Array(9);
var porce = new Array(9);
var mayor=0;
var asd=0;
var p=0;

function multiplicar(){


for (var i = 0; i < votos.length; i++) {
 votos[i]=Math.round(Math.random()*100);


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


};

function asdasd(){
var m1 = parseInt(document.getElementById("asd").value);
for (var i = 0; i <= porce.length; i++) {
  if (m1==porce[i]) {
    document.getElementById("esta").innerHTML =  "Si";
    break;
  }else{
    document.getElementById("esta").innerHTML =  "NO";

  }
}

};
