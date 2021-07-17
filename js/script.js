$(document).ready(function(){

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
});

    $('.burger').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.burger img').toggleClass("active");
    });

});