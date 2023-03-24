// Counter

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const startingCount = +counter.innerHTML;
    const increment = targetCount / 10;
    if (startingCount < targetCount) {
      counter.innerHTML = `${startingCount + increment}`;
      setTimeout(updateCounter, 400);
    }
  };
  updateCounter();
});

// Testimonial

const wrapper = document.querySelector('.testimonial-wrapper');
const indicators = [...document.querySelectorAll('.indicator button')];
let currentTestimonial = 0;
indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})

