// area of a trapezoid

// Event listsener
document.getElementById("Output-btn").addEventListener("click", area);
// Event function
function area() {
  let b1 = +document.getElementById("b1").value;
  let b2 = +document.getElementById("b2").value;
  let h = +document.getElementById("h").value;
  //   process
  let trapezoid = 0.5 * (b1 + b2) * h;

  //   output
  document.getElementById("Output").innerHTML = trapezoid;
  console.log(trapezoid);
}
