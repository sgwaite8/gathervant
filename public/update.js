var urlPathName = window.location.pathname.split('/');
urlPathName = urlPathName[urlPathName.length-1]
var update = '/trips/'+ urlPathName



$(function() {

  $('button').click(function(evt){
    evt.preventDefault();
    $.ajax({
        url: update,
        type: 'PUT',
        data: {'done': true}
      })
      .done(function(update) {
        console.log(update);
        console.log('test')
      })
      .fail(function(jqXHR, textStatus) {
        console.log('Request failed: ' + textStatus);
      });
  })
})
