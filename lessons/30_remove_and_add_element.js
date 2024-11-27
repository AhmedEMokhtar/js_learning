// how to create and remove  a node from dom

let li = document.createElement("li");
let li_text = document.createTextNode("mostafa");
li.appendChild(li_text);
let ul = document.getElementsByTagName("ul")[0];
ul.appendChild(li);
document.body.appendChild(ul);

//  you cna remove by
let lis = document.getElementsByTagName("li");
for (li of lis) {
  if (li.innerHTML == "mohamed") {
    ul.removeChild(li);
  }
}
