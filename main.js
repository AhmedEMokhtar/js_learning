
document.getElementById("div_btn").addEventListener("click", () => {
  const n1 = document.getElementById("first_number").value;
  const n2 = document.getElementById("second_number").value;
  const result = document.getElementById("result");
  result.innerHTML = `Result: ` + divion(Number(n1), Number(n2));
});


function divion(n1, n2) {
  if (n2 == 0) {
    alert("can not divided on zero")
  }
  else {
    return n1 / n2;
  }
}