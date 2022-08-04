//1. #progressBar
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


//2. #scrollTop
var scrollTopBTN = document.getElementById("scrollTop");

window.onscroll = function () {
  scrollFunction();
};

scrollTopBTN.onclick = function () {
  topFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollTopBTN.classList.add("moveUp");
    scrollTopBTN.style.display = "block";
  } else {
    scrollTopBTN.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
