document.addEventListener('DOMContentLoaded', function() {
    // Remove the "Skip to content" button
    var skipButtons = document.querySelectorAll('button:contains("Skip to content")');
    skipButtons.forEach(function(button) {
        button.style.display = 'none';
    });

    // Remove background color #55555e for all links
    var linksWithBg = document.querySelectorAll('a[style*="background-color: #55555e"]');
    linksWithBg.forEach(function(link) {
        link.style.backgroundColor = 'transparent';
    });

    // Ensure the "Contact Us" button opens in a new tab
    var contactUsButtons = document.querySelectorAll('button[onclick^="location.href=\'https://v1-generatepress.1309816.xyz/contact-us/\'"]');
    contactUsButtons.forEach(function(button) {
        button.onclick = function() {
            window.open('https://v1-generatepress.1309816.xyz/contact-us/', '_blank');
        };
    });
});
