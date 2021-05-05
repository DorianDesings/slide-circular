const images = document.querySelectorAll('.gallery__img');
const gallery = document.getElementById('gallery-container');
let animatedImage = 0;

gallery.addEventListener('animationend', () => {
  images[animatedImage].classList.remove('gallery__img--animated');
  if (animatedImage < images.length - 1) {
    animatedImage = animatedImage + 1;
  } else {
    animatedImage = 0;
  }
  images[animatedImage].classList.add('gallery__img--animated');
});
