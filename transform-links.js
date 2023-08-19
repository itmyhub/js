document.addEventListener('DOMContentLoaded', function() {
    // This targets only anchor tags with the href 'https://v1-generatepress.1309816.xyz/contact-us/'
    var links = document.querySelectorAll('a[href="https://v1-generatepress.1309816.xyz/contact-us/"]');

    links.forEach(function(link) {
        if (!link.target) {
            link.target = '_blank';
        }
    });
});
