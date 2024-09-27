let size = 16;
let mode = "black";

const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.classList = "grid";

const changeButton = document.querySelector(".change");
const clearButton = document.querySelector(".clear");

const colorCheck = document.querySelector("#color");

const handleSetGrid = () => {
  grid.setAttribute("style", `width:${800 / size}px;height:${800 / size}px`);
  container.innerHTML = "";
  for (let i = 1; i <= size * size; i++) {
    container.appendChild(grid.cloneNode(true));
  }

  const grids = document.querySelectorAll(".grid");
  grids.forEach((gridx) => {
    gridx.addEventListener("mouseover", (e) => {
      e.target.style["background-color"] = mode;
      if (mode.includes("rgb")) {
        mode = rgbRandomizer();
      }
    });
  });
};

const rgbRandomizer = () => {
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)

  return `rgb(${r}, ${g}, ${b})`
}

const handleColorCheck = (e) => {
  if (e.target.checked) {
    mode = rgbRandomizer();
  } else {
    mode = "black";
  }
};

handleSetGrid();

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
  handleSetGrid();
});

colorCheck.addEventListener("change", (e) => {
  handleColorCheck(e);
});

clearButton.addEventListener("click", () => {
  size = 16;
  colorCheck.checked = false
  mode = "black"
  handleSetGrid();
});
