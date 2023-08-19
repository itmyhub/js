document.addEventListener('DOMContentLoaded', function() {
    // This targets buttons with the specific onclick attribute
    var buttons = document.querySelectorAll('button[onclick^="location.href=\'https://v1-generatepress.1309816.xyz/contact-us/\'"]');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default click action
            window.open('https://v1-generatepress.1309816.xyz/contact-us/', '_blank'); // Open the link in a new tab
        });
    });
});
