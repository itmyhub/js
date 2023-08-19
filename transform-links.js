document.addEventListener('DOMContentLoaded', function() {
    // Remove the "Skip to content" button if present
    var skipButton = document.querySelector('button:contains("Skip to content")');
    if (skipButton) {
        skipButton.remove();
    }

    // Reset the background color of all links
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.style.backgroundColor = '';
        // Set target to _blank for links without a target
        if (!link.target) {
            link.target = '_blank';
        }
    });
});
