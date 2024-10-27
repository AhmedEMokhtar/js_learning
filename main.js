// part 1

let body = document.body;
let part1 = document.getElementById("part1");
let inputField = document.createElement("input");
part1.style.cssText = `margin:2px;background-color:indigo;height:50%;padding:15%`;
inputField.placeholder = "Enter Name";
part1.appendChild(inputField);

let btnSave = document.createElement("input");
btnSave.type = "submit";
btnSave.value = "Save";
part1.appendChild(btnSave);

let resultArea = document.createElement("p");
resultArea.style.cssText = "margin-top:5%;text-align:center;color:white";
part1.appendChild(resultArea);

inputField.addEventListener("mouseover", () => {
  resultArea.innerHTML = "";
});
inputField.addEventListener("mouseleave", () => {
  resultArea.innerHTML = inputField.value ? inputField.value : "";
});

// --------------------part 2---------------------

let part2 = document.getElementById("part2");
let warningMsg = document.createElement("p");
warningMsg.style.cssText = "margin-top:5%;text-align:center;color:black";

warningMsg.innerHTML = "ادخل الاسم"

part2.appendChild(warningMsg);

body.appendChild(part1);
body.appendChild(part2);
