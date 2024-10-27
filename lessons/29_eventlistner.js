// eventListener
let title = document.getElementById("title");
let main_text = title.innerHTML;

title.addEventListener("mouseover", () => {
  title.innerHTML = "hello ahmed mokhtar";
});
title.addEventListener("mouseleave", () => {
  title.innerHTML = main_text;
});
