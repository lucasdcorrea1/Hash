$( document ).ready(function() {

});
var count = 0;

var id = [];
var x = [];
var o = [];
var newId;
var winner = [];
var venceu;

$(document).on("click",".squar_inside", function (event) {
  newId = event.target.id;
  var inOff = id.indexOf(newId)
  initHash(inOff);
});

function initHash(inOff){
  if(id.length === 0){
    addImag(newId)
    id.push(newId);
  }else if (newId == ""){
  }else{
    if (inOff == -1){
      addImag(newId)
      id.push(newId);
    }else {
    }
  }
};

function addImag(newId){
  var imgX = "x_res";
  var imgO = "o_res";
  if(count%2 == 0){
    x.push(newId);
    $("#" + newId).append("<a><img src='src/img/" + imgX + ".png' class='img_res'</a>");
    count++;
    console.log(count)
  }else{
    o.push(newId);
    $("#" + newId).append("<a><img src='src/img/" + imgO + ".png' class='img_res'</a>");
    count++;
    console.log(count)
  }

  if (count >= 5) {
    if(count%2 == 0){
      
      if (checkWinner(o.sort())){
        alert('jogador 2 Ganhou: ' + o )
      }
    }else{
      if (checkWinner(x.sort())){
        alert('jogador 1 Ganhou: ' + x )
      }
    }
  };
};

function checkWinner(tes){
  let conttest = 0;
  if(winner.length == 0){
  winner = [
  '1,2,3',
  '3,5,7',
  '1,5,9',
  '7,8,9', 
  '1,4,7',
  '2,5,8',
  '3,6,9',
  '4,5,6',
  '7,8,9'
  ];
}

for (var i = 0; i < 8; i++) {
  for(var j = 0;j < tes.length;j++){
    if (winner[i].indexOf(tes[j]) > -1) {
      conttest++
      if (conttest == 3){
        return tes = true
      }
   }
  }
  conttest = 0 
}
};

