// SET YOUR START DATE HERE (Year, Month - 1, Day)
const startDate = new Date(2025, 9, 15); // e.g., January 15, 2023

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('mins').innerText = m.toString().padStart(2, '0');
    document.getElementById('secs').innerText = s.toString().padStart(2, '0');
}
let isPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('romantic-audio');
    const heart = document.getElementById('music-heart');
    const text = document.getElementById('music-text');
    const photos = document.querySelectorAll('.floating-photo');

    if (!isPlaying) {
        audio.play();
        heart.classList.add('playing');
        text.innerText = "Now Playing";
        
        // Make photos more vivid when music plays
        photos.forEach(photo => {
            photo.style.opacity = "0.9";
            photo.style.border = "5px solid #fff";
        });
        
        isPlaying = true;
    } else {
        audio.pause();
        heart.classList.remove('playing');
        text.innerText = "Music Paused";
        
        photos.forEach(photo => {
            photo.style.opacity = "0.5";
        });
        
        isPlaying = false;
    }
}
function createPetals() {
    const container = document.getElementById('petals-container');
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        const size = Math.random() * 20 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(petal);
    }
}

function revealNote() {
    const note = document.getElementById('secret-note');
    note.classList.toggle('show');
}

// Start everything
setInterval(updateCounter, 1000);
window.onload = () => {
    createPetals();
    updateCounter();
};