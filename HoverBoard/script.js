const container = document.getElementById('container');

const colors = [
  '#a1cbb0',
  '#e421f2',
  '#4fdd9d',
  '#1b18e0',
  '#807ee0',
  '#2a7610',
  '#9a5408',
  '#f1a21c',
  '#df5357',
  '#a1d3c5',
  '#19fabb',
  '#e40f05',
  '#c7ec4a',
  '#a45241',
];

const SQUARES = 3000;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
