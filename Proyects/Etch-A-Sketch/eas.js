const containerDiv = document.getElementById("container");

function makeRows(rows, cols) {
  containerDiv.style.setProperty("--grid-rows", rows);
  containerDiv.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let square = document.createElement("div");
    containerDiv.appendChild(square).className = "grid-item";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
      console.log(square);
    });
  }
}

makeRows(16, 16);
