function drawBorder(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var size = { x: canvas.width, y: canvas.height };
    // context.strokeStyle = "red";
    context.strokeRect(0,0, size.x, size.y);
}

function drawSquare(color){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.fillStyle = color;
  context.fillRect(Math.floor(Math.random() * size.x), Math.floor(Math.random() * size.y), Math.floor(Math.random() * size.x), Math.floor(Math.random() * size.y));
};

function clearCanvas(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.clearRect(0,0, size.x, size.y);
  drawBorder();
}

drawBorder();
window.addEventListener('load',function(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  document.getElementById("red").addEventListener("click", function(){drawSquare("red", 0, 0)}, false);
  document.getElementById("green").addEventListener("click", function(){drawSquare("green", (canvas.width)/2, 0 )}, false);
  document.getElementById("blue").addEventListener("click", function(){drawSquare("blue", 0, (canvas.height)/2 )}, false);
  document.getElementById("orange").addEventListener("click", function(){drawSquare("orange", (canvas.width)/2, (canvas.height)/2 )}, false);
  document.getElementById("clear").addEventListener("click", function(){clearCanvas()}, false);
  document.getElementById("fib").addEventListener("click", function(){fibinocci(10)}, false);

});


function xDirection(iteration){
    window.addEventListener('load',function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var size = { x: canvas.width, y: canvas.height };

});
}





function fibinocci(iterations){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height }
  fArray = [1 , 1]
  context.fillRect(0,0, 20, 10)
  for(var i = 2; i<iterations; i++){
      fArray.push(fArray[fArray.length-1] + fArray[fArray.length-2])
      context.fillRect((i*10), 0, (i*10), (fArray[fArray.length-1]*10));
  }
  console.log(fArray[fArray.length-1])
}
