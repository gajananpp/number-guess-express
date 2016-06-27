$(function() {
  $("#submit").on("click",function() {
    event.preventDefault();
    var val = {"num" : $("#input").val()};
    $.get("/test",val,function(data) {
      $("#results").html(data);
    });
  });
});
