const width = (height = "100");

const table = document.querySelector("#root tbody");
const box = document.createElement("div");
box.style.width = box.style.height = `${width}px`;

const getRandomColor = function () {
  const r = Math.round(Math.random() * 256),
    g = Math.round(Math.random() * 256),
    b = Math.round(Math.random() * 256);
  return {
    color: `rgb(${r}, ${g}, ${b})`,
    className: `c${r}${g}${b}`,
  };
};

const getColoredBox = function () {
  box.style.backgroundColor = getRandomColor();
  return box;
};

const divide = function () {
  const { innerWidth, innerHeight } = window;
  let rows = Math.floor(innerHeight / height);
  let columns = Math.floor(innerWidth / width);
  const row = document.createElement("tr");
  const data = document.createElement("td");
  data.appendChild(box);

  while (columns > 0) {
    row.appendChild(data.cloneNode(true));
    columns--;
  }

  while (rows > 0) {
    table.appendChild(row.cloneNode(true));
    rows--;
  }
};

const applyColors = function () {
  const boxes = document.querySelectorAll("div");
  boxes.forEach((box) => {
    const { color, className } = getRandomColor();
    box.style.backgroundColor = color;
    box.classList.add(className);
  });
};

table.addEventListener("click", (event) => {
  const { className } = event.target;
  const boxesOfSameColor = document.querySelectorAll(`.${className}`);
  if (boxesOfSameColor.length > 1) {
    console.log(boxesOfSameColor);
  }

  boxesOfSameColor.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});

divide();
applyColors();
