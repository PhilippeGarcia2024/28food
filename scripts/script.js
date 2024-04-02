let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Adiciona um evento de clique ao link do vídeo
document.getElementById("video-link").addEventListener("click", function(event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  
  // Alterna a visibilidade do contêiner do vídeo
  var videoContent = document.getElementById("video-content");
  if (videoContent.style.display === "none") {
      videoContent.style.display = "block";
  } else {
      videoContent.style.display = "none";
  }
});
