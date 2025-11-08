const startBtn = document.getElementById('start-btn');
const nameInput = document.getElementById('name-input');
const nameContainer = document.getElementById('name-container');
const questionContainer = document.getElementById('question-container');
const finalContainer = document.getElementById('final-container');
const questionText = document.getElementById('question-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const finalText = document.getElementById('final-text');
const heartsContainer = document.getElementById('hearts-container');

let userName = '';

startBtn.addEventListener('click', () => {
  userName = nameInput.value.trim();
  if (userName === '') {
    alert('Please enter your name 😚');
    return;
  }
  nameContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  questionText.textContent = `${userName}, you make my days better — be mine? 💞`;
});

// Move the "No" button around when hovered or clicked
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
  const container = questionContainer.getBoundingClientRect();
  const x = Math.random() * (container.width - 100);
  const y = Math.random() * (container.height - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// If "Yes" is clicked
yesBtn.addEventListener('click', () => {
  document.body.style.background = 'linear-gradient(135deg, #ffc1cc, #ffb6c1)';
  questionContainer.classList.add('hidden');
  finalContainer.classList.remove('hidden');
  finalText.innerHTML = `${userName}, you just made my day — and maybe my life ❤️`;

  // Generate floating hearts
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
