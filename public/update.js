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
          'tripName': $('#inputTrip').val(),
          'startDate' : $('#inputStartDate').val(),
          'endDate' : $('#inputEndDate').val(),
          'rooms' : $('#rooms').val(),
          'adults' : $('#adults').val(),
          'children' : $('#children').val(),
          'concepts' : $('#inputConcepts').val()
        }
      })
      .done(function(update) {

      })
      .fail(function(jqXHR, textStatus) {
        console.log('Request failed: ' + textStatus);
      });
  })
})
