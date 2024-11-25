//ANIMATION AND AUDIO PLAY
document.addEventListener("DOMContentLoaded", () => {
    const popDivs = document.querySelectorAll('.pop'); // Select all divs with the 'pop' class
    const popSound = document.getElementById('pop-sound');

    popDivs.forEach(popDiv => {
        popDiv.addEventListener('click', () => {
            // Play the sound
            popSound.play();

            // Increase size by 5%
            popDiv.style.transform = 'scale(1.3)';

            // Wait for 0.2 seconds, then hide the div
            setTimeout(() => {
                popDiv.style.display = 'none';
            }, 200); // 200 milliseconds
        });
    });
});
