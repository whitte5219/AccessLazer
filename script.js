document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded successfully.");

    // Show password prompt after 3 seconds
    setTimeout(() => {
        document.getElementById('prompt').style.display = 'block';
        console.log("Password input shown.");
    }, 3000);

    // Create shining circles
    function createCircles() {
        for (let i = 0; i < 25; i++) {  // Increased number of circles
            let circle = document.createElement('div');
            circle.classList.add('circle');
            document.body.appendChild(circle);
            
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let size = Math.random() * 250 + 100;
            let duration = Math.random() * 20 + 15;
            let endX = (Math.random() - 0.5) * 800;
            let endY = (Math.random() - 0.5) * 800;
            
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.setProperty('--startX', `${x}px`);
            circle.style.setProperty('--startY', `${y}px`);
            circle.style.setProperty('--endX', `${endX}px`);
            circle.style.setProperty('--endY', `${endY}px`);
            circle.style.setProperty('--duration', `${duration}s`);
        }
    }

    // Create circles on page load
    createCircles();

    // Handle password input
    document.getElementById('passwordInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const password = document.getElementById('passwordInput').value;
            if (password === '12345') {
                console.log("Correct password entered.");
                document.getElementById('prompt').style.display = 'none';
                document.getElementById('playButtonContainer').style.display = 'block';
            } else {
                alert('Incorrect password');
                console.log("Wrong password entered.");
            }
        }
    });

    // Play button functionality
    document.getElementById('playButton').addEventListener('click', function() {
        console.log("Play button clicked.");

        // Show TikTok video
        document.getElementById('videoContainer').style.display = 'block';

        // Play background audio
        let audio = document.getElementById('bgAudio');
        audio.volume = 1.0; // Ensure volume is full
        audio.play().catch(error => console.log("Audio playback error:", error));
    });
});
