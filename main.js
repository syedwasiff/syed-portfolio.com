$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Web Designer", "Backend Developer"],
        typespeed: 70,
        backspeed: 50,
        loop: true
    })

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.ProjectDD').click(function(){
        $('.DropdownContainer').slideToggle(200);
    })
    
});