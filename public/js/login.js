"use strict";

$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

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

  window.onload=function() {
    document.getElementById("pop").play();
  };

  $(document).ready(function(){


    var keys = {
      13: 'Enter',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      65: 'a',
      66: 'b'
    };

    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    var userInput = 0;

    $('backgroundImage').html('');
    document.addEventListener('keydown', function (e) { // starts 2nd code

      var key = keys[e.keyCode];
      var requiredKey = konamiCode[userInput];

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

      $('h1').html("You Have 30 Extra Lives");

      // $('body').css('background-size', '100px 100px');


    }
  });

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
