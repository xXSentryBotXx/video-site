const sliderHandler = (slides, slots) => {
  let prev = slides.length - 1;
  let current = 0;
  let next = 1;

  let prevSlot = slots[0];
  let currentSlot = slots[1];
  let nextSlot = slots[2];

  prevSlot.innerHTML = slides[prev];
  currentSlot.innerHTML = slides[current];
  nextSlot.innerHTML = slides[next];

  const nextSlide = () => {
    prev = current;
    current = next;
    next = next === slides.length - 1 ? 0 : next + 1;

    prevSlot.innerHTML = slides[prev];
    currentSlot.innerHTML = slides[current];
    nextSlot.innerHTML = slides[next];
  }

  const prevSlide = () => {
    next = current;
    current = prev;
    prev = prev == 0 ? slides.length - 1 : prev - 1;

    prevSlot.innerHTML = slides[prev];
    currentSlot.innerHTML = slides[current];
    nextSlot.innerHTML = slides[next];
  }

  return {
    prevSlide,
    nextSlide
  }
}
