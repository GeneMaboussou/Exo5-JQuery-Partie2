// $(document).ready(function(){
//   $('#button').mouseenter(function(){
//     $('.text').css('color','red');
//   })
// })
// $('#button').mouseleave(function(){
//   $('.text').css('color','white');
// })
// $('#button').ready(function(){
//   $('#button').css('background-color','green');
// })



$(document).ready(function () {
  $('button').mouseover(function () {
    $('#text').css('color',$(this).attr ('id'));
  });
$('button').mouseout(function () {
  $('#text').css('color', '');
});
});
