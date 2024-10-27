// dom

let body = document.body;

let input = document.createElement("input");
input.type = "text";
input.name = "User Name";
input.setAttribute("value", "Ahmed");

console.log(input.hasAttribute("type"));
console.log(input.hasAttribute("value"));
console.log(input.hasAttribute("title"));
input.setAttribute("title", "will be the title");
console.log(input.hasAttribute("title"));

body.appendChild(input);
