$(document).ready(function(){

    // sticky navbar on scroll script
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["an electrical engineer", "a master's student", "available in the market"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // skill progressbar
    let options = {
        startAngle : -1.55,
        size: 150,
        value: 0.85,
        fill: {color: "red"}
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%")
    });
    $(".C .bar").circleProgress({
        value : 0.30, 
    });
    $(".Moffice .bar").circleProgress({
        value : 0.95, 
    });
    $(".MATLAB .bar").circleProgress({
        value : 0.85, 
    });
    $(".SpaceEx .bar").circleProgress({
        value : 0.65, 
    });
    $(".Python .bar").circleProgress({
        value : 0.40, 
    });
    $(".Eagle .bar").circleProgress({
        value : 0.60, 
    });
    $(".HTML .bar").circleProgress({
        value : 0.55, 
    });
    $(".CV .bar").circleProgress({
        value : 0.25, 
    });

    // owl carousel script (projects)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    // owl carousel script (skills)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});