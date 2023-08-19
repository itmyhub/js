document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links (or you can modify the selector to select specific links)
    let links = document.querySelectorAll('a');

    links.forEach(function(link) {
        // Create a new button element
        let button = document.createElement('button');
        button.innerHTML = link.innerHTML;
        button.onclick = function() {
            location.href = link.href;
        };

        // Replace the link with the button
        link.parentNode.replaceChild(button, link);
    });
});
