$(document).ready(function () {
  $(".register-overlay button").click(function () {
    $(".overlay-container").addClass("active-overlay");
    $(".my-forms").addClass("active-form");
  });
  $(".login-overlay button").click(function () {
    $(".overlay-container").removeClass("active-overlay");
    $(".my-forms").removeClass("active-form");
  });
});
