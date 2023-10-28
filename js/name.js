

window.onbeforeunload = function () {
    window.scrollTo(0, 0);      // refresh back to top of screen
}

$(document).ready(function () {

    function play_name_animations() {
        $('#my-name .my-name-segment').transition({
            animation   : 'fly up',
            interval    : 200
        });
    }

    function scroll_to_projects() {
        let menu = '#desktop-menu';
        let href = $(this).attr('href');
        let anchor = $(href).offset();
        //let menuHeight = ($(menu).is(':visible')) ? $(menu).height() : 0;
        let menuHeight = ($(menu).is(":visible")) ? $(menu).height() : 55;
        //let menuHeight = $(menu).height();
        $('html, body').animate({ scrollTop: anchor.top - menuHeight }, 500);
       return false;
    }

    $('#my-name .my-name-segment').transition('hide');

    setTimeout(play_name_animations, 100);
    setTimeout(beginTyping, 1200);

    $('#homeToProjects').click(scroll_to_projects);

});

let beginTyping = function() {
    //data-period="2000" data-rotate='[ " gamer.", " recent graduate!", "n aspiring software engineer." ]'

    let elements = document.getElementsByClassName('txt-rotate');
    //for (let i = 0; i<elements.length; i += 1) {
        //console.log("elements length: " + elements.length);
        //let toRotate = elements[0].getAttribute('data-rotate');
        //let period = elements[0].getAttribute('data-period');
        let toRotate = [" UH Manoa alumn.", " gamer.", " regular gym-goer.", " software engineer."];
        let period = 2000;
        /*if (toRotate) {
            new TxtRotate(elements[0], JSON.parse(toRotate), period);
        }*/
        if (toRotate) new TxtRotate(elements[0], toRotate, period);
    //}

    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #87CEFA }";
    document.body.appendChild(css);

};

let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    //var i = this.loopNum % this.toRotate.length;
    let i = this.loopNum;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    //var delta = 300 - Math.random() * 100;
    let delta = 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        if (i != this.toRotate.length - 1) this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
    //delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};
