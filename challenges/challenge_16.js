// Get references to existing elements
let body = document.body;
let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");

// ---------- Part 1 Setup ----------
// Create elements for part 1
let inputField = document.createElement("input");
let btnSave = document.createElement("input");
let resultArea = document.createElement("p");

// Configure properties and styles
part1.style.cssText =
  "margin:2px;background-color:indigo;height:50%;padding:15%";
inputField.placeholder = "Enter Name";
btnSave.type = "submit";
btnSave.value = "Save";
resultArea.style.cssText = "margin-top:5%;text-align:center;color:white";

// Append elements in Part 1
part1.appendChild(inputField);
part1.appendChild(btnSave);
part1.appendChild(resultArea);

// Event listeners for Part 1
inputField.addEventListener("mouseover", () => {
  resultArea.innerHTML = "";
});
inputField.addEventListener("mouseleave", () => {
  resultArea.innerHTML = inputField.value ? inputField.value : "";
});

// ---------- Part 2 Setup ----------
// Create and style result message for Part 2
let resultMsg = document.createElement("p");
resultMsg.style.cssText = "margin-top:5%;text-align:center;color:black";
resultMsg.innerHTML = "ادخل الاسم";
part2.appendChild(resultMsg);

// Event listener for result message
resultMsg.addEventListener("mouseover", () => {
  if (resultMsg.innerHTML === "ادخل الاسم") {
    resultMsg.style.cssText =
      "background-color:red;width:50%;margin:auto;text-align:center";
  } else {
    resultMsg.style.cssText =
      "background-color:green;width:50%;margin:auto;text-align:center";
  }
});

// ---------- Save Button Logic ----------
// Array to store input values
let inputs = [];

btnSave.addEventListener("click", () => {
  if (inputField.value) {
    inputs.push(inputField.value);
  }
  updateValues(inputs);
});

// Function to update values
function updateValues(inputs) {
  resultMsg.innerHTML = "";
  if (inputs.length) {
    inputs.forEach((element) => {
      resultMsg.innerHTML += `${element}<br/>`;
      resultMsg.style.cssText =
        "background-color:green;width:50%;margin:auto;text-align:center";
    });
    inputs = [];
  } else {
    resultMsg.innerHTML = "ادخل الاسم";
  }
}

// Append Part 1 and Part 2 to the body
body.appendChild(part1);
body.appendChild(part2);
