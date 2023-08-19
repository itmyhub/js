document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button[onclick^="location.href=\'https://v1-generatepress.1309816.xyz/contact-us/\'"]');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://v1-generatepress.1309816.xyz/contact-us/', '_blank');
        });
    });
});
