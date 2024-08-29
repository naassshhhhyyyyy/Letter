// Function to create hearts
function createHeart() {
    const heartContainer = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heartContainer.appendChild(heart);
    
    // Position the heart at a random location
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px'; // Randomly position hearts across the viewport
    
    // Remove the heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 3000); // Duration should match the animation duration
}

// Function to toggle the rolled state and visibility of the paper
function togglePaper() {
    const paper = document.getElementById('paper');
    
    if (paper.classList.contains('visible')) {
        // Toggle between rolled and unrolled
        if (paper.classList.contains('rolled')) {
            paper.classList.remove('rolled');
            // Create hearts when rolling the paper
            for (let i = 0; i < 100; i++) { // Adjust number of hearts to cover screen
                createHeart();
            }
        } else {
            paper.classList.add('rolled');
        }
    } else {
        // Make the paper visible
        paper.classList.add('visible');
    }
}

// Ensure the paper starts hidden on page load
window.onload = function() {
    const paper = document.getElementById('paper');
    paper.classList.remove('visible'); // Ensure it's hidden on load
};

// Attach the function to the button click event
document.getElementById('rollButton').addEventListener('click', togglePaper);
