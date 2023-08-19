jQuery(document).ready(function($) {
    $("a").each(function() {
        var url = $(this).attr('href');
        var text = $(this).text();
        if (url !== "#content") {  // Exclude links with href="#content"
            $(this).replaceWith('<button onclick="location.href=\'' + url + '\'">' + text + '</button>');
        }
    });
});
