"use strict";
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function play() {
  const audio = document.getElementById("audio");
  return audio.play();
}

function newLocation() {
  document.location.href = "gamestart.html";
}

// window.onload = function() {
//   document.getElementById("#pop").play();
// };
//
// $(document).ready(() => {
//   const keys = {
//     13: "Enter",
//     37: "ArrowLeft",
//     38: "ArrowUp",
//     39: "ArrowRight",
//     40: "ArrowDown",
//     65: "a",
//     66: "b"
//   };
//
//   const konamiCode = [
//     "ArrowUp",
//     "ArrowUp",
//     "ArrowDown",
//     "ArrowDown",
//     "ArrowLeft",
//     "ArrowRight",
//     "ArrowLeft",
//     "ArrowRight",
//     "b",
//     "a",
//     "Enter"
//   ];
//   let userInput = 0;
//   $("backgroundImage").html("insert image here");
//   document.addEventListener("keydown", e => {
//     // starts 2nd code
//
//     const key = keys[e.keyCode];
//     const requiredKey = konamiCode[userInput];
//
//     if (key === requiredKey) {
//       userInput++;
//       if (userInput === konamiCode.length) {
//         activateCheats();
//         userInput = 0;
//       }
//     } else {
//       userInput = 0;
//     }
//   });
//   function activateCheats() {
//     $("pop").play();
//     $("h1").html("Code Accepted");
//   }
// });
document.getElementById("pac-man-intro.mp3").src = "movie.mp4";
// window.onload = function pop() {
//   document.getElementById("#pop").play();
//   return pop();
// };

$(document).ready(() => {
  const keys = {
    13: "Enter",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    65: "a",
    66: "b"
  };

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter"
  ];
  let userInput = 0;

  $("backgroundImage").html("");
  document.addEventListener("keydown", e => {
    // starts 2nd code

    const key = keys[e.keyCode];
    const requiredKey = konamiCode[userInput];

    if (key === requiredKey) {
      userInput++;
      if (userInput === konamiCode.length) {
        activateCheats();
        userInput = 0;
      }
    } else {
      userInput = 0;
    }
  });
  function activateCheats() {
    // $('body').css();

    $("h1").html("You Have 30 Extra Lives");

    // $('body').css('background-size', '100px 100px');
  }
});

loginButton.addEventListener("click", e => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "meme13" && password === "password") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
