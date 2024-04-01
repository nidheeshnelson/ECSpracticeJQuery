function fun(){
    $("div").css('background-color','yellow');
    $(".p").css('font-style','italic');
    $("#div3,#div4,li").css('background-color','blue');
    $("p:first").fadeToggle(4000);
    $("li:odd").fadeToggle(3000);
}