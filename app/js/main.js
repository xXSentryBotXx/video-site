const slots = document.querySelectorAll('.slider .slide');

const slides = [
  `
    <p>Slide one!</p>
    <img src="images/slider_1.jpg" alt="">
  `,
  `
    <p>Slide two!</p>
    <img src="images/slider_1.jpg" alt="">
  `,
  `
    <p>Slide three!</p>
    <img src="images/slider_1.jpg" alt="">
  `,
  `
    <p>Slide four!</p>
    <img src="images/slider_1.jpg" alt="">
  `,
  `
    <p>Slide five!</p>
    <img src="images/slider_1.jpg" alt="">
  `
];

const slider = sliderHandler(slides, slots);
