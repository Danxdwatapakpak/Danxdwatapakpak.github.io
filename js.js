const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
function flyAway() {
  
  noBtn.style.position = 'fixed';

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}


noBtn.addEventListener('mouseenter', flyAway);
noBtn.addEventListener('click', flyAway);


yesBtn.addEventListener('click', () => {
  
  question.innerHTML = "PALDOOOOOOOOOOOOOO!!!!!!!🥰✨";
  
  
  noBtn.style.display = 'none'; 
  yesBtn.style.display = 'none'; 


  setTimeout(() => {
    window.location.href = "https://www.youtube.com/watch?v=CrdVTtHgf48&list=RDCrdVTtHgf48&start_radio=1"; 
  }, 1500);
});
