let size = 6;

const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.classList = "grid";

const setGrid = () => {
  grid.setAttribute("style", `width:${800 / size}px;height:${800 / size}px`);
  container.innerHTML = "";
  for (let i = 1; i <= size * size; i++) {
    container.appendChild(grid.cloneNode(true));
  }

  const grids = document.querySelectorAll(".grid");
  grids.forEach((gridx) => {
    gridx.addEventListener("mouseover", (e) => {
      e.target.style["background-color"] = "black";
    });
  });
};

setGrid();

const changeButton = document.querySelector(".change");
const clearButton = document.querySelector(".clear");
changeButton.addEventListener("click", () => {
  let value = prompt("insert number here (max 100)");
  if (!Number.isInteger(value) && !value) {
    alert("NOT A NUMBER!!! Please input a valid number");
  } else {
    if (value > 100) {
      size = 100;
    } else {
      size = value;
    }
  }

  setGrid();
});

clearButton.addEventListener("click", () => {
  size = 6;
  setGrid();
});
