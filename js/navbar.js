

$(document).ready(function () {

    // define functions
    function scroll_to() {
        // variables, in case ID & class names were to change
        let home = '#home';
        let href = $(this).attr('href');
        let anchor = $(href).offset();
        //let desktop = '#desktop-menu';
        let mobile = '#mobile-menu';
        //let menu = desktop;
        let menu_height = 0;
        if (href != home) {
            if ($(mobile).is(":visible")) {
                //$('.ui.accordion').accordion('close', 0);
                menu_height = 55;
            } else {
                menu_height = 65;
            }
        }
        if ($(mobile).is(":visible")) $('.ui.accordion').accordion('close', 0);
        //let menu_height = (href == home) ? 0 : $(menu).height();
        $('html, body').animate({ scrollTop: anchor.top - menu_height }, 500);
        return false;
    }

    function change_menu() {
        // variables, in case ID & class names were to change
        let menu = $('#desktop-menu');
        let id = document.getElementById('my-name');

        if (id != null) {

            let div_name = 'div#my-name div.twelve.wide.middle.aligned.column';
            let div = $(div_name)

            menu.toggleClass('scrolled', $(this).scrollTop() > div.height());

        } else {

            menu.toggleClass('scrolled', $(this).scrollTop() > menu.height());

        }
    }

    function change_picture() {
        let window_width = $(window).width();
        if (window_width < 769) {
            //$('#headshot').addClass('small');
            //$('div.ui.raised.segment').addClass('piled');
        } else {
            //$('#headshot').removeClass('small');
            ///$('div.ui.raised.segment').removeClass('piled');
        }
    }

    // execute funtions on ready
    //change_menu();
    //change_picture();
    $('.ui.accordion').accordion();

    //bind functions to event
    $(window).resize(change_picture);
    $(document).scroll(change_menu);
    $('nav').find('a.item').click(scroll_to);
    // enable accordion for mobile menu

});
