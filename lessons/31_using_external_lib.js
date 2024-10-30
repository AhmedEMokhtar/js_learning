// anime({
//   targets: "#rect",
//   left: "240px",
//   backgroundColor: "#54e320",
//   borderRadius: ["0%", "50%"],
//   easing: "easeInOutQuad",
// });

// explain it :  this is a way to change the text inside the element
// with external lib  like anime.js you can animate the text
// in this case we are changing the text to "hello"
// and we are also animating the text with the same animation as the rectangle
// is this jquery?
let rect = $("#rect").html("hello it's me");

$("#user").mouseover((e) => {
  $(this).html("Ahmed Elsayed Mokhtar");
  $("#rect").css("background-color", "green");
});

$("#user").mouseleave((e) => {
  $("#rect").css("background-color", "red");
});
