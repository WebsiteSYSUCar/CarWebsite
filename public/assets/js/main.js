$(function() {
  //collapse button
  var flags = 0;
  $('#collapseBtn').click(function() {

    if (flags % 2 === 1) {

      $('.navbar-collapse').css('background', 'rgb(51,51,51)');
      $('.navbar-header').css('background', 'rgb(51,51,51)');
      $('#collapseBtn').css('background', 'rgb(51,51,51)').css('border', 'none')
      $('.navbar-form a span').html("");
      $('.navbar-nav').css('margin-left', '0%').css('visibility', 'hidden');
      flags++;
    } else {
      $('.navbar-collapse').css('background', 'black');
      $('.navbar-header').css('background', 'black');

      $('.navbar-form a span').html(" 搜索deepdriving.com");
      $('.navbar-form').css('text-align', 'center');
      $('#collapseBtn').css('background', 'black').css('border', 'none');
      var widthNum = $(window).width() - 150;
      widthNum = widthNum / 2;
      $('.navbar-nav').css('margin-left', widthNum).css('visibility', 'visible');
      flags++;
    }
  });
  $(window).resize(function() {
    $('.navbar-nav').css('visibility', 'visible');
  });
  //end collapse button

  //search buttton
  $('#searchBtn').click(function() {
    $('.search').css('visibility', 'visible');
    $('.search').css({
      'border': 'none',
      'box-shadow': 'none'
    });
  });

  var proposals = ['四轮独立转向移动机器人', '电站表记识别巡检机器人', '联系我们', '技术支持', '关于我们', 'Deepdriving', 'deepdriving'];
  var searchHtml = function(keyword) {
    var newHtml = new String();
    if (keyword == '四轮独立转向移动机器人')
      newHtml = "product1";
    else if (keyword == '电站表记识别巡检机器人') {
      newHtml = "product2";
    } else if (keyword == '联系我们' || keyword == '技术支持') {
      newHtml = "Contact";
    } else if (keyword == '关于我们' || keyword == 'Deepdriving' || keyword == 'deepdriving') {
      newHtml = "about_Deeppdriving";
    } else {
      var  filename=location.href;
      filename = filename.substr(filename.lastIndexOf('/')+1).replace('.html','');
      newHtml = filename;
    }
    location.href = "./" + newHtml + ".html";
  };
  $('#search-form').autocomplete({
    hints: proposals,
    width: 300,
    height: 30,
    onSubmit: function(text) {
      searchHtml(text);
    }
  });

})
