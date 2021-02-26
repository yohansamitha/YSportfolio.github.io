$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav_item').addClass("sticky_color");
            $('.nav_bar').addClass("sticky");
        } else {
            $('.nav_bar').removeClass("sticky");
            $('.nav_item').removeClass("sticky_color");
        }
    });
});