// Handle popup display
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopup');

    // Show the popup
    popup.style.display = 'block';

    // Close the popup when the button is clicked
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

// Handle video button clicks
document.querySelectorAll('#videoList button').forEach(button => {
    button.addEventListener('click', function() {
        const videoId = button.getAttribute('data-video-id');
        const player = document.getElementById('player');
        
        // Update the video player iframe's src to play the selected video
        player.src = `https://www.youtube.com/embed/${videoId}`;
    });
});
