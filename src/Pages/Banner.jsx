import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full pb-10">
          
  <div id="slide1" className="carousel-item relative w-full lg:h-[500px] bg-cover">
    <img
      src="https://i.ibb.co/DHRQtvb7/fishing.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full lg:h-[500px] bg-cover">
    <img
      src="https://i.ibb.co/svB9rjX3/travel.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full lg:h-[500px] bg-cover">
    <img
      src="https://i.ibb.co/CKKJmWb3/cooking-hobby.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full lg:h-[500px] bg-cover">
    <img
      src="https://i.ibb.co/pBL7mnNj/pexels-photo-102127-1.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;