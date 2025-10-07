var count = 0;
var id = [];
var x = [];
var o = [];
var newId;
var winner = [];
var countWinnerX = 0;
var countWinnerO = 0;

$(document).on("click", ".squar_inside", function (event) {
  newId = event.target.id;
  var inOff = id.indexOf(newId);
  initHash(inOff);
});

function initHash(inOff) {
  if (id.length === 0) {
    addImag(newId);
    id.push(newId);
  } else if (newId == "") {
    alert("Teste" + newId);
  } else {
    if (inOff == -1) {
      addImag(newId);
      id.push(newId);
    }
  }
  possibleWinner();
}

function addImag(newId) {
  var imgX = "x_res";
  var imgO = "o_res";

  if (count % 2 == 0) {
    x.push(newId);
    $("#" + newId).append("<img src='src/img/" + imgX + ".png' class='img_res' alt='X'>");
    count++;
  } else {
    o.push(newId);
    $("#" + newId).append("<img src='src/img/" + imgO + ".png' class='img_res' alt='O'>");
    count++;
  }
}

function possibleWinner() {
  if (count >= 5) {
    if (count % 2 == 0) {
      if (checkWinner(o.sort())) {
        countWinnerO++;
        $("#scoreboard_result").text(countWinnerX + " X " + countWinnerO);
        resetRounds(false);
      } else if (count > 8) {
        resetRounds(true);
      }
    } else {
      if (checkWinner(x.sort())) {
        countWinnerX++;
        $("#scoreboard_result").text(countWinnerX + " X " + countWinnerO);
        resetRounds(false);
      } else if (count > 8) {
        resetRounds(true);
      }
    }
  }
}

function checkWinner(winningTest) {
  if (winner.length == 0) {
    winner = [
      "cell-1,cell-2,cell-3",
      "cell-3,cell-5,cell-7",
      "cell-1,cell-5,cell-9",
      "cell-7,cell-8,cell-9",
      "cell-1,cell-4,cell-7",
      "cell-2,cell-5,cell-8",
      "cell-3,cell-6,cell-9",
      "cell-4,cell-5,cell-6"
    ];
  }

  for (var i = 0; i < winner.length; i++) {
    var comb = winner[i].split(",");
    if (comb.every((v) => winningTest.includes(v))) {
      return true;
    }
  }
  return false;
}

function resetRounds(velha) {
  if (velha == true) {
    alert("Velha!");
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
  $("#scoreboard_result").text(countWinnerX + " X " + countWinnerO);
  setTimeout(function () {
    newId = 0;
    count = 0;
    id = [];
    x = [];
    o = [];
    $(".squar_inside").empty();
  }, 700);
}
