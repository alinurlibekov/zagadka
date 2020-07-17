$(".true_1").click(function () {
  $(".zag1").addClass("noactive");
  $(".zag2").addClass("active");
  $(".yes").addClass("ok");
});

$(".false").click(function () {
  $(".no").toggleClass("stop");
});

$("#close").click(function () {
  $(".no").toggleClass("nostop");
});

$("#close_2").click(function () {
  $(".yes").toggleClass("nook");
  $(".yes").removeClass("ok");
});

$(".true_2").click(function () {
  $(".zag2").addClass("noactive");
  $(".zag3").addClass("active");
  $(".yes").addClass("ok");
  $(".yes").removeClass("nook");
});

$(".true_3").click(function () {
  $(".zag3").addClass("noactive");
  $(".thenc").addClass("ac");
});

$("#close_3").click(function () {
  $(".thenc").removeClass("ac");
});
