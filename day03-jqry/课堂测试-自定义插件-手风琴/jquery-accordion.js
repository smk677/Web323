
$.fn.accordion=function(obj){
  var Lengtli= $(this).find('li');
    var avgUL=$(this).width()/Lengtli.length;
    // console.log(avgUL)
    console.log(Lengtli.length);
    $('li').css('width',avgUL)
    
   
    obj.colors.forEach(function(item,index){
      //  console.log(Lengtli[index])
      // console.log(obj.colors.length)
       if(obj.colors.length>Lengtli.length){
        obj.colors.length=Lengtli.length;
       }
     Lengtli[index].style.backgroundColor=item;
    })
    
    // console.log(this)
    $('#wrap').on('mouseenter','ul li',function(){
      console.log($(this))
      //设置最小距离
      var minWidth=100;
      //能扩张的最大距离
    var maxWidth=$(this).parent().parent().width()-($('#wrap ul li').length-1)*minWidth
    console.log(maxWidth)
    $(this).stop(true).animate({width:maxWidth}).siblings().stop(true).animate({width:minWidth})
    })

    $('#wrap').on('mouseleave','ul li',function(){
      $('li').stop(true).animate({width:avgUL})
    })
}


