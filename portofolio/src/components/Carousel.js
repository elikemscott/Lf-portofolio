import React from 'react'

function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1526615735835-530c611a3d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        alt="First slide" height="800px"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1441038718687-699f189fa401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
        alt="Second slide" height="800px"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1586856635275-af01918579ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="Third slide" height="800px"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>
        </div>
    )
}

export default Carousel;
