document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        if (!link.target) {
            link.target = '_blank';
        }
    });
});
