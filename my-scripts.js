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
var customNavItem = document.getElementById("customNav");

window.onscroll = function () {
  scrollTopFunction();
  NavScrollFunction();
};

scrollTopBTN.onclick = function () {
  topFunction();
};

function scrollTopFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollTopBTN.classList.add("moveUp");
    scrollTopBTN.innerHTML = "<i class='fa fa-angle-up'></i>";
    scrollTopBTN.style.display = "block";
  } else {
    scrollTopBTN.style.transition = "0.2s";
    scrollTopBTN.style.display = "none";
  }
}

function NavScrollFunction() {
  if (
    document.body.scrollTop  > 100 ||
    document.documentElement.scrollTop  > 100
  ) {
    customNavItem.style.boxShadow = "var(--shadowsmall)";
    customNavItem.style.transition = "0.2s";
  } else {
    customNavItem.style.boxShadow = "none";
    customNavItem.style.transition = "0.2s";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//3. #PassWord
var x = document.getElementById("PassWord");
var y = document.getElementById("PassWordIcon");

y.addEventListener("click", ShowPassWord);

function ShowPassWord() {
  x.type = "text";
  y.style.filter = "brightness(1.5)";

  setTimeout(function () {
    x.type = "password";
    y.style.filter = "brightness(1)";
  }, 1000);
}
