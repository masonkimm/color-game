var numOfSquares = 6;
var colors = [];
var pickedColor;
var modeBtn = document.querySelectorAll('.modeBtn');
var squares = document.querySelectorAll('.square');
var title = document.getElementById('title');
var heading = document.getElementById('heading');
var message = document.getElementById('message');
var startBtn = document.getElementById('startBtn');
var pickedColorDisplay = document.getElementById('pickedColorDisplay');



init();

function init() {
  //mode btn &  square event listener;
  setUpModeBtn();
  setUpSquares();
  reset();
}

function setUpModeBtn(){
  for (i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function () {
      console.log('hi');
      modeBtn[0].classList.remove('selected');
      modeBtn[1].classList.remove('selected');
      this.classList.add('selected');
      if (this.textContent === 'Easy') {
        numOfSquares = 3;
      } else {
        numOfSquares = 6;
      }
      reset();
    });
  }
}
function setUpSquares(){
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      // grab on click and compare colors
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        changeColor(pickedColor);
        message.textContent = 'Correct!';
        heading.style.backgroundColor = clickedColor;
        startBtn.textContent = 'Play Again?';
      } else {
        this.style.backgroundColor = '#232323';
        message.textContent = 'Try again';
      }
    });
  }
}
function reset() {
  message.textContent = '';
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;

  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  heading.style.backgroundColor = '#232323';
  startBtn.textContent = 'New Color';
  pickedColorDisplay.style.color = 'white';
}
function startGame() {
  reset();
}
function changeColor(color) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;

    pickedColorDisplay.style.color = color;
  }
}
function pickColor() {
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}
function generateRandomColors(num) {
  var arr = [];
  for (i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  //pick red from 0 - 255
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
startBtn.addEventListener('click', startGame);
