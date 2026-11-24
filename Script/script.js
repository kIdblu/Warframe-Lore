
document.addEventListener("keydown", function(event){
    if (event.key === "Escape" || event.key === " ") {
        returntoMain()
    }
})

function returntoMain(){
  window.location.href = "../index.html";
}

function openZoom(event, Thumbnail){
    
    const container = document.getElementById('main');

    const clickX = event.clientX;
    const clickY = event.clientY;

    container.style.transformOrigin = `${clickX}px ${clickY}px`;

    container.classList.add('zoom-in');

    setTimeout(() => {
        window.location.href = Thumbnail;
    }, 500); 

}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}