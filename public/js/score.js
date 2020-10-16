const endMusic = document.querySelector("#dogLaugh");
$(document).ready(function() {
  const id = localStorage.getItem("name");
  $("#scoreTransition").hide();
  $("#scoreTransition").fadeIn(400);
  endMusic.play();
  $.get("/api/user_data").then(data => {
    $(".userName").text(data.email);
  });

  $.get("/api/save/" + id).then(data => {
    $("#scores").text(data.score);
    $("#level").text(data.level);
  });
});