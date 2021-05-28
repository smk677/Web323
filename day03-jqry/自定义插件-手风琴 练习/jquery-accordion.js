$.fn.accordion=function(obj){
  var farWidth=$('#wrap').width();
  var lisLeth=$('#wrap ul li').length;
  // console.log(lisLeth)
  var liWidth=farWidth/lisLeth
  $('#wrap ul li').css('width',liWidth);
  obj.colors.forEach(function(item,index){
  $($('#wrap ul li')[index]).css('backgroundColor',item)
  })

  //li最小宽度
  var minWidth=100;
  // li最大宽度
  var maxWidth=farWidth-(lisLeth-1)*minWidth
  $('#wrap ul li').on('mouseenter',function(){
    $(this).stop(true).animate({width:maxWidth}).siblings().stop(true).animate({width:minWidth})
  })
  $('#wrap ul li').on('mouseleave',function(){
    $(this).stop(true).animate({width:liWidth}).siblings().stop(true).animate({width:liWidth})
  })
}