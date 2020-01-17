$(function(){
    $('.content').fadeIn(2000);
    
    // hoverInの処理
    var handleHoverIn = function() {
        $(this).css("border","solid 5px #305097");
    }
    // hoverOutの処理
    var handleHoverOut = function() {
        $(this).css("border","solid 0px #1dc1d6");   
    }
    // Hoverイベントを設定する.
    $('.content').hover(handleHoverIn, handleHoverOut);

})