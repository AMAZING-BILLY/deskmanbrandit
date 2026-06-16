// Portfolio Auto-Scroll
const carousel = document.querySelector('.carousel');
setInterval(() => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
}, 4000);

// Testimonials Auto-Scroll
const testimonialSlider = document.querySelector('.testimonial-slider');
setInterval(() => {
  testimonialSlider.scrollBy({ left: 400, behavior: 'smooth' });
}, 5000);