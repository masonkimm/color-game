var numOfSquares = 6;
var colors = generateRandomColors(9);
var title = document.getElementById('title');
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var pickedColorDisplay = document.getElementById('pickedColorDisplay');
var message = document.getElementById('message');
var startBtn = document.getElementById('startBtn');
var easyBtn = document.getElementById('easyBtn');
var mediumBtn = document.getElementById('mediumBtn');
var hardBtn = document.getElementById('hardBtn');
var levelBtn = document.getElementById('levelBtn');
var heading = document.getElementById('heading');

easyBtn.addEventListener('click', function () {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function () {
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
    }
  }
});

// looping through squares to
// assign them colors from the array
// addEventListener

function startGame() {
  message.textContent = '';
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor;

  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  heading.style.backgroundColor = '#232323';
  startBtn.textContent = 'New Color';
  pickedColorDisplay.style.color = 'white';
}

pickedColorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++) {
  // pickedColorDisplay.style.color = 'white';
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function () {
    // grab on click and compare colors
    var clickedColor = this.style.backgroundColor;
    // console.log(clickedColor, pickedColor);
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
