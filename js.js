const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const jumpscare = document.getElementById('jumpscare');
const screamSound = document.getElementById('screamSound');

function triggerJumpscare() {
  // Reveal the hidden overlay
  jumpscare.classList.remove('hidden');
  
  // Play the loud audio track
  screamSound.play().catch(error => {
    console.log("Audio playback failed. Browser required user interaction first.", error);
  });

  // Optional: Make the screen shake or flash
  jumpscare.style.animation = "shake 0.5s infinite";
}

// Trigger when they hover OR click 'No'
noBtn.addEventListener('mouseenter', triggerJumpscare);
noBtn.addEventListener('click', triggerJumpscare);
