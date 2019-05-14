$(document).ready(function () {

});
var count = 0;
var id = [];
var x = [];
var o = [];
var newId;
var winner = [];
var countWinnerX = 0
var countWinnerO = 0

$(document).on("click", ".squar_inside", function (event) {
  newId = event.target.id;
  var inOff = id.indexOf(newId)
  initHash(inOff);
});

function initHash(inOff) {
  if (id.length === 0) {
    addImag(newId)
    id.push(newId);
  } else if (newId == "") {
    alert("Teste" + newId)
  } else {
    if (inOff == -1) {
      addImag(newId)
      id.push(newId);
    } else {
    }
  }
  possibleWinner()
};

function addImag(newId) {
  var imgX = "x_res";
  var imgO = "o_res";
  console.log(count)
  if (count % 2 == 0) {
    x.push(newId);
    $("#" + newId).append("<a><img src='src/img/" + imgX + ".png' class='img_res' alt='...'></a>");
    count++;
  } else {
    o.push(newId);
    $("#" + newId).append("<a><img src='src/img/" + imgO + ".png' class='img_res' alt='...'></a>");
    count++;
  }
};


function possibleWinner() {
  if (count >= 5) {
    if (count % 2 == 0) {
      if (checkWinner(o.sort())) {
        // alert('jogador 2 Ganhou: ' + o)
        countWinnerO++
        $("#scoreboard").text(countWinnerX + '  X  ' + countWinnerO);
        resetRounds(false)
      }else if(count > 8){
        resetRounds(true)
      }
    } else {
      if (checkWinner(x.sort())) {
        countWinnerX++
        $("#scoreboard").text(countWinnerX + '  X  ' + countWinnerO);
        resetRounds(false)
      }else if(count > 8){
        resetRounds(true)
      }
    }
  }
};

function checkWinner(winningTest) {
  let contWinning = 0;
  if (winner.length == 0) {
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

  for (var i = 0; i < winner.length; i++) {
    for (var j = 0; j < winningTest.length; j++) {
      if (winner[i].indexOf(winningTest[j]) > -1) {
        contWinning++
        if (contWinning == 3) {
          return winningTest = true
        }
      }
    }
    contWinning = 0
  }
  if (count == 9 && contWinning <= 2){
    return winningTest = false
  }
};

function resetRounds(velha) {
  if (velha == true) {
    newId = 0;
    count = 0;
    id = [];
    x = [];
    o = [];
    alert("Velha")
  }
  if (countWinnerO == 2 || countWinnerX == 2) {
    if (countWinnerO < countWinnerX) {

      alert("Fim do jogo!!! Vencedor: X");

    } else {
      alert("Fim do jogo!!! Vencedor: O");

    }
    countWinnerX = 0;
    countWinnerO = 0;
  }
  $("#scoreboard").text(countWinnerX + '  X  ' + countWinnerO);
  setTimeout(function () {
    newId = 0;
    count = 0;
    id = [];
    x = [];
    o = [];

    $(".squar_inside").empty();
    ;
  }, 1000);


};
