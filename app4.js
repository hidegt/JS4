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