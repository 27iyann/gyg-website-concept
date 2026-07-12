document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slider-wrap .slide'));
  const dots = Array.from(document.querySelectorAll('.slider-nav .slider-dot'));

  if (!slides.length || !dots.length) {
    return;
  }

  let activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
  if (activeIndex === -1) {
    activeIndex = 0;
  }

  function updateSlider(index) {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      activeIndex = dotIndex;
      updateSlider(activeIndex);
    });
  });

  updateSlider(activeIndex);
});
