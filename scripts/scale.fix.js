var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 300);
    return false;
});
$(window).scroll(function(){
  if($(this).scrollTop() < 100) {
    $('.scrollToTop').fadeIn();
  }
  else {
    $('.scrollToTop').fadeOut();
  }
});
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop: 0},800);
  return false;
});
