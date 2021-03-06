// getting the id from the url
var urlPathName = window.location.pathname.split('/');
urlPathName = urlPathName[urlPathName.length-1]




$(function() {


  $('button').click(function(evt){
    evt.preventDefault();
    console.log(urlPathName)
    console.log($('#rooms').val())
    var conceptsArr = disp($(".goals").toArray());
    console.log("conceptsArr ", conceptsArr);
    $.ajax({
        url: urlPathName,
        type: 'PUT',
        data: {
          'startDate' : $('#inputStartDate').val(),
          'endDate' : $('#inputEndDate').val(),
          'rooms' : $('#rooms').val(),
          'adults' : $('#adults').val(),
          'children' : $('#children').val(),
          'concepts' : conceptsArr,
          'tripProfile' : 'none'
        }
      })
      .done(function(update) {
        console.log('ajax request done')
        window.location.reload();
      })
      .fail(function(jqXHR, textStatus) {
        console.log('Request failed: ' + textStatus);
      });
  })
  $("#add-btn").click(function(e) {
    var inputText = $("#inputText").val();
    if(inputText) {
      $(".labelBox").append("<span class='label label-danger goals'>" + inputText + "</span>");
      $("#inputText").val('');

    }

  })
  $("#inputText").keypress(function(e) {
    if(e.which === 13) {
      var inputText = $("#inputText").val();
      if(inputText) {
        $(".labelBox").append("<span class='label label-danger goals'>" + inputText + "</span>");
        $("#inputText").val('');

      }
    }
  })
})

function disp(goals) {
  var a = [];
  for (var i = 0; i < goals.length; i++) {
    a.push(goals[i].innerHTML);
  }
  return a.join(',');
}
