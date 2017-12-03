$(function() {
   var ok = false;
   $('#email').blur(function () {
      if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1) {
         $('#error').text('请输入正确的EMAIL格式');
      } else {
        ok = true;
        $('#error').text('');
      }
   })

    $("#submit").click(function() {
       if(ok === false) {
          return false;
        } else {
          $('form').submit();
        }
    })

})
