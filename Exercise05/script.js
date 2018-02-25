let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 10;
let ballY = 50;
let ballSpeedY = 5;

let paddle1Y = 250;
let paddle2Y = 250;
let paddleThickness = 10;
let paddleHeight = 100;

let player1Score = 0;
let player2Score = 0;

let winScreen = false;

const winningScore = 1;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  let framesPerSecond = 30;
  setInterval(()=> {
    drawWinScreen();
    if(winScreen !== true) {
      moveEverything();
      drawEverything();
    }
  }, 1000/framesPerSecond)

  canvas.addEventListener('click', handleMouseClick);

  canvas.addEventListener('mousemove', (e) => {
    let mousePos = calculateMousePos(e);
    paddle1Y = mousePos.y - (paddleHeight/2);
  })
}

function handleMouseClick(e) {
  if(winScreen) {
    player1Score = 0;
    player2Score = 0;
    winScreen = false;
  }
}

function calculateMousePos(e) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = e.clientX-rect.left-root.scrollLeft;
  let mouseY = e.clientY-rect.top-root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  }
}

function ballReset() {
  if (player1Score === winningScore || player2Score === winningScore) {
    player1Score = 0;
    player2Score = 0;
    
    winScreen = true;
  }
  ballSpeedX = -ballSpeedX;
  ballSpeedY = -ballSpeedY;
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}

function computer() {
  let paddle2YCenter = paddle2Y + paddleHeight/2;
  if(paddle2Y < ballY-35) {
    paddle2Y += 7;
  } else if (paddle2YCenter > ballY+35) {
    paddle2Y -= 7;
  }
}

function moveEverything() {
  computer();
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  if(ballX <= 5){
    if (ballY >paddle1Y && ballY < paddle1Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;

      ballSpeedY = (ballY - (paddle1Y+paddleHeight/2)) * 0.5;
    } else {
      player2Score++;
      ballReset();
    }
  }
  else if(ballX >= canvas.width - 5){
    if (ballY >paddle2Y && ballY < paddle2Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;
      ballSpeedY = (ballY - (paddle2Y+paddleHeight/2)) * 0.5;
    } else {
      player1Score++;
      ballReset();
    }
  }
  if(ballY >= canvas.height - 5){
    ballSpeedY = -ballSpeedY;
  }
  if (ballY <= 5) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawEverything() {
  canvasContext = canvas.getContext('2d');
  colorRect(0,0,canvas.width,canvas.height, "black");

  colorRect(0,paddle1Y,paddleThickness,paddleHeight, "white");
  drawNet();
  colorRect(canvas.width-paddleThickness,paddle2Y,paddleThickness,paddleHeight, "white");
  drawBall(ballX, ballY, 10, "white");
  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, canvas.width - 100, 100);
}

function drawBall(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function drawWinScreen() {
  canvasContext = canvas.getContext('2d');
  colorRect(0,0,canvas.width,canvas.height, "black");
  canvasContext.fillStyle = 'white';
  canvasContext.fillText('GAME OVER!', canvas.width/2, canvas.height/2);
  canvasContext.fillText('Click to restart...', canvas.width/2, canvas.height/2 + 50);
}

function drawNet () {
  for (let i = 0; i < canvas.height; i += 40) {
    colorRect(canvas.width/2-1,i,2,20,'white')
  }
}