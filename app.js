var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dx = 2;
var ballRadius = 10;
var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;


function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI) ;
    ctx.fillStyle = 'orangered';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath()
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleHeight,paddleWidth);
    ctx.fillStyle = 'orangered';
    ctx.fill();
    ctx.closePath();
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;


    if(y+dy < 0){
        dy = -dy
    }
        if( y+dy < ballRadius || y+dy >canvas.height-ballRadius ){
            dy= -dy
        }
        if( x+dx < ballRadius || x+dx >canvas.width-ballRadius ){
            dx= -dx
        }

        if(rightPressed){
            paddleX += 7
            if((paddleX + paddleWidth) > canvas.width){
                paddleX = canvas.width - paddleWidth
            }
        }
        if(leftPressed){
            paddleX -= 7
            if(paddleX < 0){
                paddleX = 0
            }
        }
    }

     function keyDownHandler(e){
      if(e.key == 'Right' || e.key == 'ArrowRight'){
          rightPressed = true
                }
        else if(e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = true
         }
        }
       
        function keyUpDownHandler(e){
            if(e.key == 'Right' || e.key == 'ArrowRight'){
                rightPressed = false
            }
            else if(e.key == 'Left' || e.key == 'ArrowLeft'){
                leftPressed = false
            }
        }
        document.addEventListener("keydown",keyDownHandler,false);
        document.addEventListener("keyup",keyUpHandler,false);

          setInterval(draw,10);

