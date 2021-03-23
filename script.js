$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
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
    $(".Moffice .bar").circleProgress({
        value : 0.85, 
    });
    $(".MATLAB .bar").circleProgress({
        value : 0.65, 
    });
    $(".SpaceEx .bar").circleProgress({
        value : 0.60, 
    });
    $(".Eagle .bar").circleProgress({
        value : 0.40, 
    });
    $(".Python .bar").circleProgress({
        value : 0.30, 
    });
    $(".HTML .bar").circleProgress({
        value : 0.20, 
    });
});