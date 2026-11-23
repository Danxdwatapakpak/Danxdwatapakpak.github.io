const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// Function to move the "No" button randomly
function flyAway() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Move the button when hovered or clicked
noBtn.addEventListener('mouseenter', flyAway);
noBtn.addEventListener('click', flyAway);

// Sweet success state with a delayed YouTube redirect
yesBtn.addEventListener('click', () => {
  // 1. Change the text to your sweet word/message
  question.innerHTML = "PALDOOOOOOOOOOOOOO!!!!!!!🥰✨";
  
  // 2. Hide both buttons
  noBtn.style.display = 'none'; 
  yesBtn.style.display = 'none'; 

  // 3. Wait 1500 milliseconds (1.5 seconds) then redirect to YouTube
  setTimeout(() => {
    // Replace this URL with your specific video, playlist, or song link!
    window.location.href = "https://www.youtube.com/watch?v=CrdVTtHgf48&list=RDCrdVTtHgf48&start_radio=1"; 
  }, 1500);
});
