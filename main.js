$(document).ready(function () {
    $(window).scroll(function () {
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
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Web Designer", "Backend Developer"],
        typespeed: 70,
        backspeed: 50,
        loop: true
    })

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.ProjectDD').click(function () {
        $('.DropdownContainer').slideToggle(200);
    })
    var btnContainer = document.getElementById("myDIV");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});