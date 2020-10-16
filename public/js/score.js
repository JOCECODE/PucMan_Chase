$(document).ready(() => {
  const id = localStorage.getItem("name");
  $.get("/api/user_data").then(data => {
    $(".userName").text(data.email);
  });

  $.get("/api/save/" + id).then(data => {
    $("#scores").text(data.score);
    $("#level").text(data.level);
  });
  // var score = localStorage.getItem("currentScore")
  // var level = localStorage.getItem("currentLevel")
  // $("#scores").text(score)
  // $("#level").text(level)

});
