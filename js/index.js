window.onload = () => {
    $('#intro').addClass('active');
}

/*******************
******* NAV ********
*******************/
var hamberger = $('#hamberger');
var navOverlay = $('#nav-overlay');
var navBar = $('#nav-bar');
var navMain = $('#nav');
hamberger.click(() => {
    var x = window.matchMedia("(max-width: 720px)")
    if (x.matches) {
        hamberger.toggleClass('active');
        navOverlay.toggleClass('active');
        if (navOverlay.hasClass('active')) {
            navBar.addClass('active');
            $('.nav-bar-item').addClass('mobileActive');
            $('.nav-bar-social-item').addClass('mobileActive');
        } else {
            navBar.removeClass('active');
            $('.nav-bar-item').removeClass('mobileActive');
            $('.nav-bar-social-item').removeClass('mobileActive');
        }
    }
})
window.addEventListener('scroll',function(){
    if (window.pageYOffset > 0) {
        navMain.addClass('scroll');
    } else {
        navMain.removeClass('scroll');
    }
})
/*****************************
******* SMOOTH SCROLL ********
******************************/
var navBarAnchor = $('.nav-bar-item a');
var footerBarAnchor = $('footer ul li a');
navBarAnchor.click(function(){
    navBarAnchor.parent().removeClass('active');
    $(this).parent().addClass('active');
    if(this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800,function(){
            window.location.hash = hash
        })
    }
})
/***********************
******* SECTION ********
***********************/
var sectionWrapper = $('section');
window.addEventListener('scroll',() => {
    var offsetY = window.pageYOffset;
    var innerHeight = window.innerHeight;
    sectionWrapper.each((index,ele) => {
        if((offsetY + innerHeight - 250) > ele.offsetTop) {
            ele.classList.add('active');
        }
    })
})
/* **********************
******* SERVICES ********
*************************/
var servicesItemText = $('.services-item-text')
var servicesItemTitle = $('.services-item-text h1');
var servicesItemImage = $('.services-item-image');

servicesItemTitle.each(function(){
    $(this).click(() => {
        servicesItemText.removeClass('active');
        $(this).parent().addClass('active');
    })
})

var setBackgroundUrl = () => {
    servicesItemImage.each((index,ele) => {
        var url = ele.getAttribute('data-url')
        ele.style.backgroundImage = `url("${url}")`;
    })
}
setBackgroundUrl();