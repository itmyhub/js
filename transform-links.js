document.addEventListener('DOMContentLoaded', function() {
    // Targeting buttons with the specific onclick attribute
    var buttons = document.querySelectorAll('button[onclick^="location.href=\'https://v1-generatepress.1309816.xyz/contact-us/\'"]');

    buttons.forEach(function(button) {
        button.onclick = function() {
            window.open('https://v1-generatepress.1309816.xyz/contact-us/', '_blank');
        };
    });
});
