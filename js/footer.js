

$(document).ready(function () {

    function footer_scroll_to() {

        // variables, in case ID & class names were to change
        let home = '#home';
        let menu = '#desktop-menu';
        let href = $(this).attr('href');
        let anchor = $(href).offset();
        let menuHeight = 0;

        if (href != home) {
            if ($(menu).is(':visible')) {
                menuHeight = 65;
            } else {
                menuHeight = 55;
            }
        }

        $('html, body').animate({ scrollTop: anchor.top - menuHeight }, 500);

        return false;

    }

    $('#footer-nav').find('div.item a').click(footer_scroll_to);


});
