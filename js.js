const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// Function to move the "No" button randomly
function flyAway() {
  // Calculate random positions within the browser window bounds
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Move the button when hovered or clicked
noBtn.addEventListener('mouseenter', flyAway);
noBtn.addEventListener('click', flyAway);

// Sweet success state when clicking "Yes"
yesBtn.addEventListener('click', () => {
  question.innerHTML = "Yay! Can't wait! 🥰✨";
  noBtn.style.display = 'none'; // Hide the no button
  yesBtn.style.display = 'none'; // Hide the yes button
});
