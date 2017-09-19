const sliderHandler = (slides, slots) => {
  let prev = slides.length - 1;
  let current = 0;
  let next = 1;

  let prevSlot = slots[0];
  let currentSlot = slots[1];
  let nextSlot = slots[2];

  prevSlot.appendChild(slides[prev].node);
  currentSlot.appendChild(slides[current].node);
  nextSlot.appendChild(slides[next].node);

  const nextSlide = () => {
    prevSlot.removeChild(slides[prev].node);
    currentSlot.removeChild(slides[current].node);
    nextSlot.removeChild(slides[next].node);

    prev = current;
    current = next;
    next = next === slides.length - 1 ? 0 : next + 1;

    prevSlot.appendChild(slides[prev].node);
    currentSlot.appendChild(slides[current].node);
    nextSlot.appendChild(slides[next].node);
  }

  const prevSlide = () => {
    prevSlot.removeChild(slides[prev].node);
    currentSlot.removeChild(slides[current].node);
    nextSlot.removeChild(slides[next].node);

    next = current;
    current = prev;
    prev = prev == 0 ? slides.length - 1 : prev - 1;

    prevSlot.appendChild(slides[prev].node);
    currentSlot.appendChild(slides[current].node);
    nextSlot.appendChild(slides[next].node);
  }

  return {
    prevSlide,
    nextSlide
  }
}
