const progressBar = document.querySelector("#progressBar");
const body = document.querySelector("body");

const animateBar = () => {
  let scrollDistance = -body.getBoundingClientRect().top;
  let progressWidth =
    (scrollDistance /
      (body.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  let value = Math.floor(progressWidth);
  progressBar.style.width = value + "%";
  if (value < 0) {
    progressBar.style.width = "0%";
  }
};

window.addEventListener("scroll", animateBar);
