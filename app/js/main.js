const slots = document.querySelectorAll('.slider .slide');

let slider;


fetch('https://demo2697834.mockable.io/movies')
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(res => {
      console.log(res);
      const movies = res.entries.map(movie => {
        const img = document.createElement('img');
        img.src = movie.images[0].url || '../img/movie-placeholder.jpg';
        img.width = 214;
        img.height = 317;
        return Object.assign({}, movie, { node: img});
      });
      console.log(movies);
      slider = sliderHandler(movies, slots);
  });

//const slider = sliderHandler(slides, slots);
