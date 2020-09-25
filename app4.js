// JS4
// $(document).ready(function(){
//   $("body").html("<h1>Hello jQuery!!</h1>");
  // $( セレクタ ).メソッド ( パラメータ );
// });
// $(document).ready(function () {
  // jQueryプログラムの内容
// });
// or
// $(function(){
  // jQueryプログラムの内容
// });

// JS5
$(function(){
  $('.box1').hide();
});

$(function(){
  $('.box2').slideDown(function(){
    $('.box2').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp();
  });
});

// JS6
// $(function(){
//   $('.box3').mouseover(function(){
    // box1にマウスオーバーされたときに、処理を実行してください」の意味
  //   $('.box3').addClass('box3-ext');
  // });
  // $('.box3').mouseout(function(){
    // マウスアウトされたときに、背景色を赤色に変化させる処理
//     $('.box3').removeClass('box3-ext');
//   });
// });
$(function(){
  $('.box3').on('click', function(){
    $('.box3').addClass('box3-ext');
  });
  $('.box3').mouseout(function(){
    $('.box3').removeClass('box3-ext');
  });
});

// JS7
$(function(){
  $('.box4').on('click', function(){
    $(this).slideUp();
  });
});

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
  });
});