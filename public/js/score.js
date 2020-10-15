$(document).ready(() => {
  $.get("/api/user_data").then(data => {
    $(".userName").text(data.email);
  });

  $.get("/api/save").then(data => {
    $("#scores").text(data.score);
    $("#level").text(data.level);
  });
});
