document.addEventListener("DOMContentLoaded", function() {
    var anchors = document.querySelectorAll('a');
    
    anchors.forEach(function(anchor) {
        var href = anchor.getAttribute('href');
        var text = anchor.textContent;

        // Create a new button
        var button = document.createElement('button');
        button.textContent = text;
        button.onclick = function() {
            window.location.href = href;
        };

        // Replace the anchor with the button
        anchor.parentNode.replaceChild(button, anchor);
    });
});
