$( document ).ready(function() {

});
var count = 0;
var imgX = "x_res";
var imgO = "o_res";
var id = [];
var x = [];
var o = [];

let newId;

$(document).on("click",".squar_inside", function (event) {
  
  newId = event.target.id;
  

  let inOff = id.indexOf(newId)
 
    if(id.length === 0){
      addImag(newId)
      id.push(newId);
    }else if (newId == ""){
    }else{
      if (inOff === -1){
        addImag(newId)
        id.push(newId);
      }else {
      }
    }

    
  console.log(newId)
  console.log(o)
  console.log(x)

});

function addImag(newId){
  console.log(count);
  if (count >= 8) {
    alert("Completou");
    $("#" + newId).append("<a><img src='src/img/" + imgX + ".png' class='img_res'</a>");

  }else if(count%2 == 0){
    $("#" + newId).append("<a><img src='src/img/" + imgX + ".png' class='img_res'</a>");
    x.push(newId);
    count++;
  }else{
    $("#" + newId).append("<a><img src='src/img/" + imgO + ".png' class='img_res'</a>");
    o.push(newId);
    count++;
  }
}
