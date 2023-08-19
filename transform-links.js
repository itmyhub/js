jQuery(document).ready(function($) {
    $("a").each(function() {
        var url = $(this).attr('href');
        var text = $(this).text();
        $(this).replaceWith('<button onclick="location.href=\'' + url + '\'">' + text + '</button>');
    });
});
