const root = document.getElementById("root");
const progressBarHeight = 50;

const progressBarContainer = document.createElement("div");
progressBarContainer.style.width = window.innerWidth;
progressBarContainer.classList.add("progressBarContainer");

const progressBar = document.createElement("div");
progressBar.style.height = `${progressBarHeight}px`;

const progressBars = [];

const createProgressBar = () => {
  const clonedrogressprogressBar = progressBar.cloneNode(true);
  progressBarContainer.appendChild(clonedrogressprogressBar);
  clonedrogressprogressBar.classList.add("progressBar");
  progressBars.push(clonedrogressprogressBar);
};

window.onload = () => {
  progressBars[0].classList.add("progressBarStartProgress");
};

root.appendChild(progressBarContainer);

let rows = Math.floor(innerHeight / progressBarHeight);

while (rows > 0) {
  createProgressBar();
  rows--;
}

for (let i = 0; i < progressBars.length - 1; i++) {
  const progressBar = progressBars[i];
  progressBar.ontransitionend = () => {
    progressBars[i + 1].classList.add("progressBarStartProgress");
  };
}
