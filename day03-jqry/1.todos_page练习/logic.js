//绑定按下事件
$('.todo-header input').on('keydown',function(e){
    // 如果按下的是回车键
    if(e.keyCode==13){
    // 获取用户输入的值
    var value= $(this).val().trim();
    // console.log(value);
    // 如果用户没有输入，退出
    if(!value)return;
    // 把获取的值和字符串的拼接
        var str='<li>\
        <label>\
          <input type="checkbox" />\
          <span>'+value+'</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
      </li>'
    //   把字符串添加到todo-main中
        $('.todo-main').append(str);
      //添加完成清空用户输入框
        $(this).val('');
        fn();
        ferText();
    }
})

//绑定input的点击事件
// 事件委托
$('.todo-main').on('click','li>label>input',function(){
    //选中给它的兄弟元素添加一个类名
    $(this).next().toggleClass('active');
    
    // 获取它选中的长度
    // 获取它总体的长度
    // 如果选中的长度和总体的长度一样，则.todo-footer  input也选中
    fn();
    ferText();
})

//全选
$('.todo-footer  input').on('click',function(){
    
     $('.todo-main li input').prop('checked', $(this).prop('checked'));
     $(this).prop('checked')?$('.todo-main li span').addClass('active'):$('.todo-main li span').removeClass('active')
     ferText();
})

// 绑定点击事件
$('.todo-main').on('click','li button',function(){
         $(this).parent().remove()
         fn();
         ferText();
})
//底部
$('.todo-footer').on('click','button',function(){
    $('.todo-main li input:checked').parent().parent().remove()
    fn();
    ferText();
})

//封装函数
function fn(){
    var checkS=$('li label input:checked').length;
     var checkIn=$('.todo-main li input').length;
     //解决全删之后，全选为false
     if(checkS==0 && checkIn==0){
        $('.todo-footer  input').prop('checked',false);
        return
     }
     $('.todo-footer  input').prop('checked',checkS===checkIn)
}

//封装一个函数，用于渲染底部
function ferText(){
    var  checkWc=$('li label input:checked').length;
    var   InputQb=$('.todo-main li input').length;

    $('#wc').text('已完成'+checkWc);
    $('#qb').text('全部'+InputQb);
}