const hamburger = document.querySelector(".hamburger");
const ulcontainer = document.querySelector(".nav-links");
const placeholder = document.querySelector(".bg-placeholder");
const close = document.querySelector(".close");
const sc2 = document.querySelector(".section1-container");

hamburger.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  placeholder.classList.toggle("active");
  ulcontainer.classList.toggle("active");
});

close.addEventListener("click", () => {
  placeholder.classList.toggle("active");
  ulcontainer.classList.toggle("active");
  document.body.style.overflow = "visible";
});
placeholder.addEventListener("click", () => {
  placeholder.classList.toggle("active");
  ulcontainer.classList.toggle("active");
  document.body.style.overflow = "visible";
});


