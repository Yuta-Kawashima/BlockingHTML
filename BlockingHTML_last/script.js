$(function(){
    var $deferredAnim = $.Deferred( function( deferredAnim ){
 
        //thenでファンクション名を繋げる  
        deferredAnim.then(anim_01)
        .then(anim_02)
        .then(anim_03)     
      });
       
      //実行
      $deferredAnim.resolve(); 

      function anim_01(){
        $('#reading_one').fadeIn(2000);
        $('#prodramming_one').fadeIn(2000);
      }
      function anim_02(){
        $('#reading_two').fadeIn(2000);
        $('#prodramming_two').fadeIn(2000);
      }
      function anim_03(){
        $('#reading_three').fadeIn(2000);
        $('#prodramming_three').fadeIn(2000);
      }

    /*$('.content').each(function(e,v){
        $(this).fadeIn(2000);
    });
    
    setTimeout(function(){
        $('#reading_one').fadeIn(2000);
    },500);
    setTimeout(function(){
        $('#reading_two').fadeIn(2000);
    },500);
    setTimeout(function(){
        $('#reading_three').fadeIn(2000);
    },500);

   $(docment).ready(fucntion(){
    $.when(
     $('#reading_one').fadeIn(2000);
     $('#reading_two').fadeIn(2000);
     $('#reading_three').fadeIn(2000);
    ).done(function(){
        $('prodramming').fadeIn(2000)
    });
   });
   */
})