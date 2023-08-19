(function ($) {
    'use strict';

    $(document).ready(function () {
        // Target anchor tags with href 'https://v1-generatepress.1309816.xyz/contact-us/'
        $('a[href="https://v1-generatepress.1309816.xyz/contact-us/"]').click(function (event) {
            event.preventDefault();  // Prevent default click action
            window.open($(this).attr('href'), '_blank');  // Open the link in a new tab
        });
    });

})(jQuery);
