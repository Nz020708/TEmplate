let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("slider_navlink");
let currentSlide = 0;

document.querySelector('.next').addEventListener("click", () => {
    changeSlide(currentSlide + 1);
});
document.querySelector('.prev').addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

// setInterval(changeSlide, 2000)

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.remove("active");
    slides[moveTo].classList.add("active");
    navlinks[currentSlide].classList.remove("active");
    navlinks[moveTo].classList.add("active");
    
    currentSlide = moveTo;
   
}

document.querySelectorAll('.slider_navlink').forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        if (currentSlide !== dotIndex) {
            changeSlide(dotIndex);
        }
    })
})

