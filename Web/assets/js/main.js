
window.onload = function() { showDiv('1');}

$('.menu-link').on('click', function(){
 $('.menu-link').removeClass('is-active');
 $(this).toggleClass('is-active');
});
$('.side-menu-link').on('click', function(){
 $('.side-menu-link').removeClass('is-active');
 $(this).toggleClass('is-active');
});
$('.btn').on('click', function(){
    $("#displayForm").toggleClass('is-active');
   });
$('.btn-close').on('click', function(){
    $('#displayForm').removeClass('is-active');
   });
function showDiv(idInfo) {
    console.log(idInfo);
  var sel = document.getElementById('divLinks').getElementsByClassName('showdiv');
  for (var i=0; i<sel.length; i++) {
    sel[i].style.display = 'none';
  }
  document.getElementById('container'+idInfo).style.display = 'block';
}