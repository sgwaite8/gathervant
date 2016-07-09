$(document).ready(function(){
  $('.btn-primary').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/5,
    }, 1000);
  });
});
