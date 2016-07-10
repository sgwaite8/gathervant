var urlPathName = window.location.pathname.split('/');
urlPathName = urlPathName[urlPathName.length-1]
var update = urlPathName



$(function() {

  $('button').click(function(evt){
    evt.preventDefault();
    $.ajax({
        url: update,
        type: 'PUT',
        data: {
          'tripName': 'hello';
        }
      })
      .done(function(update) {

      })
      .fail(function(jqXHR, textStatus) {
        console.log('Request failed: ' + textStatus);
      });
  })
})
