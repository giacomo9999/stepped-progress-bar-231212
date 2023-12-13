const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

console.log("progress: ", progress);

let currentActive = 1;

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  const barWidth = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(barWidth);
  
  progress.style.width = barWidth;
};

next.addEventListener("click", () => {
  currentActive += 1;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log("next:", currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive -= 1;

  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log("prev:", currentActive);
  update();
});
