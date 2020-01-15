// Your code goes here
const logo = document.querySelector('.logo-heading');

logo.addEventListener("mouseover", () => {
    logo.style.color = "green"
    gsap.to(".logo-heading", {duration: 2, x: 300});
    logo.stopPropagation();
});

logo.addEventListener("mouseleave", () => {
    logo.style.color = ""
});

const h1 = document.querySelector("img");

h1.addEventListener("click", () => {
    h1.style.transform = "scale(1.5)"
});

const p1 = document.querySelector('p');

p1.addEventListener("dblclick", () => {
   p1.style.color = "blue" 
});

const h2 = document.querySelectorAll("h2");

h2[0].addEventListener("wheel", () => {
    h2[0].style.color = " red "
    gsap.to("h2", {duration: 3, x: 100, y: 100, scale: 2, skewX: 45, rotation: 180});
});

const bg1 = document.querySelector(".text-content");

bg1.addEventListener("mousedown", () => {
    bg1.style.visibility = "hidden"
});

const pic = document.querySelectorAll("img");

pic[1].addEventListener("mouseout", () => {
    pic[1].style.webkitTransform = "rotate(45deg)";
    gsap.to("img", {duration: 3, rotation: 360, scale: 0.5});
});

pic[2].addEventListener("mouseup", () => {
    pic[2].style.webkitTransform = "rotate(90deg)";
});

pic[3].addEventListener("mousemove", () => {
    pic[3].style.webkitTransform = "rotate(65deg)"
});

h2[2].addEventListener("mouseenter", () => {
    h2[2].style.color = "blue"
});

const nav = document.querySelectorAll('a');

nav.addEventListener("click", () => {
    nav.preventDefault()
});