const carouselPlugin = $ => {
  // Instantiate the Bootstrap carousel
  $('.multi-item-carousel').carousel({
    interval: false
  });

  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
    	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
}

let carousel;

const routes = router();
routes
  .addRoute(
    {
      route: 'main',
      template: '../views/main.html',
      script: () => {
        console.log('greets from main');
        carousel = document.querySelector('.carousel .carousel-inner');
        console.log(carousel);
        fetch('https://demo2697834.mockable.io/movies')
          .then(res => {
            console.log(res);
            return res.json();
          })
          .then(res => {
              console.log(res);
              const movies = res.entries.map( (movie, index) => {
                //const img = document.createElement('img');
                const div = document.createElement('div');
                index === 0 ? div.classList.add('active') : null;
                div.classList.add('item');
                div.innerHTML = `
                  <div class="col-xs-4">
                    <div class="col-xs-2 offset-xs-1"></div>
                    <a href="#details">
                      <img width="214" height="317" src="${movie.images[0].url ? movie.images[0].url : '/img/movie-placeholder.jpg'}" class="img-responsive">
                    </a>
                  </div>
                `;
                carousel.appendChild(div);
                return div;
              });
              console.log(movies);
              carouselPlugin($);
          });
      }
    }
  )
  .addRoute(
    {
      route: 'details',
      template: '../views/movie-details.html',
      script: () => console.log('greets from details')
    }
  )
  .addRoute(
    {
      route: 'player',
      template: '../views/movie-player.html',
      script: () => console.log('greets from movie-player')
    }
  )
  .setDefaultHash('main');

//const slider = sliderHandler(slides, slots);
