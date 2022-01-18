$(document).ready(function(){
    console.log("JQuery is ready!!!")
    $(".iconBar a").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    })
})